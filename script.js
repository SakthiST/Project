const Menu = document.querySelector(".click")
const Nav = document.querySelector(".Nav_bar2")


Menu.addEventListener("click", () => {

    if (Nav.classList.contains("Menu_on")) {
        Nav.classList.remove("Menu_on");
        Nav.classList.add("Menu_off");
    }
    else {
        Nav.classList.remove("Menu_off");
        Nav.classList.add("Menu_on");

    }

})

