let ham = document.querySelector(".ham");
let bar = document.querySelector(".bar")
let flag = 0;

ham.addEventListener("click", function(){
    if(flag === 0){
    bar.style.display = 'Block';
    flag = 1;
    }else{
        bar.style.display = 'none'; 
        flag = 0
    }

})