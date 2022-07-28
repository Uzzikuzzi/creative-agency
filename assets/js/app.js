
let bc = document.getElementsByClassName("home-sec-4")[0];
bc.addEventListener("mousemove", function (event) { parallaxed(event); });
function parallaxed(e) {
    var amountMovedX = (e.clientX * -0.3 / 12);
    var amountMovedY = (e.clientY * -0.2 / 12);
    var combo1X = (e.clientX * -0.2 / 10);
    var combo1Y = (e.clientY * -0.1 / 10);
    var combo8X = (e.clientX * -0.3 / 10);
    var combo8Y = (e.clientY * -0.2 / 10);
    var combo4X = (e.clientX * -0.2 / 10);
    var combo4Y = (e.clientY * -0.3 / 10);
    var x = document.getElementsByClassName("anicard3");
    var y = document.getElementsByClassName("anicard4");
    var z = document.getElementsByClassName("anicard5");
    var c1 = document.getElementsByClassName("anicard6");
    var c8 = document.getElementsByClassName("anicard7");
    var c4 = document.getElementsByClassName("anicard8");
    
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
    }
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
    }
    var i;
    for (i = 0; i < z.length; i++) {
        z[i].style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
    }

    var i;
    for (i = 0; i < c1.length; i++) {
        c1[i].style.transform = 'translate(' + combo1Y + 'px,' + combo1X + 'px)'
    }

    var i;
    for (i = 0; i < c8.length; i++) {
        c8[i].style.transform = 'translate(' + combo8Y + 'px,' + combo8X + 'px)'
    }

    var i;
    for (i = 0; i < c4.length; i++) {
        c4[i].style.transform = 'translate(' + combo4X + 'px,' + combo4Y + 'px)'
    }

}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("h-active");
  navMenu.classList.toggle("n-active");
});

document.querySelectorAll(".mm-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("h-active");
    navMenu.classList.remove("n-active");
  })
);

