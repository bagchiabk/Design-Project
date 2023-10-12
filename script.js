

// FIXED NAVBAR ON SCROLL

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= 90) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}

// IMAGE CHANGE ON CLICK

function watchImage(){
    let watchImage = document.getElementById("image");
    watchImage.src = "images/watch.jpg";
}

function factoryImage(){
    let factoryImage = document.getElementById("image");
    factoryImage.src = "images/factory.jpg"
}

function birdImage(){
    let birdImage = document.getElementById("image");
    birdImage.src = "images/bird.jpg";
}