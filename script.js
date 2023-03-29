const form = document.getElementById('appointment-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const reasonInput = document.getElementById('reason');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate form data
  if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '' || dateInput.value === '' || timeInput.value === '' || reasonInput.value === '') {
    alert('Please fill in all fields.');
    return false;
}

// Submit form data
const formData = new FormData(form);
const xhr = new XMLHttpRequest();
xhr.open('POST', 'your-server-url-here');
xhr.send(formData);

alert
})

function submitForm(form){
    swal({
      title: "Done!",
      text: "Your application has been submitted!",
      icon: "success",
      button: "close",
    })
    .then((isOkay) => {
        if(isOkay) {
           form.submit();
        }
    });
    return false;
}