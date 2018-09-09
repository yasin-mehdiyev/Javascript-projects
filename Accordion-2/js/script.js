//Accordion Menu

var button=document.querySelectorAll(".btnAcc");

for(var i=0;i<button.length;i++){
    button[i].addEventListener("click",function(){
        if(!this.nextElementSibling.classList.contains("show") && !this.classList.contains("active")){
            document.querySelector(".item .text.show").classList.remove("show");
            document.querySelector(".item .btnAcc.active").classList.remove("active");
            this.nextElementSibling.classList.add("show");
            this.classList.add("active");
        }
    })
}

//Accordion Menu