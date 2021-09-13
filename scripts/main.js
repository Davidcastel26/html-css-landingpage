let mobileBtn = document.getElementById('mobile-cta');
let nav = document.querySelector('nav');
let mobileBtnExit = document.getElementById("mobile-exit");
    
mobileBtn.addEventListener('click', function(){
    nav.classList.add('menu-btn')
    console.log("yo estoy aqui")
})

mobileBtnExit.addEventListener('click', function (){
    nav.classList.remove('menu-btn')
})