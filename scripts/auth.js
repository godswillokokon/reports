

let currentUser = sessionStorage.getItem("username");



if (!currentUser) {
  location.href = "login.html";
  console.log("not logged in from auth");
} else {
  let currentUserSession = sessionStorage.getItem("user");

  console.log(currentUserSession);
  console.log("user logged in from auth");
}





function logout() {
  //  e.preventDefault();
  // clearCookie();
  auth.signOut().then(() => {
    console.log("user is logged out");
    let currentUser = sessionStorage.removeItem("user");
    let usernameSession = sessionStorage.removeItem("username");


    location.href = "login.html";
  });
  console.log("am logging out");
}

