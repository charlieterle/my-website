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

sectionLinks = document.getElementsByClassName("section");

for (section of sectionLinks) {
    section.addEventListener('click', (event) => menuActivate(event));
}