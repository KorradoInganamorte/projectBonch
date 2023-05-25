"use strict"

let prices = document.querySelectorAll(".price-p");
let total = 0;

function updateTotal() {
  total = 0; // обнуляем итоговую сумму
  for (let i = 0; i < prices.length; i++) {
    let price = parseFloat(prices[i].textContent.replace("$", ""));
    total += price;
  }
  document.querySelector(".price-p_s").textContent = total + "$";
}

updateTotal(); // вычисляем итоговую сумму при загрузке страницы

document.querySelector(".promo").addEventListener("input", function() {
    let promocode = this.value.trim();
    if (promocode === "FREE25") {
      total *= 0.75;
      document.querySelector(".price-p_s").textContent = total.toFixed(2) + "$";
    }
  });

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

const minusBtns = document.querySelectorAll(".add-button-minus")
const plusBtns = document.querySelectorAll(".add-button-plus")
const addBtns = document.querySelectorAll(".add-button")
const delBtns = document.querySelectorAll(".delete-button")
const addBtnsQuality = document.querySelectorAll(".add-button-quality")



addBtns.forEach(function(addBtn){
  addBtn.addEventListener("click", function(e){
    e.stopPropagation()
  })
})

delBtns.forEach(function(delBtn){
  delBtn.addEventListener("click", function(e){
    e.stopPropagation()
    const card = delBtn.closest(".card-btn")
    const price = card.querySelector(".price-p")
    const cardPrice = parseFloat(price.textContent.replace("$", ""))
    card.remove()
    total -= cardPrice; // вычитаем цену удаленной карточки из итоговой суммы
    updateTotal(); // обновляем итоговую сумму на странице
  })
})

plusBtns.forEach(function(plusBtn){
  plusBtn.addEventListener("click", function(event){
    const price = plusBtn.closest(".card-btn");
    let priceP = parseFloat(price.querySelector(".price-p").textContent)
    console.log(priceP);
    let priceCur = parseFloat(priceP)
    console.log(priceCur);
    const addBtnQuality = event.currentTarget.parentNode.querySelector(".add-button-quality");
    if(parseFloat(addBtnQuality.textContent) <= 14){
      parseFloat(addBtnQuality.textContent++);
    }
    (document.querySelector(".price-p_s").textContent = priceCur * addBtnQuality.textContent + "$");
  })
})

minusBtns.forEach(function(minusBtn){
  minusBtn.addEventListener("click", function(event){
    const price = minusBtn.closest(".card-btn");
    const priceP = price.querySelector(".price-p")
    let priceCur = parseFloat(priceP.textContent.replace("$", ""))
    const addBtnQuality = event.currentTarget.parentNode.querySelector(".add-button-quality");
    if(parseFloat(addBtnQuality.textContent) >= 2){
      parseFloat(addBtnQuality.textContent--);
    }
    (document.querySelector(".price-p_s").textContent = priceCur * addBtnQuality.textContent + "$");
  })
})


// интерактив выпадающей карточки
function toggleColor(btn) {
  // получаем все кнопки с классом card-info-click-btn
  const cardInfoClickBtn = document.querySelectorAll('.card-info-click-btn');
  // проходимся по каждой кнопке и добавляем/удаляем класс
  cardInfoClickBtn.forEach(button => {
    if (button === btn) {
      button.classList.add('card-info-click-btn-color');
    } else {
      button.classList.remove('card-info-click-btn-color');
    }
  });
}

// получаем все кнопки
const colorButtons = document.querySelectorAll('.card-info-click-btn');
// для каждой кнопки добавляем обработчик клика
colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    toggleColor(button);
  });
});