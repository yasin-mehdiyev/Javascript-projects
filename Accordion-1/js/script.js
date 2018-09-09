// // List-Checked-Times

// var city=document.querySelectorAll(".cities li");

// for(var i=0;i<city.length;i++){
//     city[i].addEventListener("click",function(){
//        if(this.children[0].classList.contains("fa-times")){
//            this.children[0].classList.remove("fa-times");
//            this.children[0].classList.add("fa-check");
//        }
//        else{
//            this.children[0].classList.remove("fa-check");
//            this.children[0].classList.add("fa-times");
//        }
//    });
// }

// // List-Checked-Times

// //Input Value

// var input=document.querySelector(".inpt input");

// input.addEventListener("keyup",function(){
//         if(this.value<0){
//             this.value=0;
//         }
//         if(this.value>500){
//             this.value=500;
//         }
// })

// //Input Value


//Accordion Menu

var button=document.querySelectorAll(".btnAcc");

for(var i=0;i<button.length;i++){
    button[i].addEventListener("click",function(){
        this.classList.toggle("active");
       var text=this.nextElementSibling;
       if(!text.style.maxHeight){
           text.style.maxHeight=text.scrollHeight+"px";
       }
       else{
          text.style.maxHeight=null;
       }

    })
}



//Accordion Menu