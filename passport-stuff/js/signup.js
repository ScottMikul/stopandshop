$(document).ready(function() {
  // Getting references to our form and input
  let signUpForm = $("form.signup");
  let userName=$("input#userName-signUp");
  let emailInput = $("input#userEmail-signUp");
  let passwordInput = $("input#userPass-signUp");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    let userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      name:userName.val().trim()
    };
    console.log(userData);

    if (!userData.email || !userData.password || !userData.name) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password,userData.name);
    emailInput.val("");
    passwordInput.val("");
    userName.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password,name) {
    console.log("email :",email);
    console.log("pass :",password);
    console.log("name",name)
    // $.post("/api/signup", {
    //   name:name,
    //   email: email,
    //   password: password
    // })
    //   .then(data => {
    //     console.log(data);
    //     window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      // })
      // .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
