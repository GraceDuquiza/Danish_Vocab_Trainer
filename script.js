// script.js
// ====================================================================
// Danish Vocab Trainer — Router + Study + Skriveguide
// - This file controls WHAT section is visible (routing).
// - quiz.js controls HOW the quiz runs (questions, scoring, etc.).
// - Fresh-start fix: when you Quit and Start again, UI is spotless.
// ====================================================================

window.addEventListener("DOMContentLoaded", function () {
    // ------------------------------------------------------------------
    // SHARED STATE (Study uses `index`; quiz.js manages its own state)
    // ------------------------------------------------------------------
    let index = 0;                 // current position in currentList (Study Mode)
    let currentList = [];          // active word list for Study Mode
    window.currentList = [];       // exposed so quiz.js can reuse same list

    // ------------------------------------------------------------------
    // STUDY MODE — DOM references
    // ------------------------------------------------------------------
    const studyModeEl    = document.getElementById("study-mode");
    const studyDanishEl  = document.getElementById("study-danish-word");
    const englishEl      = document.getElementById("english-meaning");
    const exampleEl      = document.getElementById("example-sentence");
    const nextBtn        = document.getElementById("next-btn");
    const prevBtn        = document.getElementById("prev-btn");
    const categorySelect = document.getElementById("category-select");

    // ------------------------------------------------------------------
    // QUIZ — DOM references (routing only; logic lives in quiz.js)
    // ------------------------------------------------------------------
    const startQuizBtn        = document.getElementById("start-quiz-btn");
    const quizModeEl          = document.getElementById("quiz-mode");
    const quizCategorySelect  = document.getElementById("quiz-category-select");
    const nextQuestionBtn     = document.getElementById("next-question-btn");
    const prevQuestionBtn     = document.getElementById("prev-question-btn");
    const quitQuizBtn         = document.getElementById("quit-quiz-btn");
    const choicesContainer    = document.getElementById("choices");
    const quizWordEl          = document.getElementById("quiz-word");
    const scoreDisplay        = document.getElementById("score");
    const mainButtons         = document.getElementById("main-buttons"); // Start/Skriveguide row
    const btnRow              = document.querySelector(".btn-row");      // Prev/Next container row

    // ------------------------------------------------------------------
    // SKRIVEGUIDE — DOM references
    // ------------------------------------------------------------------
    const navSkriveguide  = document.getElementById("nav-skriveguide"); // open Skriveguide from menu
    const skriveguideEl   = document.getElementById("skriveguide");     // whole guide section
    const guideTitleEl    = document.getElementById("guide-title");
    const guideContentEl  = document.getElementById("guide-content");
    const guideCounterEl  = document.getElementById("guide-counter");
    const guidePrevBtn    = document.getElementById("prev-page");
    const guideNextBtn    = document.getElementById("next-page");
    const guideBackBtn    = document.getElementById("back-to-quiz-btn");
    let currentGuidePage  = 0;

    // ================================================================
    // STUDY MODE — rendering + category loading
    // ================================================================
    function displayWord(i) {
        if (!currentList || currentList.length === 0) {
        if (studyDanishEl) studyDanishEl.textContent = "⚠️ No words loaded";
        if (englishEl)     englishEl.textContent     = "-";
        if (exampleEl) {
            exampleEl.style.display = "none";
            exampleEl.textContent   = "";
        }
        return;
        }

        const word = currentList[i];
        if (studyDanishEl) studyDanishEl.textContent = word?.danish  ?? "—";
        if (englishEl)     englishEl.textContent     = word?.english ?? "—";

        if (exampleEl) {
        if (word?.example && word.example.trim() !== "") {
            exampleEl.style.display = "block";
            exampleEl.textContent   = word.example;
        } else {
            exampleEl.style.display = "none";
            exampleEl.textContent   = "";
        }
        }
    }

    function loadCategory(category) {
        index = 0;
        switch (category) {
        case "verber":
            currentList = (typeof verber !== "undefined") ? verber : [];
            break;
        case "substantiver":
            currentList = (typeof substantiver !== "undefined") ? substantiver : [];
            break;
        case "adjektiver":
            currentList = (typeof adjektiver !== "undefined") ? adjektiver : [];
            break;
        case "adverbKonjunktion":
            currentList = (typeof adverbKonjunktion !== "undefined") ? adverbKonjunktion : [];
            break;
        default:
            currentList = [];
        }
        window.currentList = currentList; // keep quiz.js in sync
        displayWord(index);
    }

    // Study nav buttons
    nextBtn?.addEventListener("click", () => {
        if (currentList.length === 0) return;
        index = (index + 1) % currentList.length;      // loop forward
        displayWord(index);
    });
    prevBtn?.addEventListener("click", () => {
        if (currentList.length === 0) return;
        index = (index - 1 + currentList.length) % currentList.length; // loop backward
        displayWord(index);
    });

    // Initial category + changes
    if (categorySelect) loadCategory(categorySelect.value);
    categorySelect?.addEventListener("change", (e) => loadCategory(e.target.value));

    // ================================================================
    // SKRIVEGUIDE — rendering + navigation (namespaced content)
    // ================================================================
    function renderGuidePage(i) {
        const page = (Array.isArray(skriveguide) ? skriveguide[i] : null);

        if (!page) {
        if (guideTitleEl)   guideTitleEl.textContent   = "⚠️ No guide content";
        if (guideContentEl) guideContentEl.innerHTML   = "<p>Please check your skriveguide data.</p>";
        if (guideCounterEl) guideCounterEl.textContent = "0 / 0";
        if (guidePrevBtn)   guidePrevBtn.disabled      = true;
        if (guideNextBtn)   guideNextBtn.disabled      = true;
        return;
        }

        if (guideTitleEl)   guideTitleEl.textContent   = page.title || "Untitled";
        if (guideContentEl) guideContentEl.innerHTML   = page.content || "";
        if (guideCounterEl) guideCounterEl.textContent = `${i + 1} / ${skriveguide.length}`;

        if (guidePrevBtn) guidePrevBtn.disabled = (i === 0);
        if (guideNextBtn) guideNextBtn.disabled = (i === skriveguide.length - 1);
    }

    function openSkriveguide(startIndex = 0) {
        // Hide study + quiz
        if (studyModeEl) studyModeEl.style.display = "none";
        if (quizModeEl)  quizModeEl.style.display  = "none";

        // Hide main buttons row
        if (startQuizBtn)   startQuizBtn.style.display   = "none";
        if (navSkriveguide) navSkriveguide.style.display = "none";
        if (mainButtons)    mainButtons.style.display    = "none";

        // Show guide
        if (skriveguideEl)  skriveguideEl.style.display  = "block";

        // Clamp and render
        currentGuidePage = Math.min(Math.max(startIndex, 0), (skriveguide?.length || 1) - 1);
        renderGuidePage(currentGuidePage);

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function goToMainMenu() {
        // Hide non-main sections
        if (skriveguideEl) skriveguideEl.style.display = "none";
        if (quizModeEl)    quizModeEl.style.display    = "none";

        // Show default: Study + main buttons row
        if (studyModeEl)   studyModeEl.style.display   = "block";
        if (startQuizBtn)   startQuizBtn.style.display   = "inline-block";
        if (navSkriveguide) navSkriveguide.style.display = "inline-block";
        if (mainButtons)    mainButtons.style.display    = "block";

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Skriveguide bindings
    navSkriveguide?.addEventListener("click", () => openSkriveguide(0));
    guidePrevBtn?.addEventListener("click", () => {
        if (currentGuidePage > 0) {
        currentGuidePage--;
        renderGuidePage(currentGuidePage);
        }
    });
    guideNextBtn?.addEventListener("click", () => {
        if (currentGuidePage < (skriveguide?.length || 1) - 1) {
        currentGuidePage++;
        renderGuidePage(currentGuidePage);
        }
    });
    guideBackBtn?.addEventListener("click", goToMainMenu);

    // Optional: arrow key nav for Skriveguide
    document.addEventListener("keydown", (e) => {
        const isGuideVisible = !!(skriveguideEl && skriveguideEl.offsetParent !== null);
        if (!isGuideVisible) return;

        if (e.key === "ArrowLeft" && !guidePrevBtn?.disabled)  guidePrevBtn.click();
        if (e.key === "ArrowRight" && !guideNextBtn?.disabled) guideNextBtn.click();
    });

    // ================================================================
    // QUIZ — routing only (landing + quit) — fresh-start safe
    // ================================================================

    // Helper: wipe visible quiz controls so there's never stale Prev/Next/Quit
    function resetQuizLandingUI() {
        // Hide & disable Prev/Next on landing
        if (prevQuestionBtn) {
        prevQuestionBtn.style.display = "none";
        prevQuestionBtn.setAttribute("disabled", "");
        }
        if (nextQuestionBtn) {
        nextQuestionBtn.style.display = "none";
        nextQuestionBtn.setAttribute("disabled", "");
        }

        // Optionally hide the inline row until quiz.js starts rendering
        if (btnRow) btnRow.style.display = "none";

        // Hide Quit until quiz actually starts (quiz.js will show it)
        if (quitQuizBtn) quitQuizBtn.style.display = "none";

        // Clear dynamic parts
        if (choicesContainer) choicesContainer.innerHTML = "";
        if (quizWordEl) quizWordEl.textContent = "Ord";
        if (scoreDisplay) scoreDisplay.textContent = "";
    }

    // Enter quiz landing: show quiz section + category grid, notify quiz.js to reset
    function enterQuizLanding() {
        // Hide other sections
        if (skriveguideEl) skriveguideEl.style.display = "none";
        if (studyModeEl)   studyModeEl.style.display   = "none";
        if (startQuizBtn)  startQuizBtn.style.display  = "none";

        // Show quiz section + category selection
        if (quizModeEl)         quizModeEl.style.display        = "block";
        if (quizCategorySelect) quizCategorySelect.style.display = "block";

        // Fresh-start UI cleanup to avoid any leftover Prev/Next/Quit
        resetQuizLandingUI();

        // Tell quiz.js to wipe its internal state/UI (no stale answers/score)
        window.dispatchEvent(new CustomEvent("quiz:start-fresh"));

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Start Quiz (routing only; quiz.js will take over after category is picked)
    startQuizBtn?.addEventListener("click", enterQuizLanding);

    // Quit Quiz: notify quiz.js and route home
    quitQuizBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        // Allow quiz.js to stop timers / clear its state
        window.dispatchEvent(new CustomEvent("quiz:quit"));
        // Return to main menu
        goToMainMenu();
    });

    // ================================================================
    // Service Worker — register using relative paths (GitHub Pages safe)
    // ================================================================
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("./sw.js", { scope: "./" })
            .then(reg => console.log("SW registered:", reg.scope))
            .catch(err => console.error("SW registration failed:", err));
        });
    }
});
