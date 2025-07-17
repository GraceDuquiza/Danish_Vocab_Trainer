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

    document.getElementById('enable-reminder').addEventListener('click', function() {
        requestNotificationPermission(); // from reminder.js
        scheduleDailyReminder(18, 0);   // 6 PM daily
        alert("Reminder set for 18:00 every day!");
    });

    window.addEventListener("DOMContentLoaded", function () {
  // Restore settings on load
    const enabled = localStorage.getItem('reminderEnabled') === 'true';
    const time = localStorage.getItem('reminderTime') || "18:00";
    const selectedDays = JSON.parse(localStorage.getItem('reminderDays') || "[]");

    document.getElementById('reminder-toggle').checked = enabled;
    document.getElementById('reminder-time').value = time;

    document.querySelectorAll('#reminder-days input[type="checkbox"]').forEach(cb => {
        cb.checked = selectedDays.includes(Number(cb.value));
    });

    // Button handler
    document.getElementById('save-reminder').onclick = function () {
        const enabled = document.getElementById('reminder-toggle').checked;
        const time = document.getElementById('reminder-time').value || "18:00";
        const dayCheckboxes = document.querySelectorAll('#reminder-days input[type="checkbox"]');
        const selectedDays = [];
        dayCheckboxes.forEach(cb => { if (cb.checked) selectedDays.push(Number(cb.value)); });

    localStorage.setItem('reminderEnabled', enabled);
    localStorage.setItem('reminderTime', time);
    localStorage.setItem('reminderDays', JSON.stringify(selectedDays));

    if (enabled) {
        Notification.requestPermission();
        scheduleDailyReminder();
        document.getElementById('reminder-status').textContent =
            `Set for ${time} on: ${selectedDays.map(d => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][d]).join(', ')}`;
        } else {
        document.getElementById('reminder-status').textContent = "Reminder turned off.";
        if (window.reminderInterval) clearInterval(window.reminderInterval);
        }
    };

    // Schedule reminders if enabled
    if (enabled) {
        Notification.requestPermission();
        scheduleDailyReminder();
        document.getElementById('reminder-status').textContent =
        `Set for ${time} on: ${selectedDays.map(d => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][d]).join(', ')}`;
    }

    // Reminder logic with 30-min prep
    function scheduleDailyReminder() {
        if (Notification.permission !== "granted") return;
        if (window.reminderInterval) clearInterval(window.reminderInterval);

        const [hour, minute] = (localStorage.getItem('reminderTime') || "18:00").split(':').map(Number);
        const selectedDays = JSON.parse(localStorage.getItem('reminderDays') || "[]");

        window.reminderInterval = setInterval(() => {
        const enabled = localStorage.getItem('reminderEnabled') === 'true';
        if (!enabled) return;
        const now = new Date();
        const today = now.getDay(); // 0=Sun

        // Main practice reminder
        if (
            selectedDays.includes(today) &&
            now.getHours() === hour &&
            now.getMinutes() === minute &&
            now.getSeconds() === 0
        ) {
            new Notification("Tid til at øve dansk!", {
            body: "Åbn Danish Vocab Trainer og øv dine ord for i dag!",
            });
        }

        // Prep reminder 30 minutes before
        let prepHour = hour, prepMinute = minute - 30;
        if (prepMinute < 0) {
            prepMinute += 60;
            prepHour -= 1;
        }
        if (prepHour < 0) prepHour += 24;
        if (
            selectedDays.includes(today) &&
            now.getHours() === prepHour &&
            now.getMinutes() === prepMinute &&
            now.getSeconds() === 0
        ) {
            new Notification("Forberedelse: Snart dansk-træning!", {
            body: "Din praksis begynder om 30 minutter. Find din ordbog og gør dig klar! 🇩🇰",
            });
        }
        }, 1000);
    }
    });

});
