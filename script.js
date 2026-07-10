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
// =========================
// MUSIC CONTROL
// JAVASCRIPT PART 3
// =========================


const musicBtn = document.getElementById("musicBtn");


// Yaha baad me apna song file add kar sakte hain

const music = new Audio("music2.mp3");


music.loop = true;


let isPlaying = false;



musicBtn.addEventListener("click", function(){


    if(isPlaying){


        music.pause();

        musicBtn.innerHTML = "🎵 Play Music";


        isPlaying = false;


    }

    else{


        music.play();

        musicBtn.innerHTML = "⏸ Pause Music";


        isPlaying = true;


    }


});



// Button click glow effect

const buttons = document.querySelectorAll("button");


buttons.forEach(function(btn){


    btn.addEventListener("click", function(){


        btn.style.transform = "scale(0.95)";


        setTimeout(function(){


            btn.style.transform = "scale(1)";


        },150);


    });


});
