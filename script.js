// =========================
// SELECTION WISH FOR MY SWEET WIFEYYYYYYYY ❤️
// JAVASCRIPT PART 1
// =========================


// Loader Control

window.addEventListener("load", function(){

    const loader = document.getElementById("loader");

    setTimeout(function(){

        loader.style.display = "none";

    }, 2500);


});



// Open Wish Button

const openWish = document.getElementById("openWish");


openWish.addEventListener("click", function(){


    document.querySelector(".wish-section")
    .scrollIntoView({

        behavior:"smooth"

    });


});
