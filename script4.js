// =============================
// Event Handling and Features
// =============================

// FORM VALIDATION
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = "";

  // Custom Validation (instead of just HTML5 required)
  if (username === "") {
    message = "❌ Username cannot be empty.";
  } else if (!email.includes("@") || !email.includes(".")) {
    message = "❌ Please enter a valid email address.";
  } else if (password.length < 6) {
    message = "❌ Password must be at least 6 characters long.";
  } else {
    message = "✅ Registration successful!";
  }

  document.getElementById("formMessage").textContent = message;
});

// =============================
// INTERACTIVE FEATURE 1: Counter
// =============================
let count = 0;
document.getElementById("countBtn").addEventListener("click", function() {
  count++;
  document.getElementById("countDisplay").textContent = count;
});

// =============================
// INTERACTIVE FEATURE 2: Color Changer
// =============================
document.getElementById("colorBtn").addEventListener("click", function() {
  let colors = ["#f28b82", "#fbbc04", "#34a853", "#4285f4", "#9c27b0"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
