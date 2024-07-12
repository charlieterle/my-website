// Removes and adds "responsive" class to the topnav element when menu opener is clicked
function toggleMenu() {
    let topnav = document.getElementById("topnav");
    if (topnav.classList.contains("responsive")) {
        topnav.classList.remove("responsive");
    }
    else {
        topnav.classList.add("responsive");
    }
}

// Adds the *-active class to the classlist of the target element
// Used to keep track of what part of the page a user has navigated to
// Also used to keep track of which language is active at the time
function activate(target, className) {
    const activeClass = className + "-active";
    const previous = document.getElementsByClassName(activeClass);
    for (el of previous) {
        el.classList.remove(activeClass);
    }
    target.classList.add(activeClass);
}

// Update the text content of each internationalized element to selected language
function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        element.textContent = langData[key];
    });
}

// Set language preference in local storage
function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}

// Get language data from .JSON files
async function fetchLanguageData(lang) {
    const response = await fetch(`text/${lang}.json`);
    return response.json();
}

// Main function that is called when user switches the language of the page
async function changeLanguage(lang) {
    setLanguagePreference(lang);
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
    // If needed, toggle stylesheets here (see https://medium.com/@nohanabil/building-a-multilingual-static-website-a-step-by-step-guide-7af238cc8505)
}

// On page load, call updateContent() to initialize the page with the preferred language of the user
window.addEventListener("DOMContentLoaded", async () => {
    const preferredLanguage = localStorage.getItem('language') || 'en';
    const langData = await fetchLanguageData(preferredLanguage);
    updateContent(langData);
    }
)

// Event listener to change the language of the page
const langButtons = document.getElementsByClassName("lang-select");
for (let i = 0; i < langButtons.length; i++) {
    langButtons[i].addEventListener('click', () => changeLanguage(langButtons[i].getAttribute("language")));
}

// Event listener to open the menu toggle for screens < 600px
document.getElementById("open-menu").addEventListener('click', toggleMenu);

// Add event listeners to the menu elements
let els = document.getElementsByClassName("section-select");
for (el of els) {
    el.addEventListener('click', (event) => activate(event.target, "section-select"))
}