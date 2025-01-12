let firstNameElement = document.getElementById("firstName");
let lastNameElement = document.getElementById("lastName");
let emailElement = document.getElementById("email");
let passwordElement = document.getElementById("password");

let submitBtnElement = document.getElementById("claim-btn");

let errorIconElements = document.querySelectorAll(".error-icon");
let errorMessageElements = document.querySelectorAll(".error-message");

let firstNameElementValidateFlag = false;
let lastNameElementElementFlag = false;
let passwordFlag = false;
let emailElementFlag = false;

submitBtnElement.addEventListener("click", function (event) {
    event.preventDefault();
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{2,15}$/;

    if (!firstNameElement.value) {
        firstNameElement.classList.add("error-input");
        errorIconElements[0].style.display = "block";
        errorMessageElements[0].innerText = "First Name cannot be empty";
        firstNameElementValidateFlag = false;
    } else if (!usernameRegex.test(firstNameElement.value)) {
        firstNameElement.classList.add("error-input");
        errorIconElements[0].style.display = "block";
        errorMessageElements[0].innerText = "First Name must start with a letter and be 3-16 characters";
        firstNameElementValidateFlag = false;
    } else {
        firstNameElement.classList.remove("error-input");
        errorIconElements[0].style.display = "none";
        errorMessageElements[0].innerText = '';
        firstNameElementValidateFlag = true;
    }

    if (!lastNameElement.value) {
        lastNameElement.classList.add("error-input");
        errorIconElements[1].style.display = "block";
        errorMessageElements[1].innerText = "Last Name cannot be empty";
        lastNameElementElementFlag = false;
    } else if (!usernameRegex.test(lastNameElement.value)) {
        lastNameElement.classList.add("error-input");
        errorIconElements[1].style.display = "block";
        errorMessageElements[1].innerText = "Lasst Name must start with a letter and be 3-16 characters";
        lastNameElementElementFlag = false;
    } else {
        lastNameElement.classList.remove("error-input");
        errorIconElements[1].style.display = "none";
        errorMessageElements[1].innerText = '';
        lastNameElementElementFlag = true;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailElement.value)) {
        emailElement.classList.add("error-input");
        emailElement.setAttribute("placeholder","email@example/com");
        errorIconElements[2].style.display = "block";
        errorMessageElements[2].innerText = "Looks like this is not an email";
        emailElementFlag = false;
    } else {
        emailElement.setAttribute("placeholder","Email Address");
        emailElement.classList.remove("error-input");
        errorIconElements[2].style.display = "none";
        errorMessageElements[2].innerText = '';
        emailElementFlag = true;
    }

    if (!passwordElement.value) {
        passwordElement.classList.add("error-input");
        errorIconElements[3].style.display = "block";
        errorMessageElements[3].innerText = "Password cannot be empty";
        passwordFlag=false;

    } else if (passwordElement.value.length < 8) {
        passwordElement.classList.add("error-input");
        errorIconElements[3].style.display = "block";
        errorMessageElements[3].innerText = "Please Enter Password greter than 8 ";
        passwordFlag = false;
    } else {
        passwordElement.classList.remove("error-input");
        errorIconElements[3].style.display = "none";
        errorMessageElements[3].innerText = '';
        passwordFlag = true;
    }

 
})