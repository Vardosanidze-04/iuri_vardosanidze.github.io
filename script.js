// განკუთნილია პაროლის სიძლიერის შესამოწმებლად 
document.getElementById("passwordInput").addEventListener("input", function() {
  const password = this.value;
  const strengthText = document.getElementById("passwordStrength");
  
  let strength = "Weak";
  let color = "red";
  

  const lowercaseCheck = /[a-z]/.test(password);
  const uppercaseCheck = /[A-Z]/.test(password);
  const numberCheck = /[0-9]/.test(password);


  if (lowercaseCheck && uppercaseCheck && numberCheck) {
      strength = "Strong";
      color = "green";
  } else if (lowercaseCheck && uppercaseCheck) {
      strength = "Normal";
      color = "chocolate";
  }


  strengthText.textContent = `Strength: ${strength}`;
  strengthText.style.color = color;
});

// განკუთვნილია ტელეფონის ნომრისთვის 
function validateMobile(input) {
  input.value = input.value.replace(/[^0-9]/g,''); 
}

// განკუთნილია სახელი დაიწყოს ველში დიდი ასოთი
function capitalizeFirstLetter(input) {
  input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
}

//რეგისტრაცისს
document.getElementById("registerBtn").addEventListener("click", function(event) {
  event.preventDefault();  

  
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  const confirmPassword = document.getElementById("confirmPasswordInput").value;
  const dob = document.getElementById("dobInput").value;
  const username = document.getElementById("usernameInput").value;
  const phone = document.getElementById("phoneInput").value;

 
  document.querySelectorAll(".error-message").forEach(function(span) {
      span.textContent = "";
  });

  
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "გთხოვთ შეიყვანოთ სწორი ელ.ფოსტა.";
      return;
  }


  if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").textContent = "პაროლები არ ემთხვევა.";
      return;
  }

  if (!email || !password || !confirmPassword || !dob || !username || !phone) {
      if (!email) document.getElementById("emailError").textContent = "ელ.ფოსტა სავალდებულოა";
      if (!password) document.getElementById("passwordError").textContent = "პაროლი სავალდებულოა";
      if (!confirmPassword) document.getElementById("confirmPasswordError").textContent = "პაროლები არ ემთხვევა";
      if (!dob) document.getElementById("dobError").textContent = "რეგისტრაციის თარიღი სავალდებულოა";
      if (!username) document.getElementById("usernameError").textContent = "მომხმარებლის სახელი სავალდებულოა";
      if (!phone) document.getElementById("phoneError").textContent = "ტელეფონის ნომერი სავალდებულოა";
      return;
  }

  alert("Registration successful!");
  console.log({
      email, password, dob, username, phone
  });
});


