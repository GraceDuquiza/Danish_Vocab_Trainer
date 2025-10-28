window.addEventListener("DOMContentLoaded", function () {
    // ===============================
    // 🔢 VARIABLES
    // ===============================
    let quizList = [];          // Holds the current category questions
    let score = 0;              // Current quiz score
    let index = 0;              // Current question index
    let isQuizMode = false;     // Track if quiz mode is active
    let reverseMode = false;    // Track if "reverse" (EN ⇄ DK) is active
    let answers = [];           // 🟢 Store user's answers (for review)

    if (typeof currentList === 'undefined') window.currentList = [];

    // ===============================
    // 🎯 DOM ELEMENTS
    // ===============================
    const startQuizBtn = document.getElementById("start-quiz-btn");
    const quizModeEl = document.getElementById("quiz-mode");
    const studyModeEl = document.getElementById("study-mode");
    const reverseModeCheckbox = document.getElementById("reverse-mode");
    const quizCategorySelect = document.getElementById("quiz-category-select");
    const categoryButtons = document.querySelectorAll(".category-option");
    const choicesContainer = document.getElementById("choices");
    const nextQuestionBtn = document.getElementById("next-question-btn");
    const prevQuestionBtn = document.getElementById("prev-question-btn"); // 🟢 New
    const quitQuizBtn = document.getElementById("quit-quiz-btn");
    const scoreDisplay = document.getElementById("score");
    const quizWordEl = document.getElementById("quiz-word");
    const englishEl = document.getElementById("english-meaning");
    const exampleEl = document.getElementById("example-sentence");

    // ===============================
    // 🎲 HELPER FUNCTIONS
    // ===============================

    // Shuffle array (for randomizing questions & options)
    function shuffleArray(array) {
        return array.slice().sort(() => Math.random() - 0.5);
    }

    // Generate 3 choices: correct + 2 random others
    function generateChoices(correctItem, list, field) {
        const choices = [correctItem[field]];
        const others = list.filter(w => w !== correctItem);
        shuffleArray(others).slice(0, 2).forEach(w => choices.push(w[field]));
        return shuffleArray(choices);
    }

    // ===============================
    // 🧩 SHOW QUESTION FUNCTION
    // ===============================
    function showQuestion() {
        const word = quizList[index];
        if (!word) {
            quizWordEl.textContent = "⚠️ Could not load word at index " + index;
            return;
        }

        const fieldQuestion = reverseModeCheckbox.checked ? "english" : "danish";
        const fieldAnswer = reverseModeCheckbox.checked ? "danish" : "english";

        // Display question
        quizWordEl.textContent = word[fieldQuestion] || "⚠️ Missing word";
        englishEl.textContent = "";
        exampleEl.style.display = "none";

        const options = generateChoices(word, quizList, fieldAnswer);
        choicesContainer.innerHTML = "";

        // 🟢 Show/hide Previous button depending on index
        prevQuestionBtn.style.display = index > 0 ? "inline-block" : "none";

        // Render choice buttons
        options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.classList.add("choice-btn");

            // When user selects an answer
            btn.addEventListener("click", () => {
                const isCorrect = option === word[fieldAnswer];

                // 🟢 Save the user's chosen answer
                answers[index] = {
                    chosen: option,
                    correct: word[fieldAnswer],
                    isCorrect: isCorrect
                };

                // Highlight clicked answer
                btn.classList.add(isCorrect ? "correct" : "wrong");

                // Highlight the correct one if user clicked wrong
                if (!isCorrect) {
                    Array.from(choicesContainer.children).forEach(b => {
                        if (b.textContent === word[fieldAnswer]) {
                            b.classList.add("correct");
                        }
                    });
                } else {
                    // 🟢 Only add to score the first time this question is answered
                    if (!answers[index]?.counted) {
                        score++;
                        answers[index].counted = true;
                    }
                }

                // Disable all buttons after answering
                Array.from(choicesContainer.children).forEach(b => b.disabled = true);

                // Show "Next" button
                nextQuestionBtn.style.display = "inline-block";
                updateScore();
            });

            choicesContainer.appendChild(btn);
        });

        // 🟢 If the question has already been answered, restore it (read-only)
        if (answers[index]) {
            const saved = answers[index];
            Array.from(choicesContainer.children).forEach(b => {
                b.disabled = true; // make read-only
                if (b.textContent === saved.chosen) {
                    b.classList.add(saved.isCorrect ? "correct" : "wrong");
                }
                if (!saved.isCorrect && b.textContent === saved.correct) {
                    b.classList.add("correct");
                }
            });
            // Keep "Next" visible when reviewing old questions
            nextQuestionBtn.style.display = "inline-block";
        }
    }

    // ===============================
    // 📊 UPDATE SCORE DISPLAY
    // ===============================
    function updateScore() {
        scoreDisplay.textContent = `Score: ${score}/${index + 1}`;
    }

    // ===============================
    // 🚀 START THE QUIZ
    // ===============================
    function startFlashQuiz() {
        isQuizMode = true;
        quizList = shuffleArray(window.currentList);
        index = 0;
        score = 0;
        answers = []; // 🧹 clear previous records

        if (quizList.length === 0) {
            quizWordEl.textContent = "⚠️ No words in selected category!";
            return;
        }

        toggleQuizElements(true);
        showQuestion();
        updateScore();
    }

    // ===============================
    // 🎛️ TOGGLE QUIZ ELEMENT VISIBILITY
    // ===============================
    function toggleQuizElements(show) {
        document.getElementById("show-answer-btn").style.display = "none";
        document.getElementById("mark-correct-btn").style.display = "none";
        document.getElementById("mark-wrong-btn").style.display = "none";
        quitQuizBtn.style.display = show ? "inline-block" : "none";
        nextQuestionBtn.style.display = "none"; // hide Next until answered
        reverseModeCheckbox.parentElement.style.display = show ? "block" : "none";
        scoreDisplay.style.display = show ? "block" : "none";
    }

    // ===============================
    // 🔁 RESET CARD VIEW
    // ===============================
    function resetCard() {
        choicesContainer.innerHTML = "";
        quizWordEl.textContent = "Ord";
        englishEl.textContent = "";
        exampleEl.style.display = "none";
        scoreDisplay.textContent = "";
    }

    // ===============================
    // ▶️ START BUTTON CLICK
    // ===============================
    startQuizBtn.addEventListener("click", () => {
        studyModeEl.style.display = "none";
        startQuizBtn.style.display = "none";
        quizModeEl.style.display = "block";
        quizCategorySelect.style.display = "block";
        resetCard();
    });

    // ===============================
    // 🗂️ CATEGORY SELECTION BUTTONS
    // ===============================
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            switch (category) {
                case "verber":
                    window.currentList = typeof verber !== "undefined" ? verber : [];
                    break;
                case "substantiver":
                    window.currentList = typeof substantiver !== "undefined" ? substantiver : [];
                    break;
                case "adjektiver":
                    window.currentList = typeof adjektiver !== "undefined" ? adjektiver : [];
                    break;
                case "adverbKonjunktion":
                    window.currentList = typeof adverbKonjunktion !== "undefined" ? adverbKonjunktion : [];
                    break;
            }
            quizCategorySelect.style.display = "none";
            startFlashQuiz();
        });
    });

    // ===============================
    // ➡️ NEXT QUESTION BUTTON
    // ===============================
    nextQuestionBtn.addEventListener("click", () => {
        index++;
        if (index >= quizList.length) {
            alert(`✅ Quiz complete! Final score: ${score}/${quizList.length}`);
            isQuizMode = false;
            toggleQuizElements(false);
            resetCard();
            quizModeEl.style.display = "none";
            studyModeEl.style.display = "block";
            startQuizBtn.style.display = "inline-block";
        } else {
            showQuestion();
        }
    });

    // ===============================
    // ⬅️ PREVIOUS QUESTION BUTTON (Review Only)
    // ===============================
    prevQuestionBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            showQuestion(); // show previous question (read-only)
            nextQuestionBtn.style.display = "inline-block"; // keep next visible
        }
    });

    // ===============================
    // 🚪 QUIT QUIZ BUTTON
    // ===============================
    quitQuizBtn.addEventListener("click", () => {
        isQuizMode = false;
        toggleQuizElements(false);
        resetCard();
        quizModeEl.style.display = "none";
        studyModeEl.style.display = "block";
        startQuizBtn.style.display = "inline-block";
    });
});
