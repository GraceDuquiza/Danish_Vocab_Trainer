window.addEventListener("DOMContentLoaded", function () {
    /* =========================================
        SHARED STATE (Study mode uses index, quiz.js
        will manage its own score/answers later)
    ========================================== */
    let index = 0;            // current position in currentList (Study Mode)
    let currentList = [];     // active word list for Study Mode
    window.currentList = [];  // exposed so quiz.js can use same list

    /* =========================================
        STUDY MODE (DOM refs)
    ========================================== */
    const studyModeEl    = document.getElementById("study-mode");
    const studyDanishEl  = document.getElementById("study-danish-word");
    const englishEl      = document.getElementById("english-meaning");
    const exampleEl      = document.getElementById("example-sentence");
    const nextBtn        = document.getElementById("next-btn");
    const prevBtn        = document.getElementById("prev-btn");
    const categorySelect = document.getElementById("category-select");

    /* =========================================
        QUIZ SECTION (DOM refs used for routing)
        (quiz logic lives in quiz.js — we just
        show/hide + reset the landing state)
    ========================================== */
    const startQuizBtn        = document.getElementById("start-quiz-btn");
    const quizModeEl          = document.getElementById("quiz-mode");
    const quizCategorySelect  = document.getElementById("quiz-category-select");
    const nextQuestionBtn     = document.getElementById("next-question-btn");
    const choicesContainer    = document.getElementById("choices");
    const quizWordEl          = document.getElementById("quiz-word");
    const scoreDisplay        = document.getElementById("score");
    const mainButtons         = document.getElementById("main-buttons"); // optional wrapper if you have it

    /* =========================================
        SKRIVEGUIDE (DOM refs)
    ========================================== */
    const navSkriveguide  = document.getElementById("nav-skriveguide");   // open the guide
    const skriveguideEl   = document.getElementById("skriveguide");       // guide container
    const guideContainer  = document.getElementById("main-content");      // where pages render
    const backToQuizBtn   = document.getElementById("back-to-quiz-btn");  // “Back to Menu” in guide
    let currentGuidePage  = 0;                                            // page pointer

    /* =========================================
        STUDY MODE — render word card
    ========================================== */
    function displayWord(i) {
        if (!currentList || currentList.length === 0) {
        studyDanishEl.textContent = "⚠️ No words loaded";
        englishEl.textContent = "-";
        exampleEl.textContent = "";
        return;
        }
        const word = currentList[i];
        studyDanishEl.textContent = word?.danish || "—";
        englishEl.textContent     = word?.english || "—";

        if (word?.example && word.example.trim() !== "") {
        exampleEl.style.display = "block";
        exampleEl.textContent   = word.example;
        } else {
        exampleEl.style.display = "none";
        exampleEl.textContent   = "";
        }
    }

    /* =========================================
        STUDY MODE — load a category
    ========================================== */
    function loadCategory(category) {
        index = 0;
        switch (category) {
        case "verber":
            currentList = typeof verber !== "undefined" ? verber : [];
            break;
        case "substantiver":
            currentList = typeof substantiver !== "undefined" ? substantiver : [];
            break;
        case "adjektiver":
            currentList = typeof adjektiver !== "undefined" ? adjektiver : [];
            break;
        case "adverbKonjunktion":
            currentList = typeof adverbKonjunktion !== "undefined" ? adverbKonjunktion : [];
            break;
        default:
            currentList = [];
        }
        window.currentList = currentList; // keep quiz.js in sync
        displayWord(index);
    }

    /* =========================================
        STUDY MODE — next / previous buttons
    ========================================== */
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

    /* Load initial category on page load */
    if (categorySelect) loadCategory(categorySelect.value);
    categorySelect?.addEventListener("change", (e) => loadCategory(e.target.value));

    /* =========================================
        SKRIVEGUIDE — render a page
        (content comes from skriveguide.js constant)
    ========================================== */
    function showGuidePage(i) {
    const page = (Array.isArray(skriveguide) ? skriveguide[i] : null);
    if (!page) {
        guideContainer.innerHTML = `<p>⚠️ No guide content.</p>`;
        return;
    }

    guideContainer.innerHTML = `
        <div class="guide-page">
        <!-- ✅ Top bar: Back to main menu -->
        <div class="guide-topbar">
            <button id="back-to-quiz-btn" aria-label="Back to main menu">⟵ Main Menu</button>
        </div>

        <h2>${page.title}</h2>
        ${page.content}

        <!-- Prev | counter | Next on one line -->
        <div class="guide-nav">
            <button id="prev-page" ${i === 0 ? "disabled" : ""}>⬅️ Forrige</button>
            <span class="guide-counter">${i + 1} / ${skriveguide.length}</span>
            <button id="next-page" ${i === skriveguide.length - 1 ? "disabled" : ""}>Næste ➡️</button>
        </div>
        </div>
    `;

    // bind per-page nav after render
    document.getElementById("prev-page")?.addEventListener("click", () => {
        if (currentGuidePage > 0) { currentGuidePage--; showGuidePage(currentGuidePage); }
    });
    document.getElementById("next-page")?.addEventListener("click", () => {
        if (currentGuidePage < skriveguide.length - 1) { currentGuidePage++; showGuidePage(currentGuidePage); }
    });

    // ✅ bind the Back button now that it exists
    document.getElementById("back-to-quiz-btn")?.addEventListener("click", goToMainMenu);
    }


    /* =========================================
        NAV — open Skriveguide (hide others)
    ========================================== */

    navSkriveguide?.addEventListener("click", () => {
    // Hide study + quiz
    studyModeEl.style.display = "none";
    quizModeEl.style.display  = "none";

    // 🔻 CHANGED: Hide the two top buttons while reading the guide
    startQuizBtn.style.display = "none";        // was "inline-block"
    navSkriveguide.style.display = "none";      // NEW: hide the guide button itself
    if (mainButtons) mainButtons.style.display = "none"; // hide any wrapper row if present

    // Show the guide
    skriveguideEl.style.display = "block";
    currentGuidePage = 0;
    showGuidePage(currentGuidePage);
    window.scrollTo({ top: 0, behavior: "smooth" });
    });


    /* =========================================
        NAV — go back to Main Menu (Study + Start)
    ========================================== */
    
    function goToMainMenu() {
    // Hide non-main sections
    skriveguideEl.style.display = "none";
    quizModeEl.style.display    = "none";

    // Show default landing = Study Mode
    studyModeEl.style.display   = "block";

    // 🔻 CHANGED: Re-show both top buttons on the main menu
    startQuizBtn.style.display  = "inline-block";
    navSkriveguide.style.display = "inline-block";
    if (mainButtons) mainButtons.style.display = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });
    }


    /* =========================================
        Start Quiz from anywhere (even inside guide)
        - hides Skriveguide
        - hides Study
        - shows Quiz landing (category picker)
        - resets quiz UI to a clean state
        (The actual quiz flow is handled by quiz.js)
    ========================================== */
    function enterQuizLanding() {
        // hide everything else
        skriveguideEl.style.display = "none";
        studyModeEl.style.display   = "none";
        startQuizBtn.style.display  = "none";

        // show quiz section + category selection
        quizModeEl.style.display         = "block";
        quizCategorySelect.style.display = "block";

        // hard-reset visible quiz UI (quiz.js will take over after category click)
        index = 0; // study index reset (not used by quiz logic)
        if (nextQuestionBtn) nextQuestionBtn.style.display = "none";
        if (choicesContainer) choicesContainer.innerHTML = "";
        if (quizWordEl) quizWordEl.textContent = "Ord";
        if (scoreDisplay) scoreDisplay.textContent = "";

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Bind the global "Start Quiz" button
    startQuizBtn?.addEventListener("click", enterQuizLanding);
});
