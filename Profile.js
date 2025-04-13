// Profile JS starts here
function validateForm() {
    // Clear previous error messages
    document.querySelectorAll('.error').forEach(function(errorDiv) {
        errorDiv.textContent = '';
    });
   
    let isValid = true;
   
    // Get form values
    const firstName = document.getElementById('FirstName').value.trim();
    const lastName = document.getElementById('LastName').value.trim();
    const displayName = document.getElementById('DisplayName').value.trim();
    const email = document.getElementById('Email').value.trim();
    const oldPassword = document.getElementById('OldPassword').value.trim();
    const newPassword = document.getElementById('NewPassword').value.trim();
    const repeatNewPassword = document.getElementById('RepeatNewPassword').value.trim();
   
    // Validate first name
    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'First name is required.';
        isValid = false;
    }
   
    // Validate last name
    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Last name is required.';
        isValid = false;
    }
   
    // Validate display name
    if (!displayName) {
        document.getElementById('displayNameError').textContent = 'Display name is required.';
        isValid = false;
    }
   
    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        isValid = false;
    }
   
    // Validate old password (optional)
    if (oldPassword && oldPassword.length < 6) {
        document.getElementById('oldPasswordError').textContent = 'Old password must be at least 6 characters long.';
        isValid = false;
    }
   
    // Validate new password
    if (!newPassword || newPassword.length < 6) {
        document.getElementById('newPasswordError').textContent = 'New password must be at least 6 characters long.';
        isValid = false;
    }
   
    // Validate repeat new password
    if (newPassword !== repeatNewPassword) {
        document.getElementById('repeatNewPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }
   
    // If everything is valid, alert user
    if (isValid) {
        alert('Form submitted successfully!');
        // You can submit the form data here if you need to send it to a server
    }
   }
   