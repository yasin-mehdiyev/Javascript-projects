//Tab Menu
var list=document.querySelectorAll(".menu li");

for(var i=0;i<list.length;i++){
    list[i].addEventListener("click",function(){
        if(!this.classList.contains("active")){

            //menu hissesinin activ clasina gore dinamiklesdirilmesi hissesi
            document.querySelector(".menu li.active").classList.remove("active");
            this.classList.add("active");

            //content hisse ile menu hissesinin bir-biri ile danisma hissesi
            document.querySelector(".content .item.active").classList.remove("active");
            document.querySelector("#" + this.getAttribute("data-target")).classList.add("active");
        }     
    });
}