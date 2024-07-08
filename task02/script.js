function getFormvalue(event) {
    event.preventDefault();
    const firstNameInput = document.querySelector('input[name = "fname"]');
    const lastNameInput = document.querySelector('input[name = "lname"]');
    console.log('First name: ', firstNameInput.value);
    console.log('Last name: ', lastNameInput.value);
}
