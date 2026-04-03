# 📦 HYBOUCLIER - Guide de Distribution aux Testeurs

## Avant de partager avec amis/famille

Vérifiez que vous avez **TOUS ces fichiers** dans le dossier `mon media social/`:

```
✅ Index.html        (interface principale)
✅ app.js            (logique de l'app)
✅ storage.js        (gestion données locales)
✅ p2p.js            (système d'amis)
✅ styles.css        (design & responsive)
✅ README.md         (documentation)
✅ QUICKSTART.md     (guide rapide)
✅ TESTING.md        (protocole test)
✅ PITCH.md          (présentation)
```

---

## 🚚 Comment envoyer aux testeurs

### Option 1: Fichier ZIP (Recommandé)
1. Sélectionnez tous les fichiers
2. Clic-droit → "Envoyer vers" → "Dossier compressé"
3. Renommez: `HYBOUCLIER-v0.1.zip`
4. Envoyez par email / WeTransfer / etc.

**Instruction pour le testeur:**
```
1. Téléchargez et décompressez le ZIP
2. Ouvrez index.html avec votre navigateur
3. Lisez QUICKSTART.md si besoin
```

### Option 2: Google Drive / Dropbox
1. Créez un dossier `HYBOUCLIER`
2. Uploadez tous les fichiers
3. Partagez avec permissions lecture
4. Les amis ouvrent `index.html` directement du navigateur

**Avantage:** Versioning automatique

### Option 3: Git / GitHub (Pour devs)
1. `git init` dans le dossier
2. `git add .` + `git commit`
3. Push vers repo public
4. Testeurs clonent et ouvrent `index.html`

---

## 📧 Template Email pour les testeurs

```
Sujet: 🌱 HYBOUCLIER - Testeur Privé Beta [VER 0.1]

Bonjour [Nom],

Merci d'être testeur pour HYBOUCLIER!

C'est un réseau social local-first et privé.
Aucune donnée n'est collectée, tout reste sur votre ordinateur.

DÉMARRAGE RAPIDE:
1. Décompressez le ZIP
2. Ouvrez "index.html" avec votre navigateur
3. Créez un compte avec votre prénom
4. Écrivez un post pour tester

MON FRIEND CODE: [VOTRE_CODE_ICI]

Ajoutez-moi avec ce code pour voir mes posts!
Votre code sera affiché une fois que vous vous connecterez.

QUESTIONS?
Lisez QUICKSTART.md dans le dossier

MERCI!
[Votre Nom]
```

---

## 🔗 Protocole d'ajout d'amis

### Pour vous (le créateur)
1. ✅ Ouvrez votre instance
2. ✅ Creez un compte avec pseudo "MOI"
3. ✅ Allez à **Amis** → Notez votre **Friend Code**
4. ✅ Écrivez 2-3 posts de bienvenue
5. ✅ Partager votre Friend Code par email/signal/etc.

### Pour chaque testeur
1. ✅ Télécharge et ouvre la version
2. ✅ Crée compte avec son prénom (ex: ALICE)
3. ✅ Va à **Amis** → Copie son **Friend Code**
4. ✅ Envoie le code au créateur
5. ✅ Attend que le créateur l'ajoute

### Échange des codes
```
Timeline idéale:

Jour 1: Configuration
- Vous: Prêt, Friend Code: "MOIP-ABC123"
- Alice: Prêt, Friend Code: "ALIC-DEF456"
- Bob: Prêt, Friend Code: "BOBO-GHI789"

Jour 2: Échange d'amis
- Vous ajouter Alice: Entrée "ALIC-DEF456"
- Vous ajouter Bob: Entrée "BOBO-GHI789"
- Alice ajoute vous: Entrée "MOIP-ABC123"
- Bob ajoute vous: Entrée "MOIP-ABC123"

Jour 3+: Tests & Feedback
- Tout le monde voit les posts des autres
- Vérifiez interactions, likes, etc.
```

---

## 📊 Formulaire de Feedback

Après 3-5 jours de test, demandez ce feedback:

```
=== FEEDBACK HYBOUCLIER ===

Testeur: [Nom]
Date: [Date]
Appareil: [PC/Mac/Laptop]
Navigateur: [Chrome/Firefox/Safari/Edge]
OS: [Windows/Mac/Linux]

CONFIGURATION
- [ ] Installation facile
- [ ] Index.html ouvert sans problème
- [ ] Compte créé sans issue

USAGE
- [ ] Écrire un post: OK / [Problème]
- [ ] Modifier profil: OK / [Problème]
- [ ] Copier Friend Code: OK / [Problème]
- [ ] Ajouter un ami: OK / [Problème]
- [ ] Voir posts des amis: OK / [Problème]

EXPERIENCE
Note globale: ___/5

Ce qui a plu:
- [...]

Ce qui pourrait s'améliorer:
- [...]

Bugs rencontrés:
- [...]

Suggestions:
- [...]

Seriez-vous prêt à le recommander à un ami?
☐ Oui
☐ Peut-être
☐ Non
```

---

## 🎯 Étapes de Test Recommandées

### Semaine 1: Configuration
- [ ] 3-5 personnes créent des comptes
- [ ] Tout le monde reçoit son Friend Code
- [ ] Tout le monde publie 1-2 posts

### Semaine 2: Interaction
- [ ] Ajout d'amis croisés
- [ ] Vérification fil d'actualité
- [ ] Tests des likes
- [ ] Modification de profil

### Semaine 3: Edge Cases
- [ ] Rafraîchir/fermer navigateur
- [ ] Ajouter plusieurs amis
- [ ] Export/Import données
- [ ] Test sur mobile si possible

### Semaine 4: Collecte Feedback
- [ ] Remplir formulaire feedback
- [ ] Documenter bugs
- [ ] Compiler suggestions

---

## 🚨 Checklist Distribution

Avant d'envoyer aux testeurs:

**Fichiers**
- [ ] Tous les .js + .css présents
- [ ] index.html ouvrable sans erreur
- [ ] Pas de fichiers système cachés (.DS_Store, etc.)
- [ ] README.md complet et à jour

**Documentation**
- [ ] QUICKSTART.md présent
- [ ] TESTING.md avec protocole clair
- [ ] Template email préparé
- [ ] Votre Friend Code noté

**Préparation**
- [ ] Vous avez testé localement d'abord
- [ ] Vous connaissez le protocole
- [ ] Vous avez 3-5 testeurs prêts
- [ ] Calendrier test établi (4 semaines)

---

## 📱 Notes Spéciales

### Testeurs sur Mobile
- Envoyez aussi les instructions pour ouvrir fichier local
- Android: "Fichiers" app → ouvrir index.html avec navigateur
- iOS: Plus complexe - préférez Google Drive access

### Testeurs Non-Tech
- Mettez index.html directement sur bureau (raccourci)
- Écrivez step-by-step très simple
- Soyez disponible pour support premiers jours

### Testeurs Tech
- Donnez aussi accès au code source (GitHub)
- Incitez à contribuer / signaler bugs avancés
- Parlez de Phase 2 (WebRTC)

---

## 📈 Après Phase de Test

**Si tout va bien:**
1. Compilez feedback
2. Listez bugs à fixer
3. Classez suggestions par priorité
4. Commencez Phase 2 développement

**Résultats attendus:**
- ✅ 3-5 comptes actifs
- ✅ 10+ posts total
- ✅ 0-3 bugs critiques
- ✅ 5-10 suggestions d'amélioration

---

## 👥 Qui inviter comme testeur

**Idéal:**
- Famille proche (1-2 personnes)
- Amis intéressés par privacy (2-3)
- Au moins 1 personne non-tech
- Au moins 1 testeur sur mobile

**À éviter:**
- Beaucoup trop de gens (>10) pour une première phase
- Personnes sans accès stable internet
- Tests avec vraies données sensibles (c'est du test!)

---

## 📞 Support Testeurs

Dites-leur:

```
Des questions pendant le test?
1. Regardez QUICKSTART.md (section troubleshooting)
2. Ouvrez F12 pour voir si erreurs console
3. Contactez-moi directement si bloqué
```

Support vous:
```
Gardez notes de:
- Questions posées
- Problèmes signalés
- Temps de résolution
- Feedback général
```

---

**Bonne chance avec votre phase de test!** 🌱

*Version de ce guide: 0.1 - 31 Mars 2026*
