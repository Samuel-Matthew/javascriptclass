const form = document.getElementById('myForm');
const nameInput = document.getElementById('fname');
const email = document.getElementById('email');
const nameError = document.getElementById('nameError');
const succesMessage = document.getElementById('successMessage');

const result = document.createElement("p");
form.appendChild(result);


form.onsubmit = (event) => {
    event.preventDefault();



    const nameValue = nameInput.value.trim();
    const emailValue = email.value.trim();

    const age = parseInt(document.getElementById('age').value.trim());

    nameError.style.display = "block";
    succesMessage.style.display = "block";



    if (nameValue === '') {
        nameError.textContent = "Please Enter a name";
        return false;
    }

    if (nameValue.length < 2) {
        nameError.textContent = "Name must be at least 2 characters long.";
        return false;
    }

    if (!/^[a-zA-Z]+$/.test(nameValue)) {
        nameError.textContent = "Name must contain only letters.";
        return false;
    }

    const emailat = '@';
    const emaildot = ".";

    if (emailValue === '') {
        nameError.textContent = "Please Enter an email";
        return false;
    } else if (!emailValue.includes('@')) {
        nameError.textContent = "email must contain @ symbol.";
        return false;
    } else if (!emailValue.includes('.')) {
        nameError.textContent = "email must contain . symbol.";
        return false;
    }

    if (age < 18) {
        nameError.textContent = "You must be at least 18 years old.";
        return false;
    }


    succesMessage.textContent = "Form Submitted Successfully!";



    console.log("Form Data :", nameValue, emailValue);
}
