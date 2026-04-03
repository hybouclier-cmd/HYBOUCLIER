// ======================================
// HYBOUCLIER - Système P2P pour Amis
// Friend Sharing & Synchronization
// ======================================

const p2pManager = (() => {
    // Générer un code ami unique (basé sur le username + ID)
    const generateFriendCode = (username) => {
        // Format simple: prendre les 4 premières lettres du username
        // + timestamp court réduit
        const chars = username.toUpperCase().slice(0, 4).padEnd(4, 'X');
        const timestamp = Math.random().toString(36).substring(2, 8).toUpperCase();
        return `${chars}-${timestamp}`;
    };

    // Déchiffrer un code ami pour récupérer les infos
    const decodeFriendCode = (code) => {
        // Structure: USERNAME-RANDOMID
        const parts = code.split('-');
        if (parts.length !== 2) return null;
        return {
            prefix: parts[0],
            id: parts[1]
        };
    };

    // Ajouter un ami (via code ami)
    const addFriend = (currentUser, friendCode) => {
        if (!currentUser.connections) {
            currentUser.connections = [];
        }

        // Vérifier si on n'ajoute pas soi-même
        if (currentUser.friendCode === friendCode) {
            return { success: false, error: 'Vous ne pouvez pas vous ajouter vous-même !' };
        }

        // Vérifier si l'ami n'existe pas déjà
        if (currentUser.connections.includes(friendCode)) {
            return { success: false, error: 'Cet ami est déjà dans votre liste' };
        }

        currentUser.connections.push(friendCode);
        return { success: true, message: 'Ami ajouté !' };
    };

    // Créer un "profil partageable" (pour envoyer aux amis)
    const createShareableProfile = (user) => {
        return {
            friendCode: user.friendCode,
            username: user.username,
            avatar: user.avatar,
            bio: user.bio,
            posts: user.posts,
            createdAt: user.createdAt,
            sharedAt: new Date().toISOString()
        };
    };

    // Générer un lien de partage (URL encodée avec profil)
    const generateShareLink = (user) => {
        const profile = createShareableProfile(user);
        const encoded = btoa(JSON.stringify(profile)); // Encoder en base64
        const baseUrl = window.location.origin + window.location.pathname;
        return `${baseUrl}?importFriend=${encoded}`;
    };

    // Générer un texte de partage simple
    const generateShareText = (user) => {
        return `
🌱 Rejoins-moi sur HYBOUCLIER!

Pseudo: ${user.username}
Code Ami: ${user.friendCode}

👉 Ajoute-moi avec ce code, ou utilise ce lien:
[Lien de partage]

Pas de serveur, pas de données envoyées. 
Local-first. Privé. Humain.
        `.trim();
    };

    // Obtenir la liste des amis (profils complets)
    const getFriendsProfiles = (currentUser, allUsers) => {
        if (!currentUser.connections || currentUser.connections.length === 0) {
            return [];
        }

        const friends = [];
        currentUser.connections.forEach(friendCode => {
            const friend = allUsers.find(u => u.friendCode === friendCode);
            if (friend) {
                friends.push({
                    friendCode: friend.friendCode,
                    username: friend.username,
                    avatar: friend.avatar,
                    bio: friend.bio,
                    postCount: friend.posts.length,
                    recentPost: friend.posts[0] || null
                });
            }
        });

        return friends;
    };

    // Récupérer tous les posts des amis
    const getFriendsFeed = (currentUser, allUsers) => {
        if (!currentUser.connections || currentUser.connections.length === 0) {
            return [];
        }

        const feed = [];
        currentUser.connections.forEach(friendCode => {
            const friend = allUsers.find(u => u.friendCode === friendCode);
            if (friend && friend.posts) {
                friend.posts.forEach(post => {
                    feed.push({
                        ...post,
                        friendCode: friendCode,
                        isFriend: true
                    });
                });
            }
        });

        // Trier par date (plus récent en premier)
        return feed.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    };

    // Importer un profil ami partagé
    const importFriendProfile = (encodedProfile) => {
        try {
            const decoded = atob(encodedProfile);
            const profile = JSON.parse(decoded);
            return { success: true, profile };
        } catch (error) {
            return { success: false, error: 'Format invalide' };
        }
    };

    // Exporter tous les amis dans un fichier
    const exportFriendsData = (currentUser, allUsers) => {
        const friendsData = {
            currentUser: {
                username: currentUser.username,
                friendCode: currentUser.friendCode
            },
            friends: getFriendsProfiles(currentUser, allUsers),
            exportDate: new Date().toISOString()
        };

        return JSON.stringify(friendsData, null, 2);
    };

    // API publique
    return {
        generateFriendCode,
        decodeFriendCode,
        addFriend,
        createShareableProfile,
        generateShareLink,
        generateShareText,
        getFriendsProfiles,
        getFriendsFeed,
        importFriendProfile,
        exportFriendsData
    };
})();
