window.addEventListener("DOMContentLoaded", function () {
  /* =========================================
     SHARED STATE
     (Study mode uses `index`; quiz.js manages its own state)
  ========================================== */
  let index = 0;            // current position in currentList (Study Mode)
  let currentList = [];     // active word list for Study Mode
  window.currentList = [];  // exposed so quiz.js can reuse the same list

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
     (quiz logic lives in quiz.js — we just route/show/hide)
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
     NOTE: These elements must already exist in your HTML:
       #skriveguide (section wrapper)
       #guide-title, #guide-content, #guide-counter
       #prev-page, #next-page, #back-to-quiz-btn
  ========================================== */
  const navSkriveguide  = document.getElementById("nav-skriveguide"); // "Skriveguide" entry on main menu
  const skriveguideEl   = document.getElementById("skriveguide");     // whole guide section
  const guideTitleEl    = document.getElementById("guide-title");
  const guideContentEl  = document.getElementById("guide-content");
  const guideCounterEl  = document.getElementById("guide-counter");
  const guidePrevBtn    = document.getElementById("prev-page");
  const guideNextBtn    = document.getElementById("next-page");
  const guideBackBtn    = document.getElementById("back-to-quiz-btn");

  let currentGuidePage  = 0; // page pointer for Skriveguide

  /* =========================================
     STUDY MODE — render word card
  ========================================== */
  function displayWord(i) {
    if (!currentList || currentList.length === 0) {
      studyDanishEl.textContent = "⚠️ No words loaded";
      englishEl.textContent     = "-";
      exampleEl.style.display   = "none";
      exampleEl.textContent     = "";
      return;
    }
    const word = currentList[i];
    studyDanishEl.textContent = word?.danish  ?? "—";
    englishEl.textContent     = word?.english ?? "—";

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

  // Load initial category on page load
  if (categorySelect) loadCategory(categorySelect.value);
  categorySelect?.addEventListener("change", (e) => loadCategory(e.target.value));

  /* =========================================
     SKRIVEGUIDE — render one page INTO existing HTML
     (No innerHTML layout rebuild; we just set content)
  ========================================== */
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

    // Fill the existing elements
    if (guideTitleEl)   guideTitleEl.textContent   = page.title || "Untitled";
    if (guideContentEl) guideContentEl.innerHTML   = page.content || "";
    if (guideCounterEl) guideCounterEl.textContent = `${i + 1} / ${skriveguide.length}`;

    // Enable/disable buttons based on bounds
    if (guidePrevBtn) guidePrevBtn.disabled = (i === 0);
    if (guideNextBtn) guideNextBtn.disabled = (i === skriveguide.length - 1);
  }

  /* =========================================
     SKRIVEGUIDE — open/hide handlers
  ========================================== */
  function openSkriveguide(startIndex = 0) {
    // Hide study + quiz
    if (studyModeEl) studyModeEl.style.display = "none";
    if (quizModeEl)  quizModeEl.style.display  = "none";

    // Hide main menu buttons (if present)
    if (startQuizBtn)   startQuizBtn.style.display   = "none";
    if (navSkriveguide) navSkriveguide.style.display = "none";
    if (mainButtons)    mainButtons.style.display    = "none";

    // Show the guide
    if (skriveguideEl)  skriveguideEl.style.display  = "block";

    // Clamp the start index and render
    currentGuidePage = Math.min(Math.max(startIndex, 0), (skriveguide?.length || 1) - 1);
    renderGuidePage(currentGuidePage);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goToMainMenu() {
    // Hide non-main sections
    if (skriveguideEl) skriveguideEl.style.display = "none";
    if (quizModeEl)    quizModeEl.style.display    = "none";

    // Show default landing = Study Mode
    if (studyModeEl)   studyModeEl.style.display   = "block";

    // Re-show top buttons on the main menu
    if (startQuizBtn)   startQuizBtn.style.display    = "inline-block";
    if (navSkriveguide) navSkriveguide.style.display  = "inline-block";
    if (mainButtons)    mainButtons.style.display     = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* =========================================
     SKRIVEGUIDE — wire buttons ONCE
     (They remain in the DOM; no re-binding per render)
  ========================================== */
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

  // Optional: Arrow key navigation when Skriveguide is visible
  document.addEventListener("keydown", (e) => {
    const isGuideVisible = skriveguideEl && skriveguideEl.offsetParent !== null;
    if (!isGuideVisible) return;

    if (e.key === "ArrowLeft" && !guidePrevBtn?.disabled) {
      guidePrevBtn.click();
    } else if (e.key === "ArrowRight" && !guideNextBtn?.disabled) {
      guideNextBtn.click();
    }
  });

  /* =========================================
     QUIZ — landing (clean slate; quiz.js takes over)
  ========================================== */
  function enterQuizLanding() {
    // Hide everything else
    if (skriveguideEl) skriveguideEl.style.display = "none";
    if (studyModeEl)   studyModeEl.style.display   = "none";
    if (startQuizBtn)  startQuizBtn.style.display  = "none";

    // Show quiz section + category selection
    if (quizModeEl)         quizModeEl.style.display        = "block";
    if (quizCategorySelect) quizCategorySelect.style.display = "block";

    // Reset visible quiz UI (quiz.js will handle actual flow)
    index = 0; // study index reset (not used by quiz logic)
    if (nextQuestionBtn) nextQuestionBtn.style.display = "none";
    if (choicesContainer) choicesContainer.innerHTML = "";
    if (quizWordEl) quizWordEl.textContent = "Ord";
    if (scoreDisplay) scoreDisplay.textContent = "";

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Bind the global "Start Quiz" button
  startQuizBtn?.addEventListener("click", enterQuizLanding);

  /* =========================================
     Service Worker — register with RELATIVE path
     (works on GitHub Pages subpaths)
  ========================================== */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./sw.js", { scope: "./" }) // relative paths for subpaths
        .then(reg => console.log("SW registered:", reg.scope))
        .catch(err => console.error("SW registration failed:", err));
    });
  }
});

