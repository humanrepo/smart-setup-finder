# maconfig 🎯

**Trouvez la configuration informatique parfaite grâce à l'Intelligence Artificielle**

Un site web moderne et intuitif qui recommande la configuration PC idéale selon l'usage de l'utilisateur. Design minimaliste inspiré d'Apple et Notion, propulsé par React et TypeScript.

---

## ✨ Fonctionnalités

### Page principale (/)
- **Section Hero** : Accroche attractive avec appel à l'action
- **Explication en 3 étapes** : Processus simple et clair
- **Assistant IA interactif** : L'utilisateur décrit son usage, l'IA analyse et recommande
- **Résultats dynamiques** : Carte détaillée avec tous les composants (CPU, GPU, RAM, SSD, écran, budget)
- **Footer** : Navigation et accès administrateur

### Page administrateur (/admin)
- **Connexion sécurisée** : Mot de passe `admin123`
- **Dashboard complet** : Statistiques et vue d'ensemble
- **Tableau des configurations** : Liste de toutes les recommandations générées
- **Actions** : Consulter, modifier, supprimer les configurations
- **Mise à jour des modèles** : Bouton de refresh pour l'IA

---

## 🛠 Stack technique

- **Frontend** : React 18 + TypeScript + Vite
- **Design** : TailwindCSS + shadcn/ui
- **Routing** : React Router v6
- **Typographie** : Inter (Google Fonts)
- **Backend** : À intégrer avec Lovable Cloud (Supabase + Edge Functions)
- **IA** : Lovable AI Gateway (Google Gemini / OpenAI GPT-5)

---

## 🚀 Installation et lancement

### Prérequis
- Node.js 18+ et npm

### Installation
```bash
# Cloner le dépôt
git clone <votre-repo-url>
cd maconfig

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:8080`

---

## 🎨 Design System

### Palette de couleurs
- **Bleu principal** : `#3B82F6` (HSL: 217, 91%, 60%)
- **Backgrounds** : Blanc pur, gris clair subtil
- **Texte** : Gris ardoise profond
- **Accents** : Bleu clair pour hover, ombres douces

### Typographie
- **Police** : Inter (Google Fonts)
- **Poids** : 300 à 800

### Animations
- Fade-in progressifs
- Slide-up au scroll
- Hover lift sur les cartes
- Transitions fluides (0.2s-0.6s)

---

## 📱 Pages et routes

| Route | Description | Accès |
|-------|-------------|-------|
| `/` | Page principale avec assistant IA | Public |
| `/admin` | Dashboard administrateur | Mot de passe requis |

---

## 🔐 Accès administrateur

- **URL** : `/admin`
- **Mot de passe** : `admin123`

Une fois connecté, vous pouvez :
- Consulter toutes les configurations générées
- Voir les statistiques (total, cette semaine, budget moyen)
- Supprimer des entrées
- Mettre à jour les modèles IA

---

## 🧠 Intégration IA (à venir)

Pour activer l'analyse IA réelle :

1. **Activer Lovable Cloud** : Backend intégré avec Supabase
2. **Créer une table** `configurations` :
   ```sql
   create table configurations (
     id uuid primary key default uuid_generate_v4(),
     created_at timestamp with time zone default now(),
     usage text not null,
     cpu text,
     gpu text,
     ram text,
     ssd text,
     ecran text,
     budget text
   );
   ```
3. **Créer une Edge Function** `analyze-usage` :
   - Appel à Lovable AI Gateway
   - Analyse du texte utilisateur
   - Retour de la recommandation structurée
4. **Intégrer dans le frontend** : Remplacer la simulation par un appel réel

---

## 🔄 Améliorations futures possibles

- [ ] **Authentification complète** : Comptes utilisateurs avec historique
- [ ] **Export PDF** : Générer un document avec la configuration
- [ ] **Comparaison de configs** : Comparer plusieurs recommandations
- [ ] **Prix en temps réel** : Intégration API de prix (Amazon, LDLC, etc.)
- [ ] **Mode sombre** : Basculer entre thème clair et sombre
- [ ] **Multilingue** : Support anglais et autres langues
- [ ] **Notifications** : Alertes lors de nouvelles recommandations
- [ ] **Analytics** : Suivi des usages les plus demandés

---

## 📄 Structure du projet

```
maconfig/
├── src/
│   ├── components/ui/       # Composants shadcn/ui
│   ├── pages/
│   │   ├── Home.tsx         # Page principale
│   │   ├── Admin.tsx        # Dashboard admin
│   │   └── NotFound.tsx     # Page 404
│   ├── hooks/               # Hooks React personnalisés
│   ├── lib/                 # Utilitaires
│   ├── App.tsx              # Configuration des routes
│   ├── index.css            # Design system global
│   └── main.tsx             # Point d'entrée
├── public/                  # Assets statiques
├── index.html               # Template HTML
├── tailwind.config.ts       # Configuration Tailwind
└── README.fr.md            # Ce fichier
```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour proposer une amélioration :

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/amelioration`)
3. Committez vos changements (`git commit -m 'Ajout fonctionnalité X'`)
4. Pushez vers la branche (`git push origin feature/amelioration`)
5. Ouvrez une Pull Request

---

## 📧 Contact

Pour toute question ou suggestion :
- Email : contact@maconfig.fr (fictif)
- GitHub : [votre-username]

---

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**Développé avec ❤️ par [Votre Nom]**
*Propulsé par Lovable, React et TypeScript*
