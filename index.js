document.addEventListener("DOMContentLoaded", function() {
    function showLoginForm() {
        document.getElementById("signup-form").style.display = "none";
        document.getElementById("login-form").style.display = "block";
        document.querySelector(".btn-login").style.backgroundColor = "blue";
    }

    function showSignupForm() {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("signup-form").style.display = "block";
        document.querySelector(".btn-signup").style.backgroundColor = "blue";
    }

    function showAlertSignup() {
        alert("Signup done");
    }

    function showAlertLogin() {
        alert("Login done");
    }

    function showLoginFormOnClick() {
        document.getElementById("login-form").style.display = "block";
        document.getElementById("signup-form").style.display = "none";
    }

    document.querySelector(".btn-login").addEventListener("click", showLoginForm);
    document.querySelector(".btn-signup").addEventListener("click", showSignupForm);
    document.querySelector(".btn-signup1").addEventListener("click", showAlertSignup);
    document.querySelector(".btn-login1").addEventListener("click", showAlertLogin);
    document.querySelector("a.login-link").addEventListener("click", showLoginFormOnClick);
});
