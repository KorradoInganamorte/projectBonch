const dropdownsP = document.querySelectorAll(".dropdown-p");
dropdownsP.forEach(function (dropdown) {
  dropdown.addEventListener("click", function (e) {
    e.preventDefault();
    const dropdownContent = dropdown
      .closest(".dropdown")
      .querySelector(".dropdown-content");
    if (dropdownContent !== null) {
      dropdownContent.classList.toggle("hidden");
    } else if (!dropdownContent) {
      const dropsContAll = document.querySelectorAll(".dropdown-content");
      dropsContAll.forEach(function (drop) {
        drop.classList.add("hidden");
      });
    } else if (!dropdownContent) return

    
  });
});

const dropdownLinks = document.querySelectorAll('.dropdown-a');
const statusContainers = document.querySelectorAll('.right-wrapper-container__status');

function setActiveStatusContainer(index) {
    statusContainers.forEach((container, i) => {
      console.log(index, i);
      if (i === index) {
        container.classList.add('right-wrapper-container__status-active');
        container.classList.remove('right-wrapper-container__status-hidden');
      } else {
        container.classList.remove('right-wrapper-container__status-active');
        container.classList.add('right-wrapper-container__status-hidden');
      }
    });
  }
  
dropdownLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const index = parseInt(link.getAttribute('data-index'));
    console.log(index);
    setActiveStatusContainer(index);
  });
});
