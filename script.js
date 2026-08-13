// Wait for the contact form to be submitted
const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

contactForm.addEventListener("submit", function (event) {
  // Stop the form from refreshing the page
  event.preventDefault();

  // Get the values entered by the user
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple check to make sure fields are not empty
  if (name === "" || email === "" || message === "") {
    formResponse.style.color = "red";
    formResponse.textContent = "Please fill in all fields.";
    return;
  }

  // Show a thank you message
  formResponse.style.color = "green";
  formResponse.textContent = "Thank you, " + name + "! Your message has been received.";

  // Clear the form fields
  contactForm.reset();
});
