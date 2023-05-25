"use strict"

function changeButton(button) {
    const card = button.parentNode;
    const date = card.querySelector('.data-p');
    
    if (button.classList.contains('card-button-order')) {
      button.classList.remove('card-button-order');
      button.classList.add('card-button_t');
      button.innerHTML = '<img class="me-1" src="icon/location.svg" alt="">Tracked';
      date.innerHTML = 'Tracked since ' + getCurrentDate();
    } else {
      button.classList.remove('card-button_t');
      button.classList.add('card-button-order');
      button.innerHTML = '<img class="me-1" src="icon/location.svg" alt="">Track location';
      date.innerHTML = 'The order is made 17/02/23';
    }
  }
  
  function getCurrentDate() {
    var today = new Date();
    var day = `${today.getDate()}`.padStart(2, 0);
    var month = `${today.getMonth() + 1}`.padStart(2, 0);
    var year = today.getFullYear();
    
    return day + '/' + month + '/' + year;
  }