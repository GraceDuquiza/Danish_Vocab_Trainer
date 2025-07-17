// reminder.js

function saveReminderSettings() {
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
        `Reminder set for ${time} on: ${selectedDays.map(d=>["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d]).join(', ')}`;
    } else {
        document.getElementById('reminder-status').textContent = "Reminder turned off.";
        if (window.reminderInterval) clearInterval(window.reminderInterval);
    }
}

function scheduleDailyReminder() {
    if (Notification.permission !== "granted") return;
    if (window.reminderInterval) clearInterval(window.reminderInterval);

    const [hour, minute] = (localStorage.getItem('reminderTime') || "18:00").split(':').map(Number);
    const selectedDays = JSON.parse(localStorage.getItem('reminderDays') || "[]");
    window.reminderInterval = setInterval(() => {
        const enabled = localStorage.getItem('reminderEnabled') === 'true';
        if (!enabled) return;
        const now = new Date();
        const today = now.getDay(); // 0 (Sun) ... 6 (Sat)
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
    }, 1000);
}

// On page load, restore settings and start reminder if enabled
window.addEventListener("DOMContentLoaded", function () {
    const enabled = localStorage.getItem('reminderEnabled') === 'true';
    const time = localStorage.getItem('reminderTime') || "18:00";
    const selectedDays = JSON.parse(localStorage.getItem('reminderDays') || "[]");
    document.getElementById('reminder-toggle').checked = enabled;
    document.getElementById('reminder-time').value = time;
    // Set day checkboxes
    document.querySelectorAll('#reminder-days input[type="checkbox"]').forEach(cb => {
        cb.checked = selectedDays.includes(Number(cb.value));
    });
    if (enabled) {
        scheduleDailyReminder();
        document.getElementById('reminder-status').textContent =
        `Reminder set for ${time} on: ${selectedDays.map(d=>["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d]).join(', ')}`;
    }
    document.getElementById('save-reminder').onclick = saveReminderSettings;
});

function scheduleDailyReminder() {
    if (Notification.permission !== "granted") return;
    if (window.reminderInterval) clearInterval(window.reminderInterval);

    const [hour, minute] = (localStorage.getItem('reminderTime') || "18:00").split(':').map(Number);
    const selectedDays = JSON.parse(localStorage.getItem('reminderDays') || "[]");

    window.reminderInterval = setInterval(() => {
        const enabled = localStorage.getItem('reminderEnabled') === 'true';
        if (!enabled) return;

        const now = new Date();
        const today = now.getDay(); // 0 (Sun) ... 6 (Sat)

        // Practice Reminder
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

    // Prep Reminder (30 min before)
    let prepHour = hour;
    let prepMinute = minute - 30;
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