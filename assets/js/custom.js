

let mobile_menu_open_status = false;

function toggleStyle(el, prop, style1, style2) {
    if (mobile_menu_open_status) {
        el.style.opacity = "0";
        el.style[prop] = style1;
    } else {
        el.style.opacity = "1"
        el.style[prop] = style2;
    }

}

document.querySelector(".navbar-toggler").addEventListener("click", function (event) {
    document.querySelector(".navbar-toggler").classList.toggle('active');
    document.querySelector(".nav-links.mobile-navigation").classList.toggle('active');


    let menuList = document.querySelectorAll(".mobile-navigation ul li")

    mobile_menu_open_status = !mobile_menu_open_status
    menuList.forEach((element, index) => {
        let startTime = (index + 1) * 60
        let animation_text = `rotateX 300ms ${startTime}ms ease-in-out forwards`
        if (!mobile_menu_open_status) {
            startTime = (menuList.length * 60) / (index + 1)

            animation_text = `reverse_rotate 300ms ${startTime}ms ease-in-out forwards`
        }
        toggleStyle(element, 'animation', animation_text, animation_text);
        toggleStyle(element, 'pointerEvents', "all", "none");
    });
})

var currentYear = new Date().getFullYear();
// Update the span with id="currentYear" with the current year
document.getElementById("currentYear").innerHTML = currentYear;



