// Nav_Menu_Script
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


// Nav_Script
function barMoving() {
    var scrollValue = window.scrollY
    // console.log(scrollValue)

    const Nav_bar = document.querySelector(".Nav_bar")
    const i = document.querySelectorAll(".i")

    if (scrollValue >= 520) {
        Nav_bar.classList.add("add1")

        i.forEach((value) => {
            value.classList.add("add2")
        })

    } else {
        Nav_bar.classList.remove("add1")


        i.forEach((value) => {
            value.classList.remove("add2")
        })

    }

}

window.addEventListener("scroll", barMoving)




//firstPage_Time_Script
const b_Days = document.querySelector(".b_Days")
const b_Hours = document.querySelector(".b_Hours")
const b_Minutes = document.querySelector(".b_Minutes")
const b_seconds = document.querySelector(".b_seconds")


function timer() {
    const currentDate = new Date();
    const widdingDate = new Date('November 29 2023 00:00:00');
    // console.log(widdingDate)
    // 1000ms = 1s;
    // 60s = 1min;
    // 60min = 1hr;
    // 24hr = 1day;
    // 30days = 1month;
    // 12months = 1year;
    const diff = widdingDate - currentDate;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);
    b_Days.innerText = d >= 10 ? "-" + d : "-0" + d;
    b_Hours.innerText = h >= 10 ? h : "0" + h;
    b_Minutes.innerText = m >= 10 ? m : "0" + m;
    b_seconds.innerText = s >= 10 ? s : "0" + s;
}

const run = setInterval(() => {
    timer()
}, 1000)


//NinePage_imagesClick_Script
const image = document.querySelectorAll(".image");
const Outer_black = document.querySelector(".Outer_black")
const cancel = document.querySelector(".cancel")

// console.log(image)
// console.log(Outer_black)

image.forEach((value) => {

    value.addEventListener("click", () => {
        Outer_black.style.height = "90%";
        Outer_black.style.width = "90%"
        Outer_black.style.opacity = "1"

        const copy = value.cloneNode();

        copy.style.height = "400px";
        copy.style.width = "90%";
        copy.style.cursor = "zoom-out";

        Outer_black.appendChild(copy)




        copy.addEventListener("click", () => {
            copy.style.height = "400px";
            copy.style.width = "80%";

            copy.addEventListener("click", () => {
                copy.style.height = "400px";
                copy.style.width = "60%";
                copy.style.cursor = "zoom-in";
            })
        })

        cancel.addEventListener("click", () => {
            Outer_black.style.height = "0";
            Outer_black.style.width = "0"
            Outer_black.style.opacity = "0"
            Outer_black.removeChild(copy)
        })

    })


})