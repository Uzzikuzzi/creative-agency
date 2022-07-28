// services page first section
let opar = document.getElementsByClassName("services-main")[0];
opar.addEventListener("mousemove", function (event) { parallaxedd(event); });
function parallaxedd(e) {
    var amountMovedX = (e.clientX * -0.3 / 12);
    var amountMovedY = (e.clientY * -0.2 / 12);
    var combo1X = (e.clientX * -0.2 / 10);
    var combo1Y = (e.clientY * -0.1 / 10);
    var combo8X = (e.clientX * -0.3 / 10);
    var combo8Y = (e.clientY * -0.2 / 10);
    var combo4X = (e.clientX * -0.2 / 10);
    var combo4Y = (e.clientY * -0.3 / 10);
    var x = document.getElementsByClassName("ani-card1");
    var y = document.getElementsByClassName("ani-card2");
    var z = document.getElementsByClassName("ani-card3");
    var c1 = document.getElementsByClassName("ani-card4");
    var c8 = document.getElementsByClassName("ani-card5");
    var c4 = document.getElementsByClassName("ani-card6");
    var c6 = document.getElementsByClassName("ani-card7");
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
    for (i = 0; i < c6.length; i++) {
        c6[i].style.transform = 'translate(' + amountMovedY + 'px,' + amountMovedX + 'px)'
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