let register = (e) => {
  e.preventDefault();
  let LSData = [];
  let form = document.getElementById("form");
  let user = {
    email: form.email.value,
    password: form.password.value,
    retype: form.password2.value,
  };

  LSData.push(user);

  if (user.retype != user.password) {
    swal("Wrong Credensials", "Plz check your Password", "error");
  }
  if (user.retype === user.password) {
    swal("Sign Up Success", "User Registered Successfully", "success");
    localStorage.setItem("register", JSON.stringify(LSData));
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  }
};
