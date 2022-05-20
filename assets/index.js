let menubar= document.getElementById("menu");
let menulist= document.getElementById("jsmenulist");
let lix = document.getElementById("lix");

menubar.addEventListener("click",()=>{
    menulist.classList.add("jsmenulist") ;
})


lix.addEventListener("click",()=>{
    menulist.classList.remove("jsmenulist") ;
})
