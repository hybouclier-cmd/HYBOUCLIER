# 🚀 HYBOUCLIER - Démarrage Rapide

## Installation en 30 secondes

### 1️⃣ Téléchargez les fichiers
Assurez-vous que vous avez tous ces fichiers dans le même dossier:
```
mon media social/
├── index.html
├── app.js
├── storage.js
├── p2p.js
├── styles.css
├── README.md
├── TESTING.md
└── PITCH.md
```

### 2️⃣ Ouvrez dans un navigateur
- Double-cliquez sur `index.html`
- OU clic-droit → "Ouvrir avec" → votre navigateur

### 3️⃣ Créez un compte
- Entrez votre pseudo (minimum 2 caractères)
- Cliquez "Commencer"
- C'est tout! 🎉

---

## 🎯 Première expérience (5 minutes)

### Étapes
1. **Ajouter un post**
   - Cliquez sur "Fil d'actualité"
   - Écrivez un message
   - Cliquez "Publier"

2. **Modifier votre profil**
   - Cliquez sur "Mon Profil"
   - Éditez votre bio et emoji
   - Cliquez "Enregistrer"

3. **Trouver votre Friend Code**
   - Cliquez sur "Amis"
   - Vous verrez votre **Friend Code** unique
   - Cliquez "Copier" pour le partager

4. **Ajouter un ami**
   - Demandez le Friend Code d'un ami
   - Entrez-le dans "Ajouter un ami"
   - Vous verrez ses posts dans "Fil des amis"

---

## 💻 Commandes clavier utiles

| Touche | Action |
|--------|--------|
| F5 | Rafraîchir la page |
| F12 | Ouvrir outils développeur (voir données) |
| Ctrl+Shift+I | Inspecteur |
| Ctrl+Shift+K | Console |

---

## 🔒 Sécurité & Confidentialité

### Vérifier que vos données restent locales
1. Ouvrez **F12** (outils développeur)
2. Allez à **"Application"** ou **"Storage"**
3. Regardez **"Local Storage"**
4. Vous verrez `HYBOUCLIER_USER_...` avec vos données
5. **Aucune requête réseau** n'envoie ces données ✅

### Effacer vos données
- Sur la page: Aucun bouton pour tout supprimer (par sécurité)
- Dans le navigateur: Paramètres → Effacer historique → Local Storage

---

## ⚙️ Paramètres & Personnalisation

### Dans "Paramètres"
- **Mode sombre** - Activez pour mode dark
- **Vidéo YouTube** - Personnalisez la vidéo d'accueil
  - Entrez: `ID_VIDEO` ou `URL_COMPLÈTE`

### Exemple vidéo YouTube
- ID: `jNQXAC9IVRw`
- URL: `https://www.youtube.com/watch?v=jNQXAC9IVRw`

---

## 📤 Exporter/Sauvegarder vos données

### Exporter
1. **Mon Profil** → "Exporter mes données"
2. Télécharge un fichier JSON avec tous vos posts

### Importer
1. **Mon Profil** → "Importer des données"
2. Sélectionnez un JSON précédemment exporté
3. Vos données sont restaurées

### Partager avec amis
1. **Amis** → "Exporter liste amis"
2. Partagez ce fichier comme backup

---

## 📱 Sur Mobile

HYBOUCLIER fonctionne sur mobile!

### Navigateurs testés
- ✅ Chrome (Android)
- ✅ Safari (iOS)
- ✅ Firefox (Android)

### Optimisations mobile
- Interface responsive (s'adapte à l'écran)
- Bouton "Partager" utilise partage natif OS
- Tactile-friendly

---

## 🐛 Problèmes courants

### Je ne vois pas mes posts après rafraîchissement
**Solution:** Vérifiez que vous êtes connecté
- Les données sont associées à votre pseudo
- Assurez-vous d'être connecté avec le bon compte

### Le Friend Code de mon ami ne fonctionne pas
**Solution:** Vérifiez exactement:
- [ ] La casse (majuscule/minuscule) - **doit être en MAJUSCULES**
- [ ] Les traits d'union
- [ ] Pas d'espaces avant/après
- Copie-collez plutôt que de taper

### Je voulais retrouver mon ancien compte mais je ne me souviens plus du pseudo
**Solution:** 
- Malheureusement, données locales = pas de "mot de passe oublié"
- Utilisez un pseudo que vous n'oublierez pas!
- Créez un nouveau compte avec un meilleur pseudo

### La page est blanche / rien ne s'affiche
**Solution:** 
- Essayez: F5 (rafraîchir)
- Ouvrez F12 (console) pour voir les erreurs
- Assurez-vous que TOUS les fichiers .js et .css sont dans le même dossier
- Testez avec Chrome (meilleure compatibilité) si possible

---

## ✅ Checklist avant test avec amis

- [ ] index.html + tous les .js/.css ensemble
- [ ] Vous avez testé localement d'abord (au moins 1 post)
- [ ] Vous connaissez votre Friend Code
- [ ] Vous avez noté le Friend Code d'au moins 1 ami
- [ ] Vous avez rafraîchi la page après ajouter un ami
- [ ] Vous lisez TESTING.md pour le protocole

---

## 📞 Support

### Avant de demander de l'aide
1. Vérifiez les "Problèmes courants" ci-dessus
2. Ouvrez F12 et copiez les erreurs console
3. Regardez TESTING.md pour dépannage

### Feedback
Tous les retours sont bienvenus! Notes:
- Bugs ✅ (avec screenshot)
- Idées ✅ (peut-être dans Phase 2)
- Questions ✅ (via email/signal)

---

## 🎓 Pour les Développeurs

### Architecture
- **Frontend:** HTML5 + Vanilla JavaScript (pas de framework)
- **Storage:** localStorage + IndexedDB
- **P2P:** Friend Codes (Phase 2: WebRTC)

### Fichiers clés
- `app.js` - Logique principale
- `storage.js` - Gestion localStorage
- `p2p.js` - Système d'amis

### Taille
- **Total:** ~150KB (très léger)
- **Pas de dépendances externes** (sauf YouTube pour vidéos)

---

## 📋 Version & Changelog

**Version:** 0.1.0 Alpha Local-First  
**Date:** 31 Mars 2026

### Inclus
- Comptes locaux
- Système de posts
- Profil utilisateur
- Friend Codes pour partage
- Fil d'actualité des amis
- YouTube integration
- Export/Import données
- Mode sombre
- Responsive design

### Non inclus (Phase 2+)
- WebRTC P2P
- Chiffrement E2E
- Notifications push
- App mobile native

---

**Merci d'avoir rejoint HYBOUCLIER! 🌱**

*Privacy for a Digital Future*
