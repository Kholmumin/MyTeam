var elCardBtn = document.querySelectorAll(".meet__btn");

elCardBtn.forEach(function(btn){
    btn.addEventListener("click",function(){
        btn.parentElement.classList.toggle("meet__box--active")
    });
})