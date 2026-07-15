
# 🇩🇰 Danish Vocabulary Trainer

A simple and effective web app to help users learn and practice Danish vocabulary, especially for oral exams. The app includes study and quiz modes for verbs, nouns, adjectives, and adverbs.

## ✨ Features

- ✅ Study Mode: Browse Danish words with English meanings and examples
- 🧭 A focused home navigation hub for Vocabulary, Quiz, Skriveguide, and Grammatik
- 🎯 Quiz Mode: Answer randomized multiple choice questions
- 🔁 Reverse Mode: Practice English → Danish
- 📱 Mobile responsive and accessible design
- 🌊 Calm ocean-sky visual theme with airy navigation and relaxing learning surfaces
- 🚪 Clearly styled Quit and Exit buttons
- 🧩 Grammatik section with lessons rendered inside the existing single-page app
- 🇩🇰🇬🇧 Bilingual Danish–English lesson about adverbs
- 📘 Bilingual noun grammar guide with explanations, exercises, and answer keys
- 📙 Bilingual adjective grammar guide covering agreement, definite forms, comparison, adjective/adverb use, exercises, and answers
- 📕 Bilingual pronoun grammar guide adapted from `Pronomen.docx`, with personal, possessive, reflexive, relative, and indefinite pronouns, exercises, and answers
- 📗 Bilingual verb grammar guide covering tense, verb phrases, modal verbs, passive voice, exercises, and answer keys
- 🔗 Bilingual conjunction grammar guide adapted from `Konjunktion.docx`, with clause types, word order, punctuation, exercises, and answers
- 📍 Bilingual preposition grammar guide adapted from `Praepositioner.docx`, covering place, direction, time, fixed combinations, exercises, and answers
- 🧱 Bilingual word-order grammar guide adapted from `Ordstilling.docx`, covering sentence elements, V2, inversion, subordinate clauses, questions, objects, exercises, and answers
- 🗂️ Mobile-friendly learning cards that group grammar rules, examples, and exercises into clear sections

## 📁 Project Structure

```
📦 danish-vocab-trainer/
├── index.html
├── style.css
├── script.js
├── quiz.js
├── Grammatik_Adverbiel.js
├── Grammatik_Substantiv.js
├── Grammatik_Adjektiv.js
├── Grammatik_Pronomen.js
├── Grammatik_Verber.js
├── Grammatik_Konjunktion.js
├── Grammatik_Præpositioner.js
├── Grammatik_Ordstilling.js
├── verber.js
├── substantiver.js
├── adjektiver.js
├── adverbKonjunktion.js
```

`Grammatik_Adverbiel.js`, `Grammatik_Substantiv.js`, `Grammatik_Adjektiv.js`, `Grammatik_Pronomen.js`, `Grammatik_Verber.js`, `Grammatik_Konjunktion.js`, `Grammatik_Præpositioner.js`, and `Grammatik_Ordstilling.js` store the bilingual grammar lessons separately from the navigation and rendering logic. The lessons are displayed inside `index.html`; no separate grammar lesson pages are required.

## 🚀 Development and deployment

The files in the repository root are the readable development source. To create the
production site locally:

```sh
npm install
npm run build
```

The generated `dist/` directory contains minified HTML and CSS plus minified,
obfuscated JavaScript. Production source maps are disabled and the build fails if a
source map file or reference is generated. `dist/` is intentionally ignored by Git.

Pushing `main` runs `.github/workflows/deploy-pages.yml`, which builds and publishes
only `dist/` to GitHub Pages. In **Settings > Pages**, set **Source** to
**GitHub Actions** once; do not select deployment from the repository root.

Obfuscation makes browser-delivered JavaScript harder to read, but it is not a
security boundary. The browser must still receive the application and learning
content, and the readable source remains visible when the GitHub repository is public.

During local development on `localhost` or `127.0.0.1`, the app automatically unregisters its service worker and clears its own PWA caches. If an older worker controls the first load, the page reloads once automatically and then continues without caching. Production remains offline-capable and checks the network before using cached static assets.

## 🛠 Built With

- HTML5
- CSS3 (Responsive, Accessible Design)
- JavaScript (ES6)

## 👩‍💻 Author

**Grace Duquiza Olesen**  
Computer Science student & web enthusiast living in Denmark  
AOF & FVU Student
---

> This project is created for educational and language learning purposes.
