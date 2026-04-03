// ======================================
// HYBOUCLIER - Gestionnaire de Stockage
// Local Storage Management (IndexedDB)
// ======================================

const storageManager = (() => {
    const DB_NAME = 'HYBOUCLIER_DB';
    const STORE_NAME = 'users';
    const SETTINGS_STORE = 'settings';
    let db = null;

    // Initialiser IndexedDB
    const initDB = async () => {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, 1);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                db = request.result;
                resolve(db);
            };

            request.onupgradeneeded = (event) => {
                const database = event.target.result;
                
                // Créer les stores si ils n'existent pas
                if (!database.objectStoreNames.contains(STORE_NAME)) {
                    database.createObjectStore(STORE_NAME, { keyPath: 'id' });
                }
                if (!database.objectStoreNames.contains(SETTINGS_STORE)) {
                    database.createObjectStore(SETTINGS_STORE, { keyPath: 'key' });
                }
            };
        });
    };

    // Assurez-vous que la DB est initialisée
    const ensureDB = async () => {
        if (!db) {
            await initDB();
        }
        return db;
    };

    // Créer ou charger un utilisateur
    const createOrLoadUser = (username) => {
        const existingUser = JSON.parse(localStorage.getItem('HYBOUCLIER_USER_' + username));
        
        if (existingUser) {
            localStorage.setItem('HYBOUCLIER_CURRENT_USER', username);
            return existingUser;
        }

        const newUser = {
            id: Date.now().toString(),
            username: username,
            avatar: '👤',
            bio: '',
            createdAt: new Date().toISOString(),
            posts: [],
            connections: []
        };

        saveUser(newUser);
        localStorage.setItem('HYBOUCLIER_CURRENT_USER', username);
        
        return newUser;
    };

    // Sauvegarder un utilisateur
    const saveUser = (user) => {
        localStorage.setItem('HYBOUCLIER_USER_' + user.username, JSON.stringify(user));
    };

    // Récupérer l'utilisateur actuel
    const getCurrentUser = () => {
        const username = localStorage.getItem('HYBOUCLIER_CURRENT_USER');
        if (!username) return null;
        
        const userJson = localStorage.getItem('HYBOUCLIER_USER_' + username);
        return userJson ? JSON.parse(userJson) : null;
    };

    // Effacer l'utilisateur actuel (déconnexion)
    const clearCurrentUser = () => {
        localStorage.removeItem('HYBOUCLIER_CURRENT_USER');
    };

    // Sauvegarder un paramètre
    const saveSetting = (key, value) => {
        localStorage.setItem('HYBOUCLIER_SETTING_' + key, JSON.stringify(value));
    };

    // Récupérer un paramètre
    const getSetting = (key) => {
        const value = localStorage.getItem('HYBOUCLIER_SETTING_' + key);
        return value ? JSON.parse(value) : null;
    };

    // Obtenir tous les utilisateurs (pour le partage P2P plus tard)
    const getAllUsers = () => {
        const users = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('HYBOUCLIER_USER_')) {
                const userJson = localStorage.getItem(key);
                users.push(JSON.parse(userJson));
            }
        }
        return users;
    };

    // Exporter toutes les données
    const exportAllData = () => {
        const data = {
            users: getAllUsers(),
            settings: {},
            exportDate: new Date().toISOString()
        };

        // Récupérer tous les paramètres
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('HYBOUCLIER_SETTING_')) {
                const settingKey = key.replace('HYBOUCLIER_SETTING_', '');
                data.settings[settingKey] = JSON.parse(localStorage.getItem(key));
            }
        }

        return data;
    };

    // API publique
    return {
        initDB,
        createOrLoadUser,
        saveUser,
        getCurrentUser,
        clearCurrentUser,
        saveSetting,
        getSetting,
        getAllUsers,
        exportAllData
    };
})();

// Initialiser la base de données au chargement
window.addEventListener('load', () => {
    storageManager.initDB();
});
