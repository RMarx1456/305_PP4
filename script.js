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
