let userEmailLogin = document.getElementById("userEmailLogin");
let userPasswordLogin = document.getElementById("userPasswordLogin");
let loginBtn = document.getElementById("loginBtn");
let checkInput = document.getElementById("checkInput");
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwordAlert");
let allUsers = [];
let currentIndex = 0;


if (JSON.parse(localStorage.getItem("parsonalData") != null)) {
    allUsers = JSON.parse(localStorage.getItem("parsonalData"));
}

function chickValidData() {
    let cond = false;
    for (let i = 0; i < allUsers.length; i++) {
        if (userEmailLogin.value == allUsers[i].email && userPasswordLogin.value == allUsers[i].pass) {
            cond = true;
            break;
        }
    }
    if (cond == true) {
        massageName();
        moveToNextPage();
    } else {
        invalideInput();
    }
}
loginBtn.addEventListener("click", chickValidData);

function moveToNextPage() {
    localStorage.setItem("indexArr",currentIndex)
    loginBtn.href = "home.html";

}

function invalideInput() {
    checkInput.classList.remove("d-none");    
}

function massageName() {
    let cond = false;
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == userEmailLogin.value && allUsers[i].pass == userPasswordLogin.value) {
            cond = true;
            currentIndex = i;
            break;
        }
    }

}

function validationEmail() {
    let emailRejex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRejex.test(userEmailLogin.value)) {
        loginBtn.disabled = "true";
        userEmailLogin.classList.add("is-invalid");
        userEmailLogin.classList.remove("is-valid");
        emailAlert.classList.remove("d-none");
    } else {
        loginBtn.removeAttribute("disabled");
        userEmailLogin.classList.remove("is-invalid");
        userEmailLogin.classList.add("is-valid");
        emailAlert.classList.add("d-none");
    }
}
userEmailLogin.addEventListener("keyup", validationEmail);

function validationPass() {
    var passRejex = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{4,15}$/;
    if (!passRejex.test(userPasswordLogin.value)) {
        loginBtn.disabled = "true";
        userPasswordLogin.classList.add("is-invalid");
        userPasswordLogin.classList.remove("is-valid");
        passwordAlert.classList.remove("d-none");
    } else {
        loginBtn.removeAttribute("disabled");
        userPasswordLogin.classList.remove("is-invalid");
        userPasswordLogin.classList.add("is-valid");
        passwordAlert.classList.add("d-none");
    }
}
userPasswordLogin.addEventListener("keyup", validationPass);




