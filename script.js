/* ==========================
   OPERATION CHAMPION ❤️
   JavaScript - Part 1
========================== */

const loader = document.getElementById("loader");
const typing = document.getElementById("typing");
const revealBtn = document.getElementById("revealBtn");
const secretMessage = document.getElementById("secretMessage");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

const text =
"Congratulations! ❤️";

let i = 0;

/* --------------------------
   Loader
-------------------------- */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.transition = "opacity .8s ease";

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 2000);

});

/* --------------------------
   Typewriter
-------------------------- */

function typeWriter(){

    if(i < text.length){

        typing.textContent += text.charAt(i);

        i++;

        setTimeout(typeWriter,80);

    }

}

setTimeout(typeWriter,2200);

/* --------------------------
   Secret Message
-------------------------- */

revealBtn.addEventListener("click",()=>{

    secretMessage.style.display="block";

    secretMessage.style.animation="fadeUp .8s ease";

    revealBtn.style.display="none";

});

/* --------------------------
   Music Button
-------------------------- */

musicBtn.addEventListener("click",()=>{

    if(bgMusic.paused){

        bgMusic.play();

        musicBtn.innerHTML="🔊";

    }

    else{

        bgMusic.pause();

        musicBtn.innerHTML="🎵";

    }

});
