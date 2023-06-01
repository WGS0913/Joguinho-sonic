const sonic = document.querySelector(".sonic");
const eggaman = document.querySelector(".eggman");
const fundo = document.querySelector(".fundo")

const jump = () => {
    sonic.classList.add("jump");
    sonic.src = "./Arquivos/Sonic-Jump.gif";

    setTimeout(() =>{
       sonic.classList.remove("jump")
       sonic.src = "./Arquivos/Sonic.gif";
    },900)
};

const loop = setInterval( ()=>{
    const eggmanPosition = eggaman.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace("px", "");
   
    if( eggmanPosition < 110 && eggmanPosition > 0  && sonicPosition < 220){
        eggaman.style.animation = "none";
        eggaman.style.left = `${eggmanPosition}px`; 

        sonic.style.animation = "none";
        sonic.src = "./Arquivos/Sonic-Loss.gif"
        sonic.style.width = "240px";

        fundo.src = "./Arquivos/GameoverSMB-1.png";
    }
},10)

document.addEventListener("click", jump);