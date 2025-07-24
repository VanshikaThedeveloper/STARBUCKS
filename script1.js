let elm = document.querySelector(".main-menu");
let btn = document.querySelector(".btn")
let main = document.querySelector(".menu")
let order = document.querySelector(".order")
let paymentbtn = document.querySelector(".payment")
let flag = 0;
let thnku = document.querySelector(".tnku")
let amtDisplay = document.getElementById("amt");
let chk = 0;



 btn.addEventListener("click", function(){
    if(flag === 0){
        elm.style.display = "none"
        btn.textContent = "Back"
        order.style.display = "block"
        amtDisplay.textContent = "Nil";
        uncheckAll();
        flag = 1;
    }else{
        elm.style.display = "block"
        btn.textContent = "Order Now"
        order.style.display = "none"
        flag = 0;
    }
})

paymentbtn.addEventListener("click", function(){
    order.style.display = "none";
     thnku.style.display = "flex";
     setTimeout(() => {
        thnku.style.display = "none";
        elm.style.display = "block";
        btn.textContent = "Order Now";
        flag = 0;
    }, 3000);
})


function calculateTotal() {
    let checkboxes = document.querySelectorAll(".met");
    let total = 0;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            let priceElem = checkbox.closest(".coffee-items").querySelector(".price");
            total += parseFloat(priceElem.textContent);
        }
    });

    amtDisplay.textContent = total > 0 ? `$${total.toFixed(2)}` : "Nil";
}

// 📌 Recalculate total when checkboxes change
document.querySelectorAll(".met").forEach((checkbox) => {
    checkbox.addEventListener("change", calculateTotal);
});

// 🧽 Clear all checkboxes
function uncheckAll() {
    document.querySelectorAll(".met").forEach((cb) => {
        cb.checked = false;
    });
}

