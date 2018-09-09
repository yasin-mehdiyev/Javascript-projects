// Sidebar Menu

var open=document.querySelector(".main button");
var close=document.querySelector(".sidebar .close_btn");

open.addEventListener("click",function(){
     document.querySelector(".sidebar").classList.add("open");
     document.querySelector(".main").classList.add("open");
     document.body.style.overflow = "hidden";
     this.style.display="none";
});

close.addEventListener("click",function(){
    document.querySelector(".sidebar").classList.remove("open");
    document.querySelector(".main").classList.remove("open");
    setTimeout(() => {
        document.body.style.overflow = null;
        open.style.display="block";
    }, 900);
});