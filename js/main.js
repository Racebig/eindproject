
//DOM Manipulation

const DOM = (() => {

    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");

    const displayRegisterForm = () => {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }

    const displayLoginForm = () => {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
        loginForm.style.marginTop = "150px";
    }

    const closeForms = () => {
        registerForm.style.display = "none";
        loginForm.style.display = "none";
    }


    return {
        displayRegisterForm,
        displayLoginForm,
        closeForms
    }

})();