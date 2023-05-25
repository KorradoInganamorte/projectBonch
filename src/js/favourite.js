// delete
const delBtns = document.querySelectorAll(".delete-button")

delBtns.forEach(function(delBtn){
    delBtn.addEventListener("click", function(e){
      e.stopPropagation()
      const card = delBtn.closest(".card-btn")
      card.remove()
    })
  })


// Информация о товаре при нажатии на него
const overlay = document.querySelector(".overlay");
const cardBtn =  document.querySelectorAll(".card-btn")
for(let value of cardBtn) {
    value.addEventListener("click", function () {
        document.querySelector(".card-info-click").classList.toggle("hidden")
        overlay.classList.toggle("hidden");
    });
    
    overlay.addEventListener("click", function () {
        document.querySelector(".card-info-click").classList.toggle("hidden")
        overlay.classList.toggle("hidden");
    });
    
    document.addEventListener("keydown", function (event) {
        if (event.key == "Escape" && !value.classList.contains("hidden")) {
        document.querySelector(".card-info-click").classList.toggle("hidden")
        overlay.classList.toggle("hidden");
        }
    });
}