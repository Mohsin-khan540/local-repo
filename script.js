let bdy=document.querySelector("body")
let inner=document.querySelector(".inner")
let mode="dark";
inner.addEventListener("click",()=>{
    if(mode=="dark"){
        mode="light"
        bdy.style.backgroundColor="white";
    }
    else{
        mode="dark"
         bdy.style.backgroundColor="black";
    }
})