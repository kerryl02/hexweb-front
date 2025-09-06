# 🚀 HexWeb Frontend

Une **application front-end moderne** basée sur **React** et **Vite**, optimisée pour la vitesse, la maintenabilité et une expérience utilisateur fluide.

---

![Vite](https://img.shields.io/badge/Vite-3.0-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![Licence](https://img.shields.io/badge/license-MIT-green)

---

##  Démo en ligne
[hexweb-eta.vercel.app](https://hexweb-eta.vercel.app)

---

##  Aperçu visuel
![Aperçu de l’app](./public/preview.png)

---

##  Description
HexWeb Frontend est le frontend de ton projet web (HexWeb), construit avec React et Vite. Il offre :
- HMR pour un développement fluide
- Une base de code saine grâce à ESLint
- Une structure modulaire pour les évolutions futures
- Un build optimisé pour la production

---
## 🎯 Problèmes & Solutions

### 1. Lenteur avec CRA
- ❌ CRA rendait les builds lourds et lents.  
- ✅ Migration vers **Vite** → builds rapides, HMR instantané.  

### 2. Structure de code difficile à scaler
- ❌ Organisation dispersée des composants.  
- ✅ Mise en place d’une **architecture modulaire** : `components/`, `pages/`, `assets/`.  

### 3. CSS peu maintenable
- ❌ Styles classiques peu cohérents.  
- ✅ Adoption de **TailwindCSS** → design system rapide et uniforme.  

### 4. Qualité de code non garantie
- ❌ Bugs et incohérences non détectés.  
- ✅ **ESLint + Prettier** → qualité et lisibilité renforcées.  

### 5. Déploiement manuel
- ❌ Risque d’erreurs, perte de temps.  
- ✅ **CI/CD avec Vercel** → déploiement automatique à chaque commit.  

---

##  Stack technique

| Fonctionnalité         | Outils / Librairies                   |
|------------------------|---------------------------------------|
| Framework frontend     | React 18                              |
| Build & Dev tooling    | Vite (HMR, fast build)                |
| Qualité du code        | ESLint                                |
| Styles                 | Tailwind CSS via PostCSS              |
| Configurations         | vite.config.js, tailwind.config.js    |
| Déploiement            | Vercel                                |

---

##  Installation et usage

```bash
git clone https://github.com/kerryl02/hexweb-front.git
cd hexweb-front
npm install
npm run dev
# ou pour build prod :
npm run build
