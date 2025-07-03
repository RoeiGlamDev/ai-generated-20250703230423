// 
// Clean JavaScript with proper structure and error handling
// Uses relative paths and avoids hardcoded URLs
//
document.addEventListener("DOMContentLoaded", function() {
  // Get the contact form and error message elements
  const form = document.querySelector("form");
  const errorMessage = document.getElementById("error-message");
  
  // Add event listener to the form submit event
  form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the form data
    const formData = new FormData(form);
    
    // Check if the form data is valid
    if (formData.get("name") === "" || formData.get("email") === "" || formData.get("message") === "") {
      // Display an error message if the form data is invalid
      errorMessage.textContent = "Please fill out all fields.";
    } else {
      // Send the form data to the server (not implemented in this static site)
      // For demonstration purposes, log the form data to the console
      console.log(formData);
      
      // Clear the form fields
      form.reset();
      
      // Hide the error message
      errorMessage.textContent = "";
    }
  });
});