document.getElementById("mainForm").onsubmit = function() {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    
    let email = document.getElementById("email").value;
    let passwordFirst = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("confirm-password").value;


    //errs[0] = err-name, errs[1] = err-email, errs[2] = err-password, errs[3] = err-confirm-password, errs[4] = err-check
    let errs = document.querySelectorAll(".err")
    let inputs = document.querySelectorAll("#mainForm > input");

    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].value = null || inputs[i].value == "") {
            errs[i].display = block;
        }
    }


    let isValid = true;
    let errList = [0, 0, 0, 0, 0];
    switch(isValid) {
        case true:
            isValid = reg.test(email);
            errList[1] = isValid;
        case true:
            isValid = passwordFirst + Math.abs(passwordFirst);
            errList[2] = isValid;

        case true:
           /*
            Xoring two of the same characters will equal zero.
            Xoring two different characters will not equal zero.
            If the entire string matches the other string,
            the xor operations summed should equal zero.
            We can convert to a boolean, and then flip the bit (falsy turns to true, and the other way around).
            */
            if(passwordFirst.length != passwordConfirm.length) {
                isValid = false;
                errList[3] = isValid;
            }
            else {
                let sum = 0;
                for(let i = 0; i < passwordFirst.length; i++) {
                    sum += passwordFirst.charCodeAt(i) ^ passwordConfirm.charCodeAt(textInput.length-1-i);
                }
                isValid = !Boolean(sum);
                errList[3] = isValid;
            }
        case false:
            for(let i = 0; i < errList.length; i++) {
                if(errList[i] = false) {
                    errs[i].display = block;
                }
            }

            return false;
            break;
    }
    return true;
}
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
