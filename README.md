# Danish Vocabulary Trainer

A simple web app for learning and reviewing Danish vocabulary and grammar.

I originally created this app for my own Danish studies and exam preparation. It includes vocabulary practice, quizzes, and bilingual Danish–English grammar lessons, so learners can review grammar rules without needing to translate everything separately.

The app is designed to be simple and easy to use on both desktop and mobile. It can be useful for learners preparing for Danish language exams or anyone who wants to continue practising Danish vocabulary and grammar.

## Features

- Study common Danish verbs, nouns, adjectives, adverbs, and conjunctions.
- View English meanings together with practical Danish example sentences.
- Practise vocabulary with randomized multiple-choice quizzes.
- Switch between Danish-to-English and English-to-Danish quiz modes.
- Use the writing guide for help with sentence structure, grammar, and written Danish.
- Explore bilingual Danish–English grammar lessons with explanations, examples, exercises, and answer keys.
- Install the app as a Progressive Web App (PWA) and continue studying offline.
- Use the app comfortably on desktop, tablet, and mobile devices with a responsive design.

## Local Development

Clone or download the repository and run it through a local web server:

```sh
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Running the project through a local server allows navigation, caching, and other web features to work correctly.

The service worker is disabled during local development to help prevent outdated cached files from interfering with changes.

## Production Build

Install the project dependencies:

```sh
npm install
```

Create the optimized production build:

```sh
npm run build
```

The generated production files are placed in:

```text
dist/
```

The `dist/` directory is generated locally and is not committed to the repository.

When changes are pushed to the `main` branch, the GitHub Actions workflow automatically builds and deploys the application to GitHub Pages.

## Tech Stack

- HTML
- CSS
- JavaScript
- Progressive Web App (PWA)
- GitHub Actions
- GitHub Pages

## Author

**Grace Duquiza Olesen**

Computer Science student based in Denmark.

I created this project while learning Danish and preparing for Danish language exams. As I continue studying Danish, I use the app to review vocabulary and grammar and to keep practising what I have learned.

## Purpose

This project was created for educational and language-learning purposes.

It started as a personal study tool, but I am sharing it publicly in the hope that it can also be useful for other Danish learners who want an easy way to review vocabulary and grammar in both Danish and English.
