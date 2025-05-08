// slider JS starts here
let icon = document.querySelector(".fa-solid fa-bars")
let icon2 = document.querySelector(".fa-solid fa-xmark")
let slider = document.querySelector("#slider-navbar")
let body = document.querySelector("body")


function sliderNavbar(){
    if(slider.style.left === "-400px"){
        slider.style.left = "0px"
      
    }else{
        slider.style.left = "-400px"
    }
}

    function removeContainer(){
        if(slider.style.left === "400px"){
        slider.style.left = "-400px"
    }else{
    slider.style.left = "-400px"
    }
}
// slider Js ends here

// sign up page form validation JS starts here

let icon3 = document.getElementById("icon")
let container = document.querySelector(".container")
let container1 = document.querySelector(".sign-in-container");
function removecontainer(){
   container.style.top="-110%"
   body.style.backgroundcolor = "red"
   body.style.overflow = "visible"
}


setTimeout(function() {
container.style.top = "0"
body.style.overflow = "hidden"
}, 500);





function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    
    // Hide previous errors
    hideAllErrors();
    
    let isValid = true;
    
    // Get form inputs
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const checkbox = document.getElementById('checkbox').checked;
    
    // User Name Validation
    if (!username) {
        document.getElementById('error-username').style.display = 'inline-block';
        isValid = false;
    }
    
    // Email Validation (simple regex for example)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('error-email').style.display = 'inline-block';
        isValid = false;
    }
    
    // Password Validation (minimum length 6)
    if (password.length < 6) {
        document.getElementById('error-password').style.display = 'inline-block';
        isValid = false;
    }
    
    // Checkbox Validation (ensure agreement to terms)
    if (!checkbox) {
        document.getElementById('error-checkbox').style.display = 'inline-block';
        isValid = false;
    }
    
    // If all fields are valid, you can submit the form or perform any other actions
    if (isValid) {
        alert('Form submitted successfully!');
        // Optionally, submit the form here if you want
    }
}

function hideAllErrors() {
    document.getElementById('error-username').style.display = 'none';
    document.getElementById('error-password').style.display = 'none';
    document.getElementById('error-email').style.display = 'none';
    document.getElementById('error-checkbox').style.display = 'none';
}

// sign up page form validation JS ends here






// counters starts here

let count = 1; // Starting count value

function updateCount() {
    document.querySelector('.count').textContent = count;
}

function increaseCounter() {
    if(count < 9){
    count++;
    }
    updateCount();
}

function decreaseCounter() {
    if(count > 1) {
        count--;
    }
    updateCount();
}

let count2 = 1; // Starting count value

function updateCount2() {
    document.querySelector('.count2').textContent = count2;
}

function increaseCounter2() {
    if(count2 < 9){
    count2++;
    }
    updateCount2();
}

function decreaseCounter2() {
    if(count2 > 1) {
        count2--;
    }
    updateCount2();
}

let count3 = 1; // Starting count value

function updateCount3() {
    document.querySelector('.count3').textContent = count3;
}

function increaseCounter3() {
    if(count3 < 9){
    count3++;
    }
    updateCount3();
}

function decreaseCounter3() {
    if(count3 > 1) {
        count3--;
    }
    updateCount3();
}
// Counters ends here










