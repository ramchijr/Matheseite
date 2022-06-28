/* Aufgabe:
  Fügen Sie die notwendigen Selektoren für
  firstname, lastname, mobile, password2
*/

const form = document.getElementById('form');
const email = document.getElementById('email');
const nachname = document.getElementById('nachname');
const vorname = document.getElementById('vorname');
const telefonnummer = document.getElementById('telefonnummer');
const passwort = document.getElementById('passwort');
const geburtsdatum = document.getElementById('geburtsdatum');

// Event listeners
form.addEventListener('submit', function (e) {
    //https://www.w3schools.com/jsref/event_preventdefault.asp
    e.preventDefault();
    //First validate form
    validateForm();
});

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
}

// Check first name
function checkFirstname(input, min, max) {
    const regex = /^[a-z ,.'-]+$/i;
    if (regex.test(input.value.trim()) && checkLength(input, min, max)) {
        showSuccess(input);
    } else {
        showError(
            input,
            'Firstname must contain 3 to 15 letters'
        );
    }
}

// Check last name
function checkLastname(input, min, max) {
    const regex = /^[A-Za-z]+$/;
    if (regex.test(input.value.trim()) && checkLength(input, min, max)) {
        showSuccess(input);
    } else {
        showError(
            input,
            'Lastname must contain 3 to 15 letters'
        );
    }
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

// Check phone is valid
function checkPhone(input) {
    const regex = /^\d{10}$/;
    if (regex.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Number is not valid');
    }
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
        return false;
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
        return false;
    } else {
        showSuccess(input);
        return true;
    }
}

// Check Date is valid
function checkDate(input) {
    const regex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(0[1-9]|1[1-9]|2[1-9])$/;
    if (regex.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Use this format dd/mm/yy.');
    }
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


function validateForm() {
    checkLength(passwort, 6, 25);
    checkFirstname(vorname, 3, 15);
    checkLastname(nachname, 3, 15);
    checkPhone(telefonnummer);
    checkEmail(email);
    checkDate(geburtsdatum);
}

function validateInputs() {
    if (!checkRequired([vorname, nachname, email, telefonnummer, passwort, geburtsdatum])) {
        validateForm();
    }
}