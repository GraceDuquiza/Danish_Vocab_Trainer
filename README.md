
# 🇩🇰 Danish Vocabulary Trainer

A simple and effective web app to help users learn and practice Danish vocabulary, especially for oral exams. The app includes study and quiz modes for verbs, nouns, adjectives, and adverbs.

## ✨ Features

- ✅ Study Mode: Browse Danish words with English meanings and examples
- 🎯 Quiz Mode: Answer randomized multiple choice questions
- 🔁 Reverse Mode: Practice English → Danish
- 📱 Mobile responsive and accessible design
- 🚪 Clearly styled Quit and Exit buttons
- 🧩 Grammatik section with lessons rendered inside the existing single-page app
- 🇩🇰🇬🇧 Bilingual Danish–English lesson about adverbs
- 🗂️ Mobile-friendly learning cards that group grammar rules, examples, and exercises into clear sections

## 📁 Project Structure

```
📦 danish-vocab-trainer/
├── index.html
├── style.css
├── script.js
├── quiz.js
├── adverbiel.js
├── verber.js
├── substantiver.js
├── adjektiver.js
├── adverbKonjunktion.js
```

`adverbiel.js` stores the bilingual adverb lesson separately from the navigation and rendering logic. The lesson is displayed inside `index.html`; no separate grammar lesson page is required.

## 🚀 Deployment

Deployed via **GitHub Pages**.  
👉 Live Site: `https://github.com/GraceDuquiza/Danish_Vocab_Trainer/`

### To deploy:
1. Push the project to your GitHub repository.
2. Go to **Settings > Pages**
3. Set the source to `main` branch, root directory
4. GitHub Pages will provide a live link.

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
