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
// =========================
// SURPRISE BUTTON
// JAVASCRIPT PART 2
// =========================


const surpriseBtn = document.getElementById("surpriseBtn");

const surpriseMessage = document.getElementById("surpriseMessage");



surpriseBtn.addEventListener("click", function(){


    if(surpriseMessage.style.display === "block"){


        surpriseMessage.style.display = "none";

        surpriseBtn.innerHTML = "Open Surprise 💖";


    }

    else{


        surpriseMessage.style.display = "block";

        surpriseBtn.innerHTML = "Close Surprise ❤️";


        surpriseMessage.scrollIntoView({

            behavior:"smooth"

        });


    }


});
