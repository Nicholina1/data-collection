// Get references to form, containers, and welcome message
const formContainer = document.getElementById("form-container");
const welcomeContainer = document.getElementById("welcome-container");
const welcomeMessage = document.getElementById("welcome-message");
const userForm = document.getElementById("user-form");

// Handle form submission
userForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  // Retrieve the user's first name from the form
  const firstName = document.getElementById("first-name").value;

  // Display the welcome message
  welcomeMessage.textContent = `Welcome, ${firstName}! What would you like to do today?`;

  // Hide the form container and show the welcome container
  formContainer.classList.add("hidden");
  welcomeContainer.classList.remove("hidden");
});
