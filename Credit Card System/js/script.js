// Baslangic Deyisenler
var calcCenter = document.querySelector("#credit");
var creditPlan = document.querySelector("#creditPlan");
var btnClear=document.querySelector(".btnClear");
var result=document.querySelector(".resultPrice");
// Baslangic Deyisenler

// Hesabla buttonuna basdiqda bas verecek actionlar
calcCenter.addEventListener("submit", function (event) {
    event.preventDefault();
    emptyDiv();
    var data = {
        price: Number(document.querySelector("#price").value),
        month: Number(document.querySelector("#monthly").value),
        percentMonth: Number(document.querySelector("#monthlyPercent").value),
    }
    
    var now=moment();
    var total=data.price+(data.price*((data.month*data.percentMonth)/100));
    var totalCount=total-(Number((total%1).toFixed(1)));
    var monthlyCreditMoney=totalCount/data.month;
    var coins=monthlyCreditMoney%1;
    monthlyCreditMoney-=coins;

    result.classList.remove("d-none");
    result.children[0].innerHTML=totalCount.toFixed()+" "+`<span class="azn">M</span>`

    for(var i=0;i<data.month;i++){
        if(i+1==data.month){
            monthlyCreditMoney+=(Number((coins*data.month).toFixed(0)));
        }
        var div = document.createElement("div");
        div.classList.add("col-lg-3");
        div.classList.add("mb-3");
        div.innerHTML = ` <div class="card">
                      <div class="card-body">
                            <h5 class="card-title">${monthlyCreditMoney} <span class="azn">M</span></h5>
                           <p class="card-text">${now.format('DD-MM-YYYY')}</p>
                          </div>
                      </div> `
        creditPlan.appendChild(div);
        now.add(30, 'days');   
    }
});
// Hesabla buttonuna basdiqda bas verecek actionlar


// Hesabati Temizleme Buttonu
btnClear.addEventListener("click",function(){
    toReset();
});
// Hesabati Temizleme Buttonu

// Buttonlara basmadan inputdaki deyeri deyisdikde her defe silib yeni
// yazilan deyere gore card yaradan funksiya
function emptyDiv(){
   var creditPlanElem=document.querySelectorAll("#creditPlan .col-lg-3");
   var count=creditPlanElem.length;
   for(var i=0;i<count;i++){
    creditPlanElem[i].remove();
   }
}
// Buttonlara basmadan inputdaki deyeri deyisdikde her defe silib yeni
// yazilan deyere gore card yaradan funksiya

// Hesabati Temizleme funksiyasi
function toReset(){
    emptyDiv();
    calcCenter.reset();
    result.classList.add("d-none");
}
// Hesabati Temizleme funksiyasi



