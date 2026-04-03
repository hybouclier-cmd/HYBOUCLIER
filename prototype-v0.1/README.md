# 🌱 HYBOUCLIER - Réseau Social Citoyen Local-First

## À propos

**HYBOUCLIER** est un réseau social citoyen, privé et humain qui respecte votre vie privée. 

- ✅ **Aucune collecte de données** - Tout reste sur votre appareil
- ✅ **100% Local-First** - Pas de serveur central
- ✅ **Totalement gratuit** - Pas d'abonnement
- ✅ **Open Source** - Transparent et pédagogique
- ✅ **Décentralisé** - Partage avec amis via P2P

## Fonctionnalités (v0.1.0 Alpha)

### ✨ Implémenté
- ✅ Création de compte local
- ✅ Page personnelle et profil éditable
- ✅ Système de posts/messages
- ✅ Gestion des likes
- ✅ Export/Import de données
- ✅ Intégration vidéo YouTube
- ✅ Mode sombre
- ✅ Stockage localStorage
- ✅ **Système d'amis avec Friend Code**
- ✅ **Partage avec amis (Internet-safe)**
- ✅ **Fil d'actualité des amis**

### 🚀 En développement
- 🔄 WebRTC P2P pour synchronisation temps-réel
- 🔄 Chiffrement local des données

## Installation & Utilisation

### Démarrage rapide
1. Ouvrez `index.html` dans votre navigateur
2. Créez un pseudo (minimum 2 caractères)
3. C'est tout ! Commencez à partager

### Structure des fichiers

```
/
├── index.html       # Interface utilisateur
├── app.js           # Logique principale de l'application
├── storage.js       # Gestion du stockage local (IndexedDB + localStorage)
├── styles.css       # Design & responsive
└── README.md        # Ce fichier
```

## Architecture

### Stockage Local
- **localStorage**: Profils utilisateur, posts, paramètres
- **IndexedDB**: Base de données (préparation pour P2P)
- **File API**: Export/import de données

### Données (Structure Utilisateur)
```javascript
{
  "id": "timestamp",
  "username": "Mon Pseudo",
  "avatar": "😊",
  "bio": "Ma bio",
  "createdAt": "2026-03-31T...",
  "posts": [
    {
      "id": "postId",
      "username": "Mon Pseudo",
      "avatar": "😊",
      "content": "Mon message",
      "createdAt": "2026-03-31T...",
      "likes": 0,
      "liked": false
    }
  ],
  "connections": []
}
```

## Intégration YouTube

Pour ajouter votre vidéo de bienvenue YouTube:

1. Allez dans **Paramètres** → "À propos"
2. Entrez votre **ID YouTube** ou **URL complète**
3. Exemples:
   - ID seul: `jNQXAC9IVRw`
   - URL complète: `https://www.youtube.com/watch?v=jNQXAC9IVRw`
4. La vidéo s'affiche sur l'écran de connexion

## Partage avec Amis (Internet)

### Friend Code System
Chaque utilisateur a un **Friend Code** unique généré automatiquement:
- Format: `PRENOM-RANDOMID` (ex: `ALEX-ABC123`)
- Visible dans l'onglet **"Amis"**

### Comment ajouter un ami
1. Allez dans **"Amis"** → section "Ajouter un ami"
2. Entrez le **Friend Code** de votre ami
3. Cliquez "Ajouter"
4. Vous verrez maintenant les posts de votre ami dans **"Fil des amis"**

### Comment partager votre code
1. Allez dans **"Amis"** → "Mon Code Ami"
2. Options:
   - **📋 Copier** - Copie le code pour partager manuellement
   - **📤 Partager** - Utilise l'API Share native (mobile) ou copie automatiquement

### Voir les posts des amis
- **"Fil des amis"** affiche tous les posts de vos amis
- Les posts restent locaux sur chaque appareil
- Synchronisation via localStorage (tests locaux)

## Confidentialité et Sécurité

- ✅ **Aucune transmiss ✅ (FAIT - Friend Codes)
- [x] Friend Code unique par utilisateur
- [x] Ajout d'amis via code
- [x] Fil d'actualité des amis
- [x] Partage simple (compatible Internet)
- [ ] Synchronisation temps-réel (WebRTC)niquement
- ⚠️ **Non chiffré localement** (v0.1.0)

## Feuille de route

### Phase 1: MVP Local (EN COURS)
- [x] Compte local
- [x] Posts/messages
- [x] Profil et édition
- [ ] Likes et interactions

### Phase 2: P2P Local
- [ ] WebRTC P2P
- [ ] Partage avec amis locaux
- [ ] Synchronisation multi-appareils

### Phase 3: Sécurité
- [ ] Chiffrement E2E
- [ ] Authentification locale
- [ ] Backup chiffré

### Phase 4: Communauté
- [ ] UI communauté
- [ ] Événements locaux
- [ ] Groupes de discussion

## Configuration Recommandée

- Navigateurs: Chrome/Firefox/Edge (dernière version)
- Stockage: 5-10 MB minimum
- Connexion Internet: Requise pour YouTube uniquement
- Dispositifs: Desktop/Tablette/Mobile

## Développement

### Technologies
- **Frontend**: HTML5, CSS3, JavaScript vanilla (pas de framework)
- **Stockage**: localStorage + IndexedDB
- **Architecture**: Local-First, Sans dépendances externes

### Extensibilité

Le code est conçu pour être pédagogique et extensible:
- Modules indépendants
- Commentaires explicatifs
- Structure claire

## Licence

HYBOUCLIER est **Open Source** et libre d'utilisation.

## Contacts & Ressources

- 🌐 Site web: [votre-site.com]
- 📺 YouTube: [votre-chaine]
- 💬 Discussions: [communauté]

---

**Version 0.1.0** | Local-First Social Network
**Créé avec ❤️ pour le respect de la vie privée**
