$(document).ready(function () {
  // Getting references to our form and inputs
  let loginForm = $("form.login");
  let emailInput = $("input#loginForm-email");
  let passwordInput = $("input#loginForm-pass");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function (event) {
    event.preventDefault();
    // alert(`Welcome ${emailInput.val().trim()}  !`);
    let userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    console.log("USER DATA : ", userData);

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    console.log("email : ", email);
    console.log("password :", password);
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function () {
        window.location.replace("/");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});
