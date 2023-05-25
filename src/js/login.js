const account1 = {
    owner: "Korrado",
    surname: "Inganamorte",
    password: 390821,
    city: "Tokyo",
    email: "korradoinganamorte@gmail.com"
}

const account2 = {
    owner: "Dmitri",
    surname: "Rohkov",
    password: 390822,
    city: "Moscow",
    email: "dmitrirohkov@gmail.com"
}

const account3 = {
    owner: "Kamila",
    surname: "Lendovich",
    password: 390823,
    city: "Tokyo",
    email: "kamilalendovich@gmail.com"
}

const account4 = {
    owner: "Jastin",
    surname: "Pure",
    password: 390824,
    city: "London",
    email: "jastinpure@gmail.com"
}

const accounts = [account1, account2, account3, account4]

const btnSuccesLog = document.querySelector('.btn-succes-log') 

const inputlogin = document.querySelector("#login")
const inputPassword = document.querySelector("#passwordlog")

// Создание логина для каждого аккаунта
function createId(accounts){
    accounts.forEach(function(account){
        account.login = (account.owner + " " + account.surname)
    })
}
createId(accounts)

//Кнопка входа в аккаунт
let currentAccount;
btnSuccesLog.addEventListener("click", function(event){
    event.preventDefault()
    currentAccount = accounts.find(function(account){
        return account.login === inputlogin.value
    })
    console.log(currentAccount);
    if(currentAccount && currentAccount.password === Number(inputPassword.value)){
        localStorage.setItem("currentAccount", JSON.stringify(currentAccount));
        window.location.href = "site.html";
      }
})

