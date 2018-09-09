 var list=document.querySelectorAll(".accordion .item .title");

 
 

 for(var i=0;i<list.length;i++){
     list[i].addEventListener("click",function(){

        var active=document.querySelector(".accordion .item.active");

        if(active!=null && active!=this.parentNode){
            active.classList.remove("active");
            active.children[1].style.maxHeight=null;
            active.children[0].children[1].classList.replace("fa-minus","fa-plus");
        }

        this.parentNode.classList.toggle("active");

        if(this.children[1].classList.contains("fa-plus")){
            this.children[1].classList.replace("fa-plus","fa-minus");
        }else{
            this.children[1].classList.replace("fa-minus","fa-plus");
        }

        if(this.parentNode.children[1].style.maxHeight==""){
            this.parentNode.children[1].style.maxHeight=this.parentNode.children[1].scrollHeight+"px";
        }
        else{
            this.parentNode.children[1].style.maxHeight=null;
        }
     });
 }
