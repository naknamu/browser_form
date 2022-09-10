const form = document.querySelector('#form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
//
const close = document.querySelector('.close');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    let result = validateInputs();

    if (result) {
        showHighFive();
    }
})

email.addEventListener('input', () => {

    if (email.validity.typeMismatch) {
        email.setCustomValidity('Provide a valid email address like username@gmail.com');
        email.reportValidity();
        setError(email, 'Pls fill the email correctly');

    } else {
        email.setCustomValidity('');
        setSuccess(email);
    }
})

country.addEventListener('input', () => {

    if (country.validity.typeMismatch) {
        country.setCustomValidity('Provide a valid country');
        country.reportValidity();
        setError(country, 'Pls fill the country correctly');
    } else{
        country.setCustomValidity('');
        setSuccess(country);
    }
})

const setError = (element, message) => {
    const input_control = element.parentElement;
    const errorDisplay = input_control.querySelector('.error');

    errorDisplay.textContent = message;
    input_control.classList.add('error');
    input_control.classList.remove('success');
}

const setSuccess = (element) => {
    const input_control = element.parentElement;
    const errorDisplay = input_control.querySelector('.error');

    errorDisplay.textContent = '';
    input_control.classList.add('success');
    input_control.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/*check if the input is empty*/
const validateInputs = () => {
    //trim whitespace from user input
    const emailValue = email.value.trim();
    const countryValue = country.value.trim();
    const zipValue = zip.value.trim();
    const passwordValue = password.value.trim();
    const passwordValue2 = password2.value.trim();


    if (emailValue === '') {
        setError(email, 'Email is required!');
        return false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'You need to provide a valid email address!');
        return false;
    }
    else {
        setSuccess(email);
    }

    if (countryValue === '') {
        setError(country, 'Country is required!');
        return false;
    } else {
        setSuccess(country);
    }

    if (zipValue === '') {
        setError(zip, 'Zip Code is required!');
        return false;
    } else {
        setSuccess(zip);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required!');
        return false;
    } else if (password.value.length < 8) {
        setError(password, 'Password must be atleast 8 characters long!');
        return false;
    }
    else {
        setSuccess(password);
    }

    if (passwordValue2 === '') {
        setError(password2, 'Pls confirm your password!');
        return false;
    } else if (passwordValue2 !== passwordValue) {
        setError(password2, 'Password did not match!');
        return false;
    } else {
        setSuccess(password2);
    }

    return true;
}

//high five when all input is valid after submitting form
close.addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
})

const showHighFive = () => {
    document.getElementById('overlay').style.display = 'block';
}

