const currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
if(currentAccount){
  const profileInfoUser = document.querySelector(".setting-info-col-medium");
  const infoSPChange = document.querySelector(".info-s-p-change")
  const infoSPEmail = document.querySelector(".info-s-p_email")
  profileInfoUser.innerHTML = `
    <div class="setting-info-col setting-info-col-medium">
        <p class="setting-info-col-p_medium">${currentAccount.login}</p>
        <p class="setting-info-col-p_medium">+7**********</p>
        <p class="setting-info-col-p_medium">${currentAccount.email}</p>
    </div>
  `;
  infoSPChange.innerHTML = `
    <p class="info-s-p info-s-p-change">Your region is ${currentAccount.city}</p>
  `
  infoSPEmail.innerHTML = `
    <p class="info-s-p_email">${currentAccount.email}</p>
  `
}

const moreElBtns = document.querySelectorAll(".more-el-btn")
moreElBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        btn.classList.toggle("bgblue")
    })
})