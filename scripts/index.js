function toggleMenu() {
    let topnav = document.getElementById("topnav");
    if (topnav.classList.contains("responsive")) {
        topnav.classList.remove("responsive");
    }
    else {
        topnav.classList.add("responsive");
    }
}

function menuActivate(e) {
    const next = e.target;
    const previous = document.getElementsByClassName("active")[0];
    previous.className = "";
    next.className = "active";
}

const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");
const projectsLink = document.getElementById("projects-link");

aboutLink.addEventListener('click', (event) => menuActivate(event));
contactLink.addEventListener('click', (event) => menuActivate(event));
projectsLink.addEventListener('click', (event) => menuActivate(event));