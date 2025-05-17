window.addEventListener("DOMContentLoaded", function () {
    let quizList = [];
    let score = 0;
    let isQuizMode = false;
    let reverseMode = false;
    let index = 0;

    if (typeof currentList === 'undefined') window.currentList = [];

    // DOM Elements
    const startQuizBtn = document.getElementById("start-quiz-btn");
    const quizModeEl = document.getElementById("quiz-mode");
    const studyModeEl = document.getElementById("study-mode");
    const reverseModeCheckbox = document.getElementById("reverse-mode");
    const quizCategorySelect = document.getElementById("quiz-category-select");
    const categoryButtons = document.querySelectorAll(".category-option");
    const choicesContainer = document.getElementById("choices");
    const nextQuestionBtn = document.getElementById("next-question-btn");
    const quitQuizBtn = document.getElementById("quit-quiz-btn");
    const scoreDisplay = document.getElementById("score");
    const quizWordEl = document.getElementById("quiz-word");
    const englishEl = document.getElementById("english-meaning");
    const exampleEl = document.getElementById("example-sentence");

    function shuffleArray(array) {
        return array.slice().sort(() => Math.random() - 0.5);
    }

    function generateChoices(correctItem, list, field) {
        const choices = [correctItem[field]];
        const others = list.filter(w => w !== correctItem);
        shuffleArray(others).slice(0, 2).forEach(w => choices.push(w[field]));
        return shuffleArray(choices);
    }

    function showQuestion() {
        const word = quizList[index];
        if (!word) {
            quizWordEl.textContent = "⚠️ Could not load word at index " + index;
            return;
        }

        const fieldQuestion = reverseModeCheckbox.checked ? "english" : "danish";
        const fieldAnswer = reverseModeCheckbox.checked ? "danish" : "english";


        quizWordEl.textContent = word[fieldQuestion] || "⚠️ Missing word";
        englishEl.textContent = "";
        exampleEl.style.display = "none";

        const options = generateChoices(word, quizList, fieldAnswer);
        choicesContainer.innerHTML = "";

        options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.classList.add("choice-btn");
            btn.addEventListener("click", () => {
                const isCorrect = option === word[fieldAnswer];
                btn.classList.add(isCorrect ? "correct" : "wrong");
                if (isCorrect) score++;

                Array.from(choicesContainer.children).forEach(b => b.disabled = true);
                nextQuestionBtn.style.display = "inline-block";
                updateScore();
            });
            choicesContainer.appendChild(btn);
        });
    }

    function updateScore() {
        scoreDisplay.textContent = `Score: ${score}/${index + 1}`;
    }

    function startFlashQuiz() {
        isQuizMode = true;
        quizList = shuffleArray(window.currentList);
        index = 0;
        score = 0;
        

        if (quizList.length === 0) {
            quizWordEl.textContent = "⚠️ No words in selected category!";
            return;
        }

        toggleQuizElements(true);
        showQuestion();
        updateScore();
    }

    function toggleQuizElements(show) {
        document.getElementById("show-answer-btn").style.display = "none";
        document.getElementById("mark-correct-btn").style.display = "none";
        document.getElementById("mark-wrong-btn").style.display = "none";
        quitQuizBtn.style.display = show ? "inline-block" : "none";
        nextQuestionBtn.style.display = show ? "none" : "inline-block";
        document.getElementById("next-btn").style.display = show ? "none" : "inline-block";
        reverseModeCheckbox.parentElement.style.display = show ? "block" : "none";
        scoreDisplay.style.display = show ? "block" : "none";
    }

    function resetCard() {
        choicesContainer.innerHTML = "";
        quizWordEl.textContent = "Ord";  // ✅ Reset the quiz word
        englishEl.textContent = "";
        exampleEl.style.display = "none";
        scoreDisplay.textContent = "";
    }

    startQuizBtn.addEventListener("click", () => {
        studyModeEl.style.display = "none";
        startQuizBtn.style.display = "none";
        quizModeEl.style.display = "block";
        quizCategorySelect.style.display = "block";
        resetCard();
    });

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

    quitQuizBtn.addEventListener("click", () => {
        isQuizMode = false;
        toggleQuizElements(false);
        resetCard();
        quizModeEl.style.display = "none";
        studyModeEl.style.display = "block";
        startQuizBtn.style.display = "inline-block";
    });
    
});
