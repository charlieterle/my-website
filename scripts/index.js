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

document.getElementById("open-menu").addEventListener('click', toggleMenu);

function activate(e, className) {
    const next = e.target;
    const activeClass = className + "-active";
    const previous = document.getElementsByClassName(activeClass);
    for (el of previous) {
        el.classList.remove(activeClass);
    }
    next.classList.add(activeClass);
}

const activateClasses = ["lang-select", "section-select"];

for (let i = 0; i < activateClasses.length; i++) {
    let els = document.getElementsByClassName(activateClasses[i]);
    for (el of els) {
        el.addEventListener('click', (event) => activate(event, activateClasses[i]))
        console.log(i);
    }
}