window.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    window.currentList = []; // ✅ make accessible to quiz.js

    const studyDanishEl = document.getElementById("study-danish-word");
    const englishEl = document.getElementById("english-meaning");
    const exampleEl = document.getElementById("example-sentence");
    const nextBtn = document.getElementById("next-btn");
    const categorySelect = document.getElementById("category-select");

    function displayWord(i) {
    const word = currentList[i];
    studyDanishEl.textContent = word.danish;
    englishEl.textContent = word.english;

    if (word.example) {
        exampleEl.style.display = "block"; // ✅ Make sure it's visible
        exampleEl.textContent = word.example;
    } else {
        exampleEl.style.display = "none"; // hide if no example
    }
}


    function loadCategory(category) {
        index = 0;

        switch (category) {
            case 'verber':
                currentList = verber;
                break;
            case 'substantiver':
                currentList = substantiver;
                break;
            case 'adjektiver':
                currentList = adjektiver;
                break;
            case 'adverbKonjunktion':
                currentList = adverbKonjunktion;
                break;
            default:
                currentList = [];
        }

        window.currentList = currentList; // ✅ sync with quiz.js
        displayWord(index);
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % currentList.length;
        displayWord(index);
    });

    categorySelect.addEventListener("change", (e) => {
        loadCategory(e.target.value);
    });

        // ✅ Call it directly
        loadCategory(categorySelect.value);

        document.getElementById("exit-app-btn").addEventListener("click", () => {
    // Clear the page to simulate exiting
    document.body.innerHTML = `
        <div class="exit-screen">
        <h1>Tak og farvel! 👋</h1>
        <p>Appen er nu lukket.</p>
        <button onclick="location.reload()">🔁 Genstart</button>
        </div>
    `;
    });



});
