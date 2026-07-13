// script.js
// ====================================================================
// Danish Vocab Trainer — Router + Study + Skriveguide + Grammatik
// - This file controls WHAT section is visible (routing).
// - quiz.js controls HOW the quiz runs (questions, scoring, etc.).
// - Fresh-start fix: when you Quit and Start again, UI is spotless.
// ====================================================================

window.addEventListener("DOMContentLoaded", function () {
    // ------------------------------------------------------------------
    // GDPR COOKIE CONSENT — Google Analytics loads only after acceptance
    // ------------------------------------------------------------------
    const analyticsMeasurementId = "G-7DTJDCT4EG";
    const placeholderMeasurementId = "G-XXXXXXXXXX";
    const cookieBanner = document.getElementById("cookie-banner");
    const cookieAcceptBtn = document.getElementById("cookie-accept");
    const cookieDeclineBtn = document.getElementById("cookie-decline");
    const cookieSettingsBtn = document.getElementById("cookie-settings");
    const footerPrivacyLinks = document.querySelector(".footer-links");
    const consentStorageKey = "danishVocabAnalyticsConsent";
    const consentAccepted = "accepted";
    const consentDeclined = "declined";
    const analyticsScriptId = "google-analytics-script";
    const analyticsScriptUrl = `https://www.googletagmanager.com/gtag/js?id=${analyticsMeasurementId}`;
    let isHomeView = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
    window.gtag("consent", "default", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied"
    });

    function getSavedConsent() {
        try {
            return localStorage.getItem(consentStorageKey);
        } catch {
            return null;
        }
    }

    function saveConsent(value) {
        try {
            localStorage.setItem(consentStorageKey, value);
            return true;
        } catch {
            // If storage is unavailable, still respect the current page choice.
            return false;
        }
    }

    function hideCookieBanner() {
        cookieBanner?.classList.add("is-hidden");
    }

    function showCookieBanner() {
        if (isHomeView) {
            cookieBanner?.classList.remove("is-hidden");
        }
    }

    function setHomePrivacyVisibility(showOnHome) {
        isHomeView = showOnHome;
        footerPrivacyLinks?.classList.toggle("is-hidden", !showOnHome);

        if (!showOnHome) {
            hideCookieBanner();
        } else if (!getSavedConsent()) {
            showCookieBanner();
        }
    }

    function deleteCookie(name, domain) {
        document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax${domain ? `; domain=${domain}` : ""}`;
    }

    function clearGoogleAnalyticsCookies() {
        const cookieNames = document.cookie
            .split(";")
            .map(cookie => cookie.trim().split("=")[0])
            .filter(name => name === "_ga" || name === "_gid" || name === "_gat" || name.startsWith("_ga_"));
        const host = window.location.hostname;
        const domains = ["", host, host.startsWith(".") ? host : `.${host}`];

        cookieNames.forEach(name => {
            domains.forEach(domain => deleteCookie(name, domain));
        });
    }

    function grantAnalyticsConsent() {
        window[`ga-disable-${analyticsMeasurementId}`] = false;
        window.gtag("consent", "update", {
            analytics_storage: "granted"
        });
    }

    function denyAnalyticsConsent() {
        window[`ga-disable-${analyticsMeasurementId}`] = true;
        window.gtag("consent", "update", {
            analytics_storage: "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied"
        });
        clearGoogleAnalyticsCookies();
    }

    function loadGoogleAnalytics() {
        const hasValidMeasurementId = analyticsMeasurementId && analyticsMeasurementId !== placeholderMeasurementId;
        const isAnalyticsLoaded = document.getElementById(analyticsScriptId);

        if (!hasValidMeasurementId) {
            return;
        }

        grantAnalyticsConsent();

        if (isAnalyticsLoaded) {
            return;
        }

        window.gtag("js", new Date());
        window.gtag("config", analyticsMeasurementId, { anonymize_ip: true });

        const analyticsScript = document.createElement("script");
        analyticsScript.id = analyticsScriptId;
        analyticsScript.async = true;
        analyticsScript.src = analyticsScriptUrl;
        document.head.appendChild(analyticsScript);
    }

    const savedConsent = getSavedConsent();
    if (savedConsent === consentAccepted) {
        hideCookieBanner();
        loadGoogleAnalytics();
    } else if (savedConsent === consentDeclined) {
        denyAnalyticsConsent();
        hideCookieBanner();
    } else {
        showCookieBanner();
    }

    cookieAcceptBtn?.addEventListener("click", () => {
        saveConsent(consentAccepted);
        hideCookieBanner();
        loadGoogleAnalytics();
    });

    cookieDeclineBtn?.addEventListener("click", () => {
        saveConsent(consentDeclined);
        denyAnalyticsConsent();
        hideCookieBanner();
    });

    cookieSettingsBtn?.addEventListener("click", showCookieBanner);

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
    const studyToHomeBtn = document.getElementById("study-to-home");
    const studyNavRow    = studyModeEl?.querySelector(".btn-row");

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
    const homeWelcome         = document.getElementById("home-welcome");
    const navVocabulary       = document.getElementById("nav-vocabulary");
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

    // ------------------------------------------------------------------
    // GRAMMATIK — DOM references and lesson state
    // ------------------------------------------------------------------
    const navGrammatik        = document.getElementById("nav-grammatik");
    const grammarSelectionEl  = document.getElementById("grammar-selection");
    const openAdverbLessonBtn = document.getElementById("open-adverb-lesson");
    const grammarToHomeBtn    = document.getElementById("grammar-to-home");
    const adverbLessonEl      = document.getElementById("adverb-lesson");
    const adverbTitleEl       = document.getElementById("adverb-lesson-title");
    const adverbContentEl     = document.getElementById("adverb-lesson-content");
    const adverbCounterEl     = document.getElementById("adverb-counter");
    const adverbPrevBtn       = document.getElementById("adverb-prev");
    const adverbNextBtn       = document.getElementById("adverb-next");
    const adverbToGrammarBtn  = document.getElementById("adverb-to-grammar");
    const adverbToHomeBtn     = document.getElementById("adverb-to-home");
    let currentAdverbPage = 0;
    const openNounLessonBtn = document.getElementById("open-noun-lesson");
    const nounLessonEl      = document.getElementById("noun-lesson");
    const nounTitleEl       = document.getElementById("noun-lesson-title");
    const nounContentEl     = document.getElementById("noun-lesson-content");
    const nounCounterEl     = document.getElementById("noun-counter");
    const nounPrevBtn       = document.getElementById("noun-prev");
    const nounNextBtn       = document.getElementById("noun-next");
    const nounToGrammarBtn  = document.getElementById("noun-to-grammar");
    const nounToHomeBtn     = document.getElementById("noun-to-home");
    let currentNounPage = 0;
    const openAdjectiveLessonBtn = document.getElementById("open-adjective-lesson");
    const adjectiveLessonEl      = document.getElementById("adjective-lesson");
    const adjectiveTitleEl       = document.getElementById("adjective-lesson-title");
    const adjectiveContentEl     = document.getElementById("adjective-lesson-content");
    const adjectiveCounterEl     = document.getElementById("adjective-counter");
    const adjectivePrevBtn       = document.getElementById("adjective-prev");
    const adjectiveNextBtn       = document.getElementById("adjective-next");
    const adjectiveToGrammarBtn  = document.getElementById("adjective-to-grammar");
    const adjectiveToHomeBtn     = document.getElementById("adjective-to-home");
    let currentAdjectivePage = 0;
    const openVerbLessonBtn = document.getElementById("open-verb-lesson");
    const verbLessonEl      = document.getElementById("verb-lesson");
    const verbTitleEl       = document.getElementById("verb-lesson-title");
    const verbContentEl     = document.getElementById("verb-lesson-content");
    const verbCounterEl     = document.getElementById("verb-counter");
    const verbPrevBtn       = document.getElementById("verb-prev");
    const verbNextBtn       = document.getElementById("verb-next");
    const verbToGrammarBtn  = document.getElementById("verb-to-grammar");
    const verbToHomeBtn     = document.getElementById("verb-to-home");
    let currentVerbPage = 0;

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
        setHomePrivacyVisibility(false);

        // Hide study + quiz
        if (studyModeEl) studyModeEl.style.display = "none";
        if (quizModeEl)  quizModeEl.style.display  = "none";
        if (homeWelcome) homeWelcome.style.display = "none";
        grammarSelectionEl?.classList.add("is-hidden");
        adverbLessonEl?.classList.add("is-hidden");
        nounLessonEl?.classList.add("is-hidden");
        adjectiveLessonEl?.classList.add("is-hidden");
        verbLessonEl?.classList.add("is-hidden");

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
        setHomePrivacyVisibility(true);

        // Hide non-main sections
        if (skriveguideEl) skriveguideEl.style.display = "none";
        if (quizModeEl)    quizModeEl.style.display    = "none";
        grammarSelectionEl?.classList.add("is-hidden");
        adverbLessonEl?.classList.add("is-hidden");
        nounLessonEl?.classList.add("is-hidden");
        adjectiveLessonEl?.classList.add("is-hidden");
        verbLessonEl?.classList.add("is-hidden");

        // Show the home navigation hub.
        if (studyModeEl)   studyModeEl.style.display   = "none";
        if (homeWelcome)   homeWelcome.style.display   = "block";
        if (navVocabulary) navVocabulary.style.display = "";
        if (startQuizBtn)   startQuizBtn.style.display   = "";
        if (navSkriveguide) navSkriveguide.style.display = "";
        if (navGrammatik) navGrammatik.style.display = "";
        if (mainButtons)    mainButtons.style.display    = "";

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Skriveguide bindings
    navVocabulary?.addEventListener("click", openVocabulary);
    studyToHomeBtn?.addEventListener("click", goToMainMenu);
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

    // ================================================================
    // GRAMMATIK — selection, lesson rendering, and navigation
    // ================================================================
    function createGrammarLearningCards(container) {
        const contentNodes = Array.from(container.children);
        let card = null;
        let cardIndex = 0;

        const startCard = () => {
            cardIndex++;
            card = document.createElement("section");
            card.className = "grammar-learning-card";
            card.setAttribute("aria-label", `Lesson section ${cardIndex}`);
            container.appendChild(card);
        };

        contentNodes.forEach((node) => {
            if (!card || node.matches("h3")) startCard();
            card.appendChild(node);

            if (node.matches("h3")) {
                if (!node.id) node.id = `grammar-section-${cardIndex}`;
                card.removeAttribute("aria-label");
                card.setAttribute("aria-labelledby", node.id);
            }
        });
    }

    function markGrammarEnglishTranslations(container) {
        container.querySelectorAll("em, .en, [lang='en']").forEach((element) => {
            element.classList.add("grammar-english");
        });

        container.querySelectorAll("table").forEach((table) => {
            const headingRow = table.querySelector("thead tr") || table.querySelector("tr");
            if (!headingRow) return;

            const headingText = Array.from(headingRow.children)
                .map((cell) => cell.textContent.trim().toLowerCase());

            const danishColumn = headingText.findIndex((text) => text.includes("dansk"));
            const englishColumn = headingText.findIndex((text) => text.includes("english"));

            if (danishColumn >= 0 && englishColumn >= 0) {
                table.classList.add("grammar-example-table");

                table.querySelectorAll("tr").forEach((row) => {
                    Array.from(row.children).forEach((cell, index) => {
                        if (index === danishColumn) {
                            cell.classList.add("grammar-danish-column");
                        } else if (index === englishColumn) {
                            cell.classList.add("grammar-english-column");
                        } else {
                            cell.classList.add("grammar-shared-column");
                        }
                    });
                });
            }

            const englishColumns = Array.from(headingRow.children)
                .map((cell, index) => (/english/i.test(cell.textContent) ? index : -1))
                .filter((index) => index >= 0);

            table.querySelectorAll("tr").forEach((row) => {
                englishColumns.forEach((index) => {
                    row.children[index]?.classList.add("grammar-english");
                });
            });
        });

        container.querySelectorAll("strong").forEach((label) => {
            if (/^english\s*:/i.test(label.textContent.trim())) {
                label.closest("th, td, p, li")?.classList.add("grammar-english");
            }
        });

        container.querySelectorAll("h3").forEach((heading) => {
            const [danishText, ...englishParts] = heading.textContent.split("/");
            const englishText = englishParts.join("/").trim();
            if (!danishText.trim() || !englishText) return;

            const danish = document.createElement("strong");
            danish.lang = "da";
            danish.textContent = danishText.trim();

            const english = document.createElement("span");
            english.className = "grammar-english grammar-heading-english";
            english.lang = "en";
            english.textContent = englishText;

            heading.classList.add("grammar-heading-language-pair");
            heading.replaceChildren(danish, english);
        });

        container.querySelectorAll("th > strong").forEach((label) => {
            const [danishText, ...englishParts] = label.textContent.split("/");
            const englishText = englishParts.join("/").trim();
            if (!danishText.trim() || !englishText) return;

            const pair = document.createElement("span");
            pair.className = "grammar-paired-label";

            const danish = document.createElement("strong");
            danish.lang = "da";
            danish.textContent = danishText.trim();

            const english = document.createElement("em");
            english.className = "grammar-english";
            english.lang = "en";
            english.textContent = englishText;

            pair.append(danish, english);
            label.replaceWith(pair);
        });

        container.querySelectorAll("th .grammar-paired-label > .grammar-english").forEach((translation) => {
            if (translation.matches("em")) return;

            const emphasis = document.createElement("em");
            emphasis.className = translation.className;
            emphasis.lang = translation.lang || "en";
            emphasis.append(...translation.childNodes);
            translation.replaceWith(emphasis);
        });
    }

    function arrangeGrammarLanguagePairs(container) {
        const isEnglishOnlyParagraph = (paragraph) => {
            const meaningfulNodes = Array.from(paragraph.childNodes).filter((node) =>
                node.nodeType === Node.ELEMENT_NODE || node.textContent.trim()
            );
            return meaningfulNodes.length === 1
                && meaningfulNodes[0].nodeType === Node.ELEMENT_NODE
                && meaningfulNodes[0].matches("em, .grammar-english, [lang='en']");
        };

        Array.from(container.querySelectorAll("p")).forEach((danish) => {
            const english = danish.nextElementSibling;
            if (!english?.matches("p") || !isEnglishOnlyParagraph(english)) return;
            if (!danish.textContent.trim() || danish.closest(".grammar-text-pair")) return;

            const pair = document.createElement("div");
            pair.className = "grammar-text-pair";
            danish.lang = "da";
            english.lang = "en";
            english.classList.add("grammar-english");
            danish.before(pair);
            pair.append(danish, english);
        });

        container.querySelectorAll("p, td, th").forEach((element) => {
            if (element.closest(".grammar-text-pair")) return;
            if (element.classList.contains("grammar-inline-language-pair")) return;

            const english = Array.from(element.children).find((child) =>
                child.matches("em, .grammar-english[lang='en']")
            );
            if (!english || english !== element.lastElementChild) return;

            const precedingNodes = Array.from(element.childNodes).slice(0, Array.from(element.childNodes).indexOf(english));
            const hasDanishText = precedingNodes.some((node) => node.textContent.trim());
            if (!hasDanishText) return;

            while (precedingNodes.at(-1)?.nodeName === "BR") precedingNodes.pop()?.remove();

            const danish = document.createElement("span");
            danish.lang = "da";
            precedingNodes.forEach((node) => danish.appendChild(node));
            element.classList.add("grammar-inline-language-pair");
            english.lang = "en";
            english.classList.add("grammar-english");
            element.prepend(danish);
        });
    }

    function renderAdverbPage(pageIndex) {
        const pages = (typeof adverbielPages !== "undefined" && Array.isArray(adverbielPages))
            ? adverbielPages
            : [];
        const page = pages[pageIndex];

        if (!page) {
            if (adverbTitleEl) adverbTitleEl.textContent = "No lesson content";
            if (adverbContentEl) adverbContentEl.innerHTML = "<p>Please check the adverb lesson data.</p>";
            if (adverbCounterEl) adverbCounterEl.textContent = "0 / 0";
            if (adverbPrevBtn) adverbPrevBtn.disabled = true;
            if (adverbNextBtn) adverbNextBtn.disabled = true;
            return;
        }

        if (adverbTitleEl) {
            const danishTitle = document.createElement("span");
            danishTitle.lang = "da";
            danishTitle.textContent = `${pageIndex + 1}. ${page.titleDa}`;

            const englishTitle = document.createElement("span");
            englishTitle.className = "grammar-title-english";
            englishTitle.lang = "en";
            englishTitle.textContent = page.titleEn;

            adverbTitleEl.replaceChildren(danishTitle, englishTitle);
        }
        if (adverbContentEl) {
            adverbContentEl.innerHTML = page.content || "";
            const singleColumnPageIds = new Set([
                "section-6-4",
                "section-7-2"
            ]);
            adverbContentEl.classList.toggle("grammar-single-column-page", singleColumnPageIds.has(page.id));
            markGrammarEnglishTranslations(adverbContentEl);
            arrangeGrammarLanguagePairs(adverbContentEl);
            createGrammarLearningCards(adverbContentEl);
        }
        if (adverbCounterEl) {
            adverbCounterEl.textContent = `${pageIndex + 1} / ${pages.length}`;
        }
        if (adverbPrevBtn) adverbPrevBtn.disabled = pageIndex === 0;
        if (adverbNextBtn) adverbNextBtn.disabled = pageIndex === pages.length - 1;
    }

    function hideHomeViews() {
        setHomePrivacyVisibility(false);

        if (studyModeEl) studyModeEl.style.display = "none";
        if (quizModeEl) quizModeEl.style.display = "none";
        if (skriveguideEl) skriveguideEl.style.display = "none";
        if (homeWelcome) homeWelcome.style.display = "none";
        if (mainButtons) mainButtons.style.display = "none";
    }

    function openGrammarSelection() {
        hideHomeViews();
        adverbLessonEl?.classList.add("is-hidden");
        nounLessonEl?.classList.add("is-hidden");
        adjectiveLessonEl?.classList.add("is-hidden");
        verbLessonEl?.classList.add("is-hidden");
        grammarSelectionEl?.classList.remove("is-hidden");
        document.getElementById("grammar-selection-title")?.focus?.();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function openVocabulary() {
        setHomePrivacyVisibility(false);
        if (homeWelcome) homeWelcome.style.display = "none";
        if (mainButtons) mainButtons.style.display = "none";
        if (quizModeEl) quizModeEl.style.display = "none";
        if (skriveguideEl) skriveguideEl.style.display = "none";
        grammarSelectionEl?.classList.add("is-hidden");
        adverbLessonEl?.classList.add("is-hidden");
        nounLessonEl?.classList.add("is-hidden");
        adjectiveLessonEl?.classList.add("is-hidden");
        verbLessonEl?.classList.add("is-hidden");
        if (studyModeEl) studyModeEl.style.display = "block";
        if (studyNavRow) studyNavRow.style.display = "flex";
        categorySelect?.focus();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function openAdverbLesson(startIndex = 0) {
        const pageCount = (typeof adverbielPages !== "undefined" && Array.isArray(adverbielPages))
            ? adverbielPages.length
            : 0;
        hideHomeViews();
        grammarSelectionEl?.classList.add("is-hidden");
        nounLessonEl?.classList.add("is-hidden");
        adjectiveLessonEl?.classList.add("is-hidden");
        verbLessonEl?.classList.add("is-hidden");
        adverbLessonEl?.classList.remove("is-hidden");
        currentAdverbPage = Math.min(Math.max(startIndex, 0), Math.max(pageCount - 1, 0));
        renderAdverbPage(currentAdverbPage);
        adverbTitleEl?.focus();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function renderNounPage(pageIndex) {
        const pages = (typeof substantivGrammarPages !== "undefined" && Array.isArray(substantivGrammarPages))
            ? substantivGrammarPages
            : [];
        const page = pages[pageIndex];

        if (!page) {
            if (nounTitleEl) nounTitleEl.textContent = "No lesson content";
            if (nounContentEl) nounContentEl.innerHTML = "<p>Please check the noun lesson data.</p>";
            if (nounCounterEl) nounCounterEl.textContent = "0 / 0";
            if (nounPrevBtn) nounPrevBtn.disabled = true;
            if (nounNextBtn) nounNextBtn.disabled = true;
            return;
        }

        if (nounTitleEl) {
            const danishTitle = document.createElement("span");
            danishTitle.lang = "da";
            danishTitle.textContent = `${pageIndex + 1}. ${page.titleDa}`;

            const englishTitle = document.createElement("span");
            englishTitle.className = "grammar-title-english";
            englishTitle.lang = "en";
            englishTitle.textContent = page.titleEn;

            nounTitleEl.replaceChildren(danishTitle, englishTitle);
        }
        if (nounContentEl) {
            nounContentEl.innerHTML = page.content || "";
            nounContentEl.classList.remove("grammar-single-column-page");
            markGrammarEnglishTranslations(nounContentEl);
            arrangeGrammarLanguagePairs(nounContentEl);
            createGrammarLearningCards(nounContentEl);
        }
        if (nounCounterEl) nounCounterEl.textContent = `${pageIndex + 1} / ${pages.length}`;
        if (nounPrevBtn) nounPrevBtn.disabled = pageIndex === 0;
        if (nounNextBtn) nounNextBtn.disabled = pageIndex === pages.length - 1;
    }

    function openNounLesson(startIndex = 0) {
        const pageCount = (typeof substantivGrammarPages !== "undefined" && Array.isArray(substantivGrammarPages))
            ? substantivGrammarPages.length
            : 0;
        hideHomeViews();
        grammarSelectionEl?.classList.add("is-hidden");
        adverbLessonEl?.classList.add("is-hidden");
        adjectiveLessonEl?.classList.add("is-hidden");
        verbLessonEl?.classList.add("is-hidden");
        nounLessonEl?.classList.remove("is-hidden");
        currentNounPage = Math.min(Math.max(startIndex, 0), Math.max(pageCount - 1, 0));
        renderNounPage(currentNounPage);
        nounTitleEl?.focus();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function renderAdjectivePage(pageIndex) {
        const pages = (typeof adjektivGrammarPages !== "undefined" && Array.isArray(adjektivGrammarPages))
            ? adjektivGrammarPages
            : [];
        const page = pages[pageIndex];

        if (!page) {
            if (adjectiveTitleEl) adjectiveTitleEl.textContent = "No lesson content";
            if (adjectiveContentEl) adjectiveContentEl.innerHTML = "<p>Please check the adjective lesson data.</p>";
            if (adjectiveCounterEl) adjectiveCounterEl.textContent = "0 / 0";
            if (adjectivePrevBtn) adjectivePrevBtn.disabled = true;
            if (adjectiveNextBtn) adjectiveNextBtn.disabled = true;
            return;
        }

        if (adjectiveTitleEl) {
            const danishTitle = document.createElement("span");
            danishTitle.lang = "da";
            danishTitle.textContent = `${pageIndex + 1}. ${page.titleDa}`;

            const englishTitle = document.createElement("span");
            englishTitle.className = "grammar-title-english";
            englishTitle.lang = "en";
            englishTitle.textContent = page.titleEn;

            adjectiveTitleEl.replaceChildren(danishTitle, englishTitle);
        }
        if (adjectiveContentEl) {
            adjectiveContentEl.innerHTML = page.content || "";
            adjectiveContentEl.classList.remove("grammar-single-column-page");
            markGrammarEnglishTranslations(adjectiveContentEl);
            arrangeGrammarLanguagePairs(adjectiveContentEl);
            createGrammarLearningCards(adjectiveContentEl);
        }
        if (adjectiveCounterEl) adjectiveCounterEl.textContent = `${pageIndex + 1} / ${pages.length}`;
        if (adjectivePrevBtn) adjectivePrevBtn.disabled = pageIndex === 0;
        if (adjectiveNextBtn) adjectiveNextBtn.disabled = pageIndex === pages.length - 1;
    }

    function openAdjectiveLesson(startIndex = 0) {
        const pageCount = (typeof adjektivGrammarPages !== "undefined" && Array.isArray(adjektivGrammarPages))
            ? adjektivGrammarPages.length
            : 0;
        hideHomeViews();
        grammarSelectionEl?.classList.add("is-hidden");
        adverbLessonEl?.classList.add("is-hidden");
        nounLessonEl?.classList.add("is-hidden");
        verbLessonEl?.classList.add("is-hidden");
        adjectiveLessonEl?.classList.remove("is-hidden");
        currentAdjectivePage = Math.min(Math.max(startIndex, 0), Math.max(pageCount - 1, 0));
        renderAdjectivePage(currentAdjectivePage);
        adjectiveTitleEl?.focus();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function renderVerbPage(pageIndex) {
        const pages = (typeof verbumGrammarPages !== "undefined" && Array.isArray(verbumGrammarPages))
            ? verbumGrammarPages
            : [];
        const page = pages[pageIndex];

        if (!page) {
            if (verbTitleEl) verbTitleEl.textContent = "No lesson content";
            if (verbContentEl) verbContentEl.innerHTML = "<p>Please check the verb lesson data.</p>";
            if (verbCounterEl) verbCounterEl.textContent = "0 / 0";
            if (verbPrevBtn) verbPrevBtn.disabled = true;
            if (verbNextBtn) verbNextBtn.disabled = true;
            return;
        }

        if (verbTitleEl) {
            const danishTitle = document.createElement("span");
            danishTitle.lang = "da";
            danishTitle.textContent = `${pageIndex + 1}. ${page.titleDa}`;

            const englishTitle = document.createElement("span");
            englishTitle.className = "grammar-title-english";
            englishTitle.lang = "en";
            englishTitle.textContent = page.titleEn;

            verbTitleEl.replaceChildren(danishTitle, englishTitle);
        }
        if (verbContentEl) {
            verbContentEl.innerHTML = page.content || "";
            verbContentEl.classList.remove("grammar-single-column-page");
            markGrammarEnglishTranslations(verbContentEl);
            arrangeGrammarLanguagePairs(verbContentEl);
            createGrammarLearningCards(verbContentEl);
        }
        if (verbCounterEl) verbCounterEl.textContent = `${pageIndex + 1} / ${pages.length}`;
        if (verbPrevBtn) verbPrevBtn.disabled = pageIndex === 0;
        if (verbNextBtn) verbNextBtn.disabled = pageIndex === pages.length - 1;
    }

    function openVerbLesson(startIndex = 0) {
        const pageCount = (typeof verbumGrammarPages !== "undefined" && Array.isArray(verbumGrammarPages))
            ? verbumGrammarPages.length
            : 0;
        hideHomeViews();
        grammarSelectionEl?.classList.add("is-hidden");
        adverbLessonEl?.classList.add("is-hidden");
        nounLessonEl?.classList.add("is-hidden");
        adjectiveLessonEl?.classList.add("is-hidden");
        verbLessonEl?.classList.remove("is-hidden");
        currentVerbPage = Math.min(Math.max(startIndex, 0), Math.max(pageCount - 1, 0));
        renderVerbPage(currentVerbPage);
        verbTitleEl?.focus();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    navGrammatik?.addEventListener("click", openGrammarSelection);
    openAdverbLessonBtn?.addEventListener("click", () => openAdverbLesson(0));
    openNounLessonBtn?.addEventListener("click", () => openNounLesson(0));
    openAdjectiveLessonBtn?.addEventListener("click", () => openAdjectiveLesson(0));
    openVerbLessonBtn?.addEventListener("click", () => openVerbLesson(0));
    grammarToHomeBtn?.addEventListener("click", goToMainMenu);
    adverbToGrammarBtn?.addEventListener("click", openGrammarSelection);
    adverbToHomeBtn?.addEventListener("click", goToMainMenu);
    nounToGrammarBtn?.addEventListener("click", openGrammarSelection);
    nounToHomeBtn?.addEventListener("click", goToMainMenu);
    adjectiveToGrammarBtn?.addEventListener("click", openGrammarSelection);
    adjectiveToHomeBtn?.addEventListener("click", goToMainMenu);
    verbToGrammarBtn?.addEventListener("click", openGrammarSelection);
    verbToHomeBtn?.addEventListener("click", goToMainMenu);
    adverbPrevBtn?.addEventListener("click", () => {
        if (currentAdverbPage > 0) {
            currentAdverbPage--;
            renderAdverbPage(currentAdverbPage);
            adverbTitleEl?.focus();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
    adverbNextBtn?.addEventListener("click", () => {
        const lastPage = (typeof adverbielPages !== "undefined" ? adverbielPages.length : 1) - 1;
        if (currentAdverbPage < lastPage) {
            currentAdverbPage++;
            renderAdverbPage(currentAdverbPage);
            adverbTitleEl?.focus();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
    nounPrevBtn?.addEventListener("click", () => {
        if (currentNounPage > 0) {
            currentNounPage--;
            renderNounPage(currentNounPage);
            nounTitleEl?.focus();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
    nounNextBtn?.addEventListener("click", () => {
        const lastPage = (typeof substantivGrammarPages !== "undefined" ? substantivGrammarPages.length : 1) - 1;
        if (currentNounPage < lastPage) {
            currentNounPage++;
            renderNounPage(currentNounPage);
            nounTitleEl?.focus();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
    adjectivePrevBtn?.addEventListener("click", () => {
        if (currentAdjectivePage > 0) {
            currentAdjectivePage--;
            renderAdjectivePage(currentAdjectivePage);
            adjectiveTitleEl?.focus();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
    adjectiveNextBtn?.addEventListener("click", () => {
        const lastPage = (typeof adjektivGrammarPages !== "undefined" ? adjektivGrammarPages.length : 1) - 1;
        if (currentAdjectivePage < lastPage) {
            currentAdjectivePage++;
            renderAdjectivePage(currentAdjectivePage);
            adjectiveTitleEl?.focus();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
    verbPrevBtn?.addEventListener("click", () => {
        if (currentVerbPage > 0) {
            currentVerbPage--;
            renderVerbPage(currentVerbPage);
            verbTitleEl?.focus();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
    verbNextBtn?.addEventListener("click", () => {
        const lastPage = (typeof verbumGrammarPages !== "undefined" ? verbumGrammarPages.length : 1) - 1;
        if (currentVerbPage < lastPage) {
            currentVerbPage++;
            renderVerbPage(currentVerbPage);
            verbTitleEl?.focus();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });

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
        setHomePrivacyVisibility(false);

        // Hide other sections
        if (skriveguideEl) skriveguideEl.style.display = "none";
        if (studyModeEl)   studyModeEl.style.display   = "none";
        if (homeWelcome)   homeWelcome.style.display   = "none";
        if (startQuizBtn)  startQuizBtn.style.display  = "none";
        grammarSelectionEl?.classList.add("is-hidden");
        adverbLessonEl?.classList.add("is-hidden");
        nounLessonEl?.classList.add("is-hidden");
        adjectiveLessonEl?.classList.add("is-hidden");
        verbLessonEl?.classList.add("is-hidden");
        if (mainButtons) mainButtons.style.display = "none";

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
    // Service Worker — disable local caching during development and register in production
    // ================================================================
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            const localDevelopmentHosts = new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1"]);

            if (localDevelopmentHosts.has(window.location.hostname)) {
                const wasControlled = Boolean(navigator.serviceWorker.controller);

                // Remove older registrations/caches so local servers always serve current files.
                Promise.all([
                    navigator.serviceWorker.getRegistrations().then(registrations =>
                        Promise.all(registrations.map(registration => registration.unregister()))
                    ),
                    caches.keys().then(cacheNames =>
                        Promise.all(
                            cacheNames
                                .filter(cacheName => cacheName.startsWith("dk-vocab-"))
                                .map(cacheName => caches.delete(cacheName))
                        )
                    )
                ])
                    .then(() => {
                        console.log("Local development: service worker cache disabled.");

                        // A worker controlling this load releases the page only after a reload.
                        if (wasControlled && !sessionStorage.getItem("dk-vocab-dev-cache-reset")) {
                            sessionStorage.setItem("dk-vocab-dev-cache-reset", "true");
                            window.location.reload();
                            return;
                        }

                        sessionStorage.removeItem("dk-vocab-dev-cache-reset");
                    })
                    .catch(err => console.error("Local cache cleanup failed:", err));
                return;
            }

            navigator.serviceWorker
                .register("./sw.js", { scope: "./" })
                .then(reg => console.log("SW registered:", reg.scope))
                .catch(err => console.error("SW registration failed:", err));
        });
    }
});
