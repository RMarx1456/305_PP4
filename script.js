/**
 * TODO: Create a Validation for if the user does NOT agree to the terms, the form will not submit.
 * TODO: Create validation for improper email format.
 * TODO: Create validation if password is shorter than 8 characters. You might have to remove the minlength attribute inside the input tag.
 */

// Validating the fields
document.getElementById("account-validation").onsubmit = function() {

    // Validation
    let isValid = true;
    clearErrors();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirm-password").value;

    if (name == "") {
        document.getElementById("err-name").style.display = "block";
        isValid = false;
    }

    if (email == "") {
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    }

    if (pass == "") {
        document.getElementById("err-password").style.display = "block";
        isValid = false;
    }

    if (confirmPass == "") {
        document.getElementById("err-confirm-pass").style.display = "block";
        isValid = false;
    }

    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}