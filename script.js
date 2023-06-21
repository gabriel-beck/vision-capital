//--------Toggle Menu--------

const toggleBtn = document.getElementById('toggle__btn');

function toggleMenu() {
  console.log("toggleMenu chamado");
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

toggleBtn.addEventListener('click', toggleMenu);

// --------Forms--------

const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', function() {
  const projectName = document.getElementById('projectname').value;
  const email = document.getElementById('email').value;
  const projectDetails = document.getElementById('projectdetails').value;
  const telegramName = document.getElementById('telegramname').value;

  // Check that all fields are filled in
  if (projectName && email && projectDetails && telegramName) {
    // Check if the email field contains a valid email
    if (isValidEmail(email)) {
      // Check if the telegram field does not contain special characters
      if (isValidTelegramName(telegramName)) {
        // All fields are filled in correctly
        document.getElementById('projectname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('projectdetails').value = '';
        document.getElementById('telegramname').value = '';
        alert("We will contact you within 24 hours!");
      } else {
        alert('The Telegram name field can only contain alphanumeric characters and "_".');
      }
    } else {
      alert("Please enter a valid email address.");
    }
  } else {
    alert("Please fill in all fields.");
  }
});

function isValidEmail(email) {
  // Check if the email format is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidTelegramName(telegramName) {
  // Check if the telegram field does not contain special characters other than '_'
  const telegramRegex = /^[a-zA-Z0-9_]+$/;
  return telegramRegex.test(telegramName);
}