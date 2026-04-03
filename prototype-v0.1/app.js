// ======================================
// HYBOUCLIER - Application Principale
// Local-First Social Network
// ======================================

let currentUser = null;

// ========== INITIALISATION ==========

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    const savedUser = storageManager.getCurrentUser();
    
    if (savedUser) {
        loadUserSession(savedUser);
    } else {
        showAuthScreen();
    }
}

function setupEventListeners() {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkMode');
    darkModeToggle.addEventListener('change', (e) => {
        document.body.classList.toggle('dark-mode', e.target.checked);
        storageManager.saveSetting('darkMode', e.target.checked);
    });

    // Charger les paramètres sauvegardés
    const savedDarkMode = storageManager.getSetting('darkMode');
    if (savedDarkMode) {
        darkModeToggle.checked = true;
        document.body.classList.add('dark-mode');
    }

    // Charger la vidéo YouTube URL sauvegardée
    const savedYoutubeUrl = storageManager.getSetting('youtubeUrl');
    if (savedYoutubeUrl) {
        loadYoutubeVideo(savedYoutubeUrl);
        document.getElementById('youtubeUrl').value = savedYoutubeUrl;
    } else {
        // URL par défaut (vous pouvez la changer)
        loadYoutubeVideo('dQw4w9WgXcQ');
    }
}

// ========== AUTHENTIFICATION ==========

function showAuthScreen() {
    document.getElementById('authScreen').classList.remove('hidden');
    document.getElementById('mainScreen').classList.add('hidden');
}

function createOrLoadAccount() {
    const username = document.getElementById('username').value.trim();

    if (!username) {
        alert('Veuillez entrer un pseudo');
        return;
    }

    if (username.length < 2) {
        alert('Le pseudo doit contenir au moins 2 caractères');
        return;
    }

    // Créer ou charger l'utilisateur
    currentUser = storageManager.createOrLoadUser(username);
    loadUserSession(currentUser);
}

function loadUserSession(user) {
    currentUser = user;
    
    // Générer un code ami si pas existant
    if (!currentUser.friendCode) {
        currentUser.friendCode = p2pManager.generateFriendCode(currentUser.username);
        storageManager.saveUser(currentUser);
    }
    
    // Afficher l'écran principal
    document.getElementById('authScreen').classList.add('hidden');
    document.getElementById('mainScreen').classList.remove('hidden');

    // Mettre à jour le profil
    updateProfileDisplay();
    loadFeed();
    loadProfileData();
    loadFriendsUI();
}

function logout() {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        storageManager.clearCurrentUser();
        currentUser = null;
        showAuthScreen();
        document.getElementById('username').value = '';
        document.getElementById('postContent').value = '';
    }
}

// ========== AFFICHAGE PROFIL ==========

function updateProfileDisplay() {
    if (!currentUser) return;

    document.getElementById('profileName').textContent = currentUser.username;
    document.getElementById('avatar').textContent = currentUser.avatar || '👤';
    
    const joinDate = new Date(currentUser.createdAt);
    document.getElementById('joinDate').textContent = 
        `Inscrit le ${joinDate.toLocaleDateString('fr-FR')}`;
}

function loadProfileData() {
    if (!currentUser) return;

    document.getElementById('editUsername').value = currentUser.username;
    document.getElementById('editBio').value = currentUser.bio || '';
    document.getElementById('editAvatar').value = currentUser.avatar || '👤';
    document.getElementById('postCount').textContent = currentUser.posts.length;
    
    const joinDate = new Date(currentUser.createdAt);
    document.getElementById('memberSince').textContent = joinDate.toLocaleDateString('fr-FR');
}

function saveProfile() {
    if (!currentUser) return;

    currentUser.username = document.getElementById('editUsername').value.trim();
    currentUser.bio = document.getElementById('editBio').value.trim();
    currentUser.avatar = document.getElementById('editAvatar').value.trim() || '👤';

    storageManager.saveUser(currentUser);
    updateProfileDisplay();
    alert('Profil mis à jour !');
}

// ========== POSTS / FEED ==========

function publishPost() {
    if (!currentUser) return;

    const content = document.getElementById('postContent').value.trim();

    if (!content) {
        alert('Veuillez écrire quelque chose');
        return;
    }

    const post = {
        id: Date.now().toString(),
        username: currentUser.username,
        avatar: currentUser.avatar,
        content: content,
        createdAt: new Date().toISOString(),
        likes: 0,
        liked: false
    };

    currentUser.posts.unshift(post);
    storageManager.saveUser(currentUser);

    document.getElementById('postContent').value = '';
    document.getElementById('postCount').textContent = currentUser.posts.length;
    
    loadFeed();
}

function loadFeed() {
    if (!currentUser) return;

    const feedContainer = document.getElementById('feedContainer');
    feedContainer.innerHTML = '';

    // Afficher les posts de l'utilisateur actuel
    // Plus tard: afficher aussi les posts d'amis via P2P
    currentUser.posts.forEach(post => {
        const postElement = createPostElement(post);
        feedContainer.appendChild(postElement);
    });

    if (currentUser.posts.length === 0) {
        feedContainer.innerHTML = '<p class="empty-message">Aucun post pour le moment. Commencez à partager !</p>';
    }
}

function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    
    const timeAgo = getTimeAgo(post.createdAt);

    postDiv.innerHTML = `
        <div class="post-header">
            <span class="post-avatar">${post.avatar}</span>
            <div class="post-meta">
                <strong>${post.username}</strong>
                <span class="post-time">${timeAgo}</span>
            </div>
        </div>
        <div class="post-content">
            ${post.content}
        </div>
        <div class="post-actions">
            <button onclick="likePost('${post.id}')" class="btn-like ${post.liked ? 'liked' : ''}">
                ${post.liked ? '❤️' : '🤍'} ${post.likes}
            </button>
        </div>
    `;

    return postDiv;
}

function likePost(postId) {
    if (!currentUser) return;

    const post = currentUser.posts.find(p => p.id === postId);
    if (post) {
        post.liked = !post.liked;
        post.likes = post.liked ? post.likes + 1 : Math.max(0, post.likes - 1);
        storageManager.saveUser(currentUser);
        loadFeed();
    }
}

// ========== GESTION DONNÉES ==========

function exportData() {
    if (!currentUser) return;

    const dataExport = {
        user: currentUser,
        exportDate: new Date().toISOString(),
        version: '0.1.0'
    };

    const json = JSON.stringify(dataExport, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `hybouclier-backup-${new Date().getTime()}.json`;
    link.click();
}

async function importData() {
    try {
        const [fileHandle] = await window.showOpenFilePicker({
            types: [{ accept: { 'application/json': ['.json'] } }]
        });

        const file = await fileHandle.getFile();
        const content = await file.text();
        const dataImport = JSON.parse(content);

        if (dataImport.user) {
            currentUser = dataImport.user;
            storageManager.saveUser(currentUser);
            updateProfileDisplay();
            loadFeed();
            loadProfileData();
            alert('Données importées avec succès !');
        } else {
            alert('Format de fichier invalide');
        }
    } catch (error) {
        alert('Erreur lors de l\'import: ' + error.message);
    }
}

// ========== VIDÉO YOUTUBE ==========

function loadYoutubeVideo(urlOrId) {
    let videoId = urlOrId;

    // Extraire l'ID si c'est une URL complète
    if (urlOrId.includes('youtube.com') || urlOrId.includes('youtu.be')) {
        const urlParams = new URLSearchParams(new URL(urlOrId).search);
        videoId = urlParams.get('v') || urlOrId.split('/').pop();
    }

    if (videoId && videoId.length === 11) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        document.getElementById('youtubeFrame').src = embedUrl;
    }
}

function updateYoutubeVideo() {
    const url = document.getElementById('youtubeUrl').value.trim();
    if (!url) {
        alert('Veuillez entrer une URL YouTube');
        return;
    }

    loadYoutubeVideo(url);
    storageManager.saveSetting('youtubeUrl', url);
    alert('Vidéo mise à jour !');
}

// ========== NAVIGATION ONGLETS ==========

function switchTab(tabName) {
    // Cacher tous les onglets
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });

    // Désactiver tous les nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Afficher l'onglet sélectionné
    const tabElement = document.getElementById(tabName + 'Tab');
    if (tabElement) {
        tabElement.classList.remove('hidden');
    }

    // Activer le nav item correspondant
    event.target.classList.add('active');

    // Charger les données des amis si nécessaire
    if (tabName === 'friends') {
        loadFriendsUI();
    }
}

// ========== AMIS / P2P ==========

function loadFriendsUI() {
    if (!currentUser) return;

    // Afficher le code ami
    document.getElementById('myFriendCode').textContent = currentUser.friendCode;

    // Obtenir tous les utilisateurs
    const allUsers = storageManager.getAllUsers();

    // Charger la liste des amis
    loadFriendsList(allUsers);

    // Charger le fil des amis
    loadFriendsFeed(allUsers);
}

function loadFriendsList(allUsers) {
    if (!currentUser) return;

    const friendsList = document.getElementById('friendsList');
    const friends = p2pManager.getFriendsProfiles(currentUser, allUsers);

    document.getElementById('friendCount').textContent = friends.length;

    if (friends.length === 0) {
        friendsList.innerHTML = '<p class="empty-message">Aucun ami encore. Commencez à en ajouter !</p>';
        return;
    }

    friendsList.innerHTML = '';
    friends.forEach(friend => {
        const friendElement = document.createElement('div');
        friendElement.className = 'friend-card';
        friendElement.innerHTML = `
            <div class="friend-header">
                <span class="friend-avatar">${friend.avatar}</span>
                <div class="friend-info">
                    <strong>${friend.username}</strong>
                    <p class="friend-bio">${friend.bio || 'Pas de bio'}</p>
                </div>
                <button onclick="removeFriend('${friend.friendCode}')" class="btn-remove">✕</button>
            </div>
            <div class="friend-stats">
                <span>${friend.postCount} posts</span>
            </div>
        `;
        friendsList.appendChild(friendElement);
    });
}

function loadFriendsFeed(allUsers) {
    if (!currentUser) return;

    const friendsFeed = document.getElementById('friendsFeed');
    const feed = p2pManager.getFriendsFeed(currentUser, allUsers);

    if (feed.length === 0) {
        friendsFeed.innerHTML = '<p class="empty-message">Aucun post de vos amis pour le moment.</p>';
        return;
    }

    friendsFeed.innerHTML = '';
    feed.forEach(post => {
        const postElement = createPostElement(post);
        friendsFeed.appendChild(postElement);
    });
}

function addFriendByCode() {
    if (!currentUser) return;

    const friendCode = document.getElementById('friendCode').value.trim().toUpperCase();

    if (!friendCode) {
        alert('Veuillez entrer un code ami');
        return;
    }

    // Utiliser p2pManager pour ajouter l'ami
    const result = p2pManager.addFriend(currentUser, friendCode);

    if (!result.success) {
        alert('❌ ' + result.error);
        return;
    }

    storageManager.saveUser(currentUser);
    alert('✅ ' + result.message);
    document.getElementById('friendCode').value = '';
    loadFriendsUI();
}

function removeFriend(friendCode) {
    if (!currentUser) return;

    if (confirm('Êtes-vous sûr de vouloir supprimer cet ami ?')) {
        currentUser.connections = currentUser.connections.filter(code => code !== friendCode);
        storageManager.saveUser(currentUser);
        loadFriendsUI();
        alert('Ami supprimé');
    }
}

function copyFriendCode() {
    if (!currentUser) return;

    const code = currentUser.friendCode;
    navigator.clipboard.writeText(code).then(() => {
        alert('✅ Code copié: ' + code);
    });
}

function shareFriendCode() {
    if (!currentUser) return;

    const text = p2pManager.generateShareText(currentUser);
    
    // Vérifier si l'API Share est disponible
    if (navigator.share) {
        navigator.share({
            title: 'HYBOUCLIER',
            text: text
        }).catch(() => {});
    } else {
        // Fallback: copier le texte
        const shareText = `
🌱 Rejoins-moi sur HYBOUCLIER!

Pseudo: ${currentUser.username}
Code Ami: ${currentUser.friendCode}

👉 Ajoute-moi avec ce code!
Pas de serveur, pas de données envoyées.
Local-first. Privé. Humain.
        `;
        navigator.clipboard.writeText(shareText).then(() => {
            alert('✅ Texte de partage copié!');
        });
    }
}

function exportFriendsData() {
    if (!currentUser) return;

    const allUsers = storageManager.getAllUsers();
    const friendsData = p2pManager.exportFriendsData(currentUser, allUsers);

    const blob = new Blob([friendsData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `hybouclier-amis-${new Date().getTime()}.json`;
    link.click();
}

// ========== UTILITAIRES ==========

function getTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    if (seconds < 60) return 'à l\'instant';
    if (seconds < 3600) return `il y a ${Math.floor(seconds / 60)}m`;
    if (seconds < 86400) return `il y a ${Math.floor(seconds / 3600)}h`;
    if (seconds < 604800) return `il y a ${Math.floor(seconds / 86400)}j`;
    
    return date.toLocaleDateString('fr-FR');
}
