"use strict"

const currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
if(currentAccount){
  const profileInfoUser = document.querySelector(".profile-info-user");
  profileInfoUser.innerHTML = `
    <p class="info-about__nick">${currentAccount.login}</p>
    <div class="info-row">
      <img class="info-about__icon" src="icon/pin 1.svg" alt="">
      <p class="info-about__location">${currentAccount.city}</p>
    </div>
  `;
  const modalP = document.querySelector(".modal-p")
  modalP.innerHTML = `
  <p class="modal-p">Your current city ${currentAccount.city}</p>
  `
}

// profile Модальное окно 
const infoAboutLocation = document.querySelector(".info-about__location");

const showModal = document.querySelector(".info-help__modal");
const overlay = document.querySelector(".overlay");
const modalLocation = document.querySelector(".modal-location")

showModal.addEventListener("click", function () {
  modalLocation.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", function () {
  modalLocation.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

document.addEventListener("keydown", function (event) {
  if (event.key == "Escape" && !modalLocation.classList.contains("hidden")) {
    modalLocation.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  }
});

// Выпадающий список стран 
const modalP = document.querySelector(".modal-p")
const dropdownList = document.querySelector(".dropdown-list")
const modalDropdownButton = document.querySelector(".modal-dropdown-button")
const modalDropdownP = document.querySelector(".modal-dropdown-p")
const itemList = document.querySelectorAll(".item-list")
const itemList1 = document.querySelector(".item-list-1")
const itemList2 = document.querySelector(".item-list-2")
const itemList3 = document.querySelector(".item-list-3")
const continionNewRegion = document.querySelector(".continion-new-region")
const dropdownBtnPosition = document.querySelector(".db-btn-position")
const dropdownListPosition = document.querySelector(".db-list-position")

modalDropdownButton.addEventListener("click", function() {
  dropdownList.classList.toggle("hidden")
  continionNewRegion.classList.toggle("hidden")
})

for(let value of itemList) {
  value.addEventListener("click", function() {
    dropdownList.classList.toggle("hidden")
    continionNewRegion.classList.toggle("hidden")
    continionNewRegion.style.transform = "translate(-50%, 0%)"
    dropdownBtnPosition.style.transform = "translate(-45%, -45%)"
    dropdownListPosition.style.transform = "translate(-45%, -25%)"
  })
}

itemList1.addEventListener("click", function() {
  modalDropdownP.textContent = "Moscow"
  modalP.textContent = "You are shown products with delivery to Moscow"
  infoAboutLocation.textContent = "Moscow"
})
itemList2.addEventListener("click", function() {
  modalDropdownP.textContent = "Tokyo"
  modalP.textContent = "You are shown products with delivery to Tokyo"
  infoAboutLocation.textContent = "Tokyo"
})
itemList3.addEventListener("click", function() {
  modalDropdownP.textContent = "London"
  modalP.textContent = "You are shown products with delivery to London"
  infoAboutLocation.textContent = "London"
})
continionNewRegion.addEventListener("click", function() {
  modalLocation.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
})