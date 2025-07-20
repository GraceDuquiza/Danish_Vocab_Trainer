// ===========================
// Danish Vocab Trainer Reminder
// ===========================

// Save the reminder settings to localStorage and schedule notifications
function saveReminderSettings() {
    const enabled = document.getElementById('reminder-toggle').checked;
    const time = document.getElementById('reminder-time').value || "18:00";
    const dayCheckboxes = document.querySelectorAll('#reminder-days input[type="checkbox"]');
    const selectedDays = [];
    dayCheckboxes.forEach(cb => { if (cb.checked) selectedDays.push(Number(cb.value)); });

    // Save settings to localStorage
    localStorage.setItem('reminderEnabled', enabled);
    localStorage.setItem('reminderTime', time);
    localStorage.setItem('reminderDays', JSON.stringify(selectedDays));

    // If reminders are enabled, request notification permission and schedule
    if (enabled) {
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                scheduleDailyReminder(); // Start the notification interval
                document.getElementById('reminder-status').textContent = 
                    `Reminder set for ${time} on: ${selectedDays.map(d=>["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d]).join(', ')}`;
            } else {
                document.getElementById('reminder-status').textContent = "Notifications are blocked in your browser!";
            }
        });
    } else {
        document.getElementById('reminder-status').textContent = "Reminder turned off.";
        if (window.reminderInterval) clearInterval(window.reminderInterval);
    }
}

// Schedule daily and prep reminders (runs every second)
function scheduleDailyReminder() {
    // Only schedule if permission is granted
    if (Notification.permission !== "granted") return;
    // Avoid multiple intervals
    if (window.reminderInterval) clearInterval(window.reminderInterval);

    // Get settings
    const [hour, minute] = (localStorage.getItem('reminderTime') || "18:00").split(':').map(Number);
    const selectedDays = JSON.parse(localStorage.getItem('reminderDays') || "[]");

    window.reminderInterval = setInterval(() => {
        const enabled = localStorage.getItem('reminderEnabled') === 'true';
        if (!enabled) return;

        const now = new Date();
        const today = now.getDay(); // 0 (Sun) ... 6 (Sat)

        // Main Practice Reminder
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

        // Prep Reminder (30 min before main reminder)
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
                body: "Din praksis begynder om 30 minutter.",
            });
        }
    }, 1000);
}

// On page load: Restore settings and schedule reminders if enabled and allowed
window.addEventListener("DOMContentLoaded", function () {
    const enabled = localStorage.getItem('reminderEnabled') === 'true';
    const time = localStorage.getItem('reminderTime') || "18:00";
    const selectedDays = JSON.parse(localStorage.getItem('reminderDays') || "[]");

    // Set UI state based on saved settings
    document.getElementById('reminder-toggle').checked = enabled;
    document.getElementById('reminder-time').value = time;
    document.querySelectorAll('#reminder-days input[type="checkbox"]').forEach(cb => {
        cb.checked = selectedDays.includes(Number(cb.value));
    });

    // Only auto-schedule if reminders enabled AND notification permission is already granted
    if (enabled && Notification.permission === "granted") {
        scheduleDailyReminder();
        document.getElementById('reminder-status').textContent =
            `Reminder set for ${time} on: ${selectedDays.map(d=>["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d]).join(', ')}`;
    }
    // Attach save handler
    document.getElementById('save-reminder').onclick = saveReminderSettings;
});
