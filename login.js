let data = JSON.parse(localStorage.getItem("register"));
let adminArr= [];
let adminObj = {
    email:"admin@gmail.com",
    password:"12345"
}

adminArr.push(adminObj)
localStorage.setItem("admin",JSON.stringify(adminArr))
let adminObj2 = JSON.parse(localStorage.getItem("admin")) 



let user = document.querySelector(".user");

user.addEventListener("click", () => {
  let getEmail = document.getElementById("email").value
  let getPassword = document.getElementById("password").value


  for (var i of data) {
    if (i.email == getEmail && i.password == getPassword) {
        swal(
            "User Logged in",
            "Welcome",
            "success"
          )

      var win = window.location.href;
      var url = new URL(win);

      var params = new URLSearchParams(url.search);

      setTimeout(function () {
        window.location.href = `index.html?username=${i.email}`;
      }, 2000);
    } else {
      swal(
        "Wrong email or password",
        "Please Enter valid email or password",
        "error"
      );
    }
  }
});

// Admin Panel;
// console.log(adminData)

let admin = document.querySelector(".admin");
admin.addEventListener("click",() => {
    let getEmail = document.getElementById("email").value
    let getPassword = document.getElementById("password").value


    for (var i of adminObj2) {
        if (i.email == getEmail && i.password == getPassword) {
            swal(
                "Admin Logged In",
                "Welcome",
                "success"
              )
    
          var win = window.location.href;
          var url = new URL(win);
    
          var params = new URLSearchParams(url.search);
    
          setTimeout(function () {
            window.location.href = `admin.html?username=${i.email}`;
          }, 2000);
        } else {
          swal(
            "Wrong email or password",
            "Please Enter valid email or password",
            "error"
          );
        }
      }
    
})
