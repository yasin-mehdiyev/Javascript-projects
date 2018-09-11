var register=document.querySelector("#register");
var requireds=document.querySelectorAll("#register .required");
var count=requireds.length-1;
var count_len=0;

// Blur edende input bos olmamalidir
for(var i=0;i<requireds.length;i++){
    requireds[i].addEventListener("blur",function(){
        if(this.value=="" && this.nextElementSibling==null){
         this.parentNode.append(errorMessg(this.getAttribute(("data-err"))));
        }
    })
}
// Blur edende input bos olmamalidir


// Inputa yazdiqda eror mesaji silinmelidir
for(var i=0;i<requireds.length;i++){
    requireds[i].addEventListener("keyup",function(){
        if(this.value!="" && this.nextElementSibling!=null){
            this.nextElementSibling.remove();
        }
    })
}
// Inputa yazdiqda eror mesaji silinmelidir

// Inputa boyuk herf daxil edilbmi? deye daxil edilen boyuk herfin sayi tapilir
requireds[count-1].addEventListener("keypress",function(e){
    if(e.which>64 && e.which<97){
        count_len++;
    }
})
// Inputa boyuk herf daxil edilbmi? deye daxil edilen boyuk herfin sayi tapilir


// Burda ise Boyuk herf ve minimum 6 xarakter olmasi yoxlanilir
requireds[count-1].addEventListener("keyup",function(){
    if(count_len<1 && requireds[count-1].nextElementSibling==null){
        requireds[count-1].parentNode.append(errorUpper(requireds[count-1].getAttribute(("data-upper"))));
    }
    if(requireds[count-1].value.length<6 && requireds[count-1].nextElementSibling==null){
        requireds[count-1].parentNode.append(erorSymbl(requireds[count-1].getAttribute(("data-symb"))));
    }
})
// Burda ise Boyuk herf ve minimum 6 xarakter olmasi yoxlanilir

// Burda ise Password ile password_confirmin eyni oldugu yoxlanilir
requireds[count].addEventListener("keyup",function(){
    if(requireds[count].value!="" && requireds[count-1].value!="" && requireds[count].value!=requireds[count-1].value && requireds[count].nextElementSibling==null){
        requireds[count].parentNode.append(errorMessg(requireds[count].getAttribute(("data-err"))));
     }
});
// Burda ise Password ile password_confirmin eyni oldugu yoxlanilir



// Qeydiyyat buttonuna basanda inputlarin bos olmasini yoxlayir ve butun neticeler
// dogrudursa ekrana tebrikler alerti verir sonra ise butun inputlari reset edir

register.addEventListener("submit",function(ev){
    var num=0;
    ev.preventDefault();
    for(var i=0;i<requireds.length;i++){
        if(requireds[i].value=="" && requireds[i].nextElementSibling==null){
            requireds[i].parentNode.append(errorMessg(requireds[i].getAttribute(("data-err"))));
        }
        else if(requireds[i].value!=""){
            num++;
            if(num==4){
                alert("Tebrikler");
                register.reset();
            }
        }
    }   
 })
 
 // Qeydiyyat buttonuna basanda inputlarin bos olmasini yoxlayir ve butun neticeler
// dogrudursa ekrana tebrikler alerti verir sonra ise butun inputlari reset edir


//  Error Funksiyalarimiz

// Minimum 6 xarakter olmalidir
 function erorSymbl(errorcharacter){
    var syb=document.createElement("small");
    syb.innerText=errorcharacter;
    syb.classList.add("form-text");
    syb.classList.add("text-danger");
    return syb;
 }
 // Minimum 6 xarakter olmalidir

// Bos input olmamalidir
function errorMessg(erormssg){
   var sml=document.createElement("small");
   sml.innerText=erormssg;
   sml.classList.add("form-text");
   sml.classList.add("text-danger");
   return sml;
}
// Bos input olmamalidir

// 1 dene boyuk simvol olmalidir

function errorUpper(errorupper){
    var upp=document.createElement("small");
    upp.innerText=errorupper;
    upp.classList.add("form-text");
    upp.classList.add("text-danger");
    return upp;
 }

 // 1 dene boyuk simvol olmalidir

 //  Error Funksiyalarimiz
