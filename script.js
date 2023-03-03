const firstName = document.querySelector("#first_name");
const firstNameError = document.querySelector("#first_name-error");
const userEmail = document.getElementById("user_email");
const userEmailError = document.querySelector("#user_email-error");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password-error");
const lastName = document.getElementById("last_name");
const lastNameError = document.querySelector("#last_name-error");
const phoneNumber = document.getElementById("phone_number");
const phoneNumberError = document.querySelector("#phone_number-error");
const confirmPassword = document.getElementById("confirm_password");
const confirmPasswordError = document.querySelector("#confirm_password-error");



firstName.addEventListener('input', () => {
    if (firstName.value == ""){
        firstNameError.textContent = "*Type in a name with no spaces";
    } else{
        firstNameError.textContent = "";
    }
});

lastName.addEventListener("input", () => {
    if (lastName.value == ""){
        lastNameError.textContent = "*Type in a name with no spaces";
    } else{
        lastNameError.textContent = "";
    }
});

userEmail.addEventListener("input", () => {
    if (userEmail.validity.typeMismatch){
        userEmailError.textContent = "*E.g. you@example.com or you@example.edu.ng";
    } else{
        userEmailError.textContent = "";
    }
});

phoneNumber.addEventListener("input", () => {
    if (phoneNumber.validity.patternMismatch){
        phoneNumberError.textContent = "*Type in a 10 digit number";
    } else{
        phoneNumberError.textContent = "";
    }
})

password.addEventListener("input", () => {
    if (password.validity.patternMismatch) {
        passwordError.textContent = "Minimum of 8 characters, 1 capital letter and 1 Number";
    } else{
        passwordError.textContent = "";
    }
});

confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value !== password.value){
        confirmPasswordError.textContent = "*Passwords do not match";
    } else{
        confirmPasswordError.textContent = "";
    }
});

