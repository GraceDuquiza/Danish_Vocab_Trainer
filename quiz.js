// quiz.js
// ============================================================
// Danish Vocab Trainer — Quiz Logic (self-contained flow)
// - script.js handles routing (show/hide sections, main menu)
// - THIS file handles: category selection → questions → scoring
// - Fresh-Start Safe: Prev/Next/Quit states reset correctly
// - IMPORTANT: We DO NOT bind Start/Quit here to avoid double-bind
//   with script.js, which already routes those.
// ============================================================

window.addEventListener("DOMContentLoaded", function () {
    // ===============================
    // 🔢 STATE
    // ===============================
    let quizList = [];          // Current category questions
    let score = 0;              // Current score
    let index = 0;              // Current question index
    let isQuizMode = false;     // Whether quiz is active
    let answers = [];           // Stores user's answers for review

    // Provide fallback to shared list bridged by script.js
    if (typeof window.currentList === "undefined") window.currentList = [];

    // ===============================
    // 🎯 DOM ELEMENTS
    // ===============================
    const startQuizBtn        = document.getElementById("start-quiz-btn");      // NOTE: not bound here
    const quizModeEl          = document.getElementById("quiz-mode");
    const studyModeEl         = document.getElementById("study-mode");
    const reverseModeCheckbox = document.getElementById("reverse-mode");
    const quizCategorySelect  = document.getElementById("quiz-category-select");
    const categoryButtons     = document.querySelectorAll(".category-option");

    const choicesContainer    = document.getElementById("choices");
    const nextQuestionBtn     = document.getElementById("next-question-btn");
    const prevQuestionBtn     = document.getElementById("prev-question-btn");
    const quitQuizBtn         = document.getElementById("quit-quiz-btn");       // NOTE: not bound here
    const scoreDisplay        = document.getElementById("score");
    const quizWordEl          = document.getElementById("quiz-word");

    // Optional: the inline row holding Prev/Next buttons (CSS class from your stylesheet)
    const btnRow              = document.querySelector(".btn-row");

    // ===============================
    // 🧰 UTILITIES
    // ===============================
    const show   = (el, display = "inline-block") => el && (el.style.display = display);
    const hide   = (el) => el && (el.style.display = "none");
    const enable = (el) => el && el.removeAttribute("disabled");
    const disable= (el) => el && el.setAttribute("disabled", "");

    function shuffleArray(array) {
        return array.slice().sort(() => Math.random() - 0.5);
    }

    // Pick 3 choices: 1 correct + 2 random distractors
    function generateChoices(correctItem, list, answerField) {
        const choices = [correctItem[answerField]];
        const others = list.filter(w => w !== correctItem);
        shuffleArray(others).slice(0, 2).forEach(w => choices.push(w[answerField]));
        return shuffleArray(choices);
    }

    // ===============================
    // 🧼 FRESH UI RESET HELPERS
    // ===============================
    function resetQuizUIBase() {
        // Base card reset
        if (choicesContainer) choicesContainer.innerHTML = "";
        if (quizWordEl) quizWordEl.textContent = "Ord";
        if (scoreDisplay) scoreDisplay.textContent = "";

        // Controls reset
        hide(nextQuestionBtn);
        disable(nextQuestionBtn);
        hide(prevQuestionBtn);
        disable(prevQuestionBtn);

        // Row visibility: let CSS decide; we keep it visible during quiz run.
        // (script.js may hide it before quiz begins; that's fine)
        btnRow && btnRow.style.removeProperty("display");

        // Quit is handled visible during active quiz only
        hide(quitQuizBtn);
    }

    function freshState() {
        isQuizMode = false;
        quizList = [];
        score = 0;
        index = 0;
        answers = [];
        resetQuizUIBase();
    }

    // ===============================
    // 🧩 RENDER A QUESTION
    // ===============================
    function showQuestion() {
        const word = quizList[index];
        if (!word) {
        if (quizWordEl) quizWordEl.textContent = "⚠️ Could not load word at index " + index;
        return;
        }

        // Determine prompt/answer fields based on reverse mode
        const fieldQuestion = reverseModeCheckbox?.checked ? "english" : "danish";
        const fieldAnswer   = reverseModeCheckbox?.checked ? "danish"  : "english";

        // Set question text
        if (quizWordEl) quizWordEl.textContent = word[fieldQuestion] || "⚠️ Missing word";

        // Build options
        const options = generateChoices(word, quizList, fieldAnswer);
        if (choicesContainer) choicesContainer.innerHTML = "";

        // Prev is only visible if not on the first question
        if (index === 0) {
        hide(prevQuestionBtn);
        disable(prevQuestionBtn);
        } else {
        show(prevQuestionBtn);
        enable(prevQuestionBtn);
        }

        // Render option buttons
        options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("choice-btn");

        btn.addEventListener("click", () => {
            const isCorrect = option === word[fieldAnswer];

            // Record answer
            answers[index] = {
            chosen: option,
            correct: word[fieldAnswer],
            isCorrect,
            counted: answers[index]?.counted || false
            };

            // Visual feedback
            btn.classList.add(isCorrect ? "correct" : "wrong");
            if (!isCorrect) {
            // Mark the correct choice
            Array.from(choicesContainer.children).forEach(b => {
                if (b.textContent === word[fieldAnswer]) b.classList.add("correct");
            });
            } else if (!answers[index].counted) {
            // Count score only first time this question is answered
            score++;
            answers[index].counted = true;
            }

            // Lock choices and reveal Next
            Array.from(choicesContainer.children).forEach(b => b.disabled = true);
            show(nextQuestionBtn);
            enable(nextQuestionBtn);
            updateScore();
        });

        choicesContainer?.appendChild(btn);
        });

        // If revisiting an answered question, restore the markings and keep Next visible
        if (answers[index]) {
        const saved = answers[index];
        Array.from(choicesContainer.children).forEach(b => {
            b.disabled = true;
            if (b.textContent === saved.chosen) {
            b.classList.add(saved.isCorrect ? "correct" : "wrong");
            }
            if (!saved.isCorrect && b.textContent === saved.correct) {
            b.classList.add("correct");
            }
        });
        show(nextQuestionBtn);
        enable(nextQuestionBtn);
        }
    }

    // ===============================
    // 📊 UPDATE SCORE DISPLAY
    // ===============================
    function updateScore() {
        if (scoreDisplay) scoreDisplay.textContent = `Score: ${score}/${index + 1}`;
    }

    // ===============================
    // 🚀 START THE QUIZ (after category selection)
    // ===============================
    function startFlashQuiz() {
        isQuizMode = true;
        quizList = shuffleArray(window.currentList || []);
        score = 0;
        index = 0;
        answers = [];

        if (!quizList.length) {
        if (quizWordEl) quizWordEl.textContent = "⚠️ No words in selected category!";
        return;
        }

        // Prepare UI for active quiz run
        btnRow && btnRow.style.removeProperty("display"); // show row area
        hide(nextQuestionBtn); disable(nextQuestionBtn);   // until user answers
        hide(prevQuestionBtn); disable(prevQuestionBtn);   // first question has no prev
        show(quitQuizBtn);                                 // show quit during quiz
        show(scoreDisplay, "block");                       // score visible
        reverseModeCheckbox?.parentElement && show(reverseModeCheckbox.parentElement, "block");

        showQuestion();
        updateScore();
    }

    // ===============================
    // 🗂️ CATEGORY BUTTONS (enter quiz run)
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
        // Hide the category grid and start the quiz
        hide(quizCategorySelect);
        resetQuizUIBase();   // make sure we start spotless
        startFlashQuiz();
        });
    });

    // ===============================
    // ➡️ NEXT QUESTION
    // ===============================
    nextQuestionBtn?.addEventListener("click", () => {
        index++;
        if (index >= quizList.length) {
        alert(`✅ Quiz complete! Final score: ${score}/${quizList.length}`);
        // End of quiz — keep original behavior (route back to Study here),
        // OR you can dispatch an event and let script.js route:
        // window.dispatchEvent(new CustomEvent("quiz:finished", { detail: { score, total: quizList.length }}));

        isQuizMode = false;
        // Minimal cleanup for local UI bits; routing is usually handled by script.js
        hide(quitQuizBtn);
        resetQuizUIBase();

        // Legacy fallback routing if script.js isn't handling it:
        if (quizModeEl && studyModeEl && startQuizBtn) {
            quizModeEl.style.display = "none";
            studyModeEl.style.display = "block";
            startQuizBtn.style.display = "inline-block";
        }
        return;
        }
        showQuestion();
    });

    // ===============================
    // ⬅️ PREVIOUS QUESTION (review)
    // ===============================
    prevQuestionBtn?.addEventListener("click", () => {
        if (index > 0) {
        index--;
        showQuestion();
        show(nextQuestionBtn); // Keep Next visible while reviewing
        enable(nextQuestionBtn);
        }
    });

    // ===============================
    // 🚫 IMPORTANT: Start/Quit handlers NOT bound here
    // Script routing (enter/exit quiz) lives in script.js to avoid conflicts
    // ===============================

    // ===============================
    // 🔔 EVENT HOOKS FROM script.js (optional but helpful)
    // ===============================
    // script.js dispatches this before showing the quiz landing
    window.addEventListener("quiz:start-fresh", () => {
        freshState();          // wipe internal state/UI so no stale Prev remains
        // script.js will show the landing and category grid; we stay idle until a category is chosen
    });

    // script.js triggers this on Quit; we reset local state/UI
    window.addEventListener("quiz:quit", () => {
        freshState();
        // Let script.js route back to main menu. We just make sure our UI bits are clean.
    });
});
