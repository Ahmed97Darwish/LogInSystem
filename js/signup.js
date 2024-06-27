let userNameInput       = document.querySelector("#userNameInput");
let userEmailInput      = document.querySelector("#userEmailInput");
let userPasswordInput   = document.querySelector("#userPasswordInput");
let signUpBtn           = document.querySelector("#signUpBtn");
let allInputs           = document.querySelectorAll("input");
let confirmMsg          = document.querySelector("#confirmMsg");
let logIn               = document.querySelector("#logIn");
let checkInput          = document.querySelector("#checkInput");
let userNameAlert       = document.querySelector("#usernameAlert");
let userPasswordAlert   = document.querySelector("#userPasswordAlert");
let userEmailAlert      = document.querySelector("#userEmailAlert");
let checkExist     = document.querySelector("#accountExistMsg");
let goToLoginPage       = document.querySelector("#goToLoginPage");

let allUsers = [];

if (JSON.parse(localStorage.getItem("parsonalData") != null)) {
    allUsers = JSON.parse(localStorage.getItem("parsonalData"));
}

function displayData() {
    var data = {
        name: userNameInput.value,
        email: userEmailInput.value,
        pass: userPasswordInput.value,
    };
    allUsers.push(data);
    localStorage.setItem("parsonalData", JSON.stringify(allUsers));
}

function signUp() {
    if (userNameInput.value == "" || userEmailInput.value == "" || userPasswordInput.value == "") {
        inpuTempty();
    } else {
        successMassage();
        checkExistMassage();
    }
}
signUpBtn.addEventListener("click", signUp);

function resetData() {
    for (var i = 0; i < input.length; i++) {
        input[i].value = "";
    }
}

function successMassage() {
    confirmMsg.classList.remove("d-none");
    checkInput.classList.add("d-none");
    checkExist.classList.add("d-none");
}

function checkExistMassage() {
    var cond = false;
    for (var i = 0; i < allUsers.length; i++) {
        if (userNameInput.value == allUsers[i].email) {
            cond = true;
            break;
        }
    }
    if (cond == true) {
        confirmMsg.classList.add("d-none");
        checkInput.classList.add("d-none");
        checkExist.classList.remove("d-none");
    }  else {
        displayData();
    }
}

function moveToNextPage() {
    goToLoginPage.href = "index.html";
}
goToLoginPage.addEventListener("click", moveToNextPage);

function inpuTempty() {
    checkInput.classList.remove("d-none");
    confirmMsg.classList.add("d-none");
    checkExist.classList.add("d-none");
}

function validationName() {
    var nameRejex = /^[A-Z][a-z/s]{2,20}(\s?[A-Za-z]{3,10})?$/;
    if (!nameRejex.test(userNameInput.value)) {
        signUpBtn.disabled = "true";
        userNameInput.classList.add("is-invalid");
        userNameInput.classList.remove("is-valid");
        userNameAlert.classList.remove("d-none");
    } else {
        signUpBtn.removeAttribute("disabled");
        userNameInput.classList.remove("is-invalid");
        userNameInput.classList.add("is-valid");
        userNameAlert.classList.add("d-none");
    }
}
userNameInput.addEventListener("keyup", validationName);


function validationEmail() {
    var emailRejex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRejex.test(userEmailInput.value)) {
        signUpBtn.disabled = "true";
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        userEmailAlert.classList.remove("d-none");
    } else {
        signUpBtn.removeAttribute("disabled");
        userEmailInput.classList.remove("is-invalid");
        userEmailInput.classList.add("is-valid");
        userEmailAlert.classList.add("d-none");
    }
}
userEmailInput.addEventListener("keyup", validationEmail);

function validationPass() {
    var passRejex = passwordAlert;
    if (!passRejex.test(userPasswordInput.value)) {
        signUpBtn.disabled = "true";
        userPasswordInput.classList.add("is-invalid");
        userPasswordInput.classList.remove("is-valid");
        userPasswordAlert.classList.remove("d-none");
    } else {
        signUpBtn.removeAttribute("disabled");
        userPasswordInput.classList.remove("is-invalid");
        userPasswordInput.classList.add("is-valid");
        userPasswordAlert.classList.add("d-none");
    }
}
userPasswordInput.addEventListener("keyup", validationPass);


















