let elm = document.querySelector(".main-menu");
let btn = document.querySelector(".btn")
let main = document.querySelector(".menu")
let order = document.querySelector(".order")
let paymentbtn = document.querySelector(".payment")
let flag = 0;
let thnku = document.querySelector(".tnku")
let chk = 0;



 btn.addEventListener("click", function(){
    if(flag === 0){
        elm.style.display = "none"
        btn.textContent = "Back"
        order.style.display = "block"
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
})

