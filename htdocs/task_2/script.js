const loginForm =
document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit",function(e){

        e.preventDefault();

        alert("Login Successful!");
    });
}

const registerForm =
document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit",function(e){

        e.preventDefault();

        const password =
        document.getElementById("password").value;

        const strongPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{8,}$/;

        if(!strongPassword.test(password)){

            alert(
            "Weak Password!\n\nPassword must contain:\n• 8 characters\n• Uppercase letter\n• Lowercase letter\n• Number\n• Special character");

            return;
        }

        alert("Registration Successful!");
    });
}