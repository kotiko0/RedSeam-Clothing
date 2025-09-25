localStorage.setItem("user", "false");

document.addEventListener("DOMContentLoaded", function () {
  let isLoggedIn = localStorage.getItem("user") === "true";
  let headerFile;
  if (isLoggedIn) {
    headerFile = "/header/header-user.html";
  } else {
    headerFile = "/header/header-guest.html";
  }

  fetch(headerFile)
    .then((res) => res.text())
    .then((html) => {
      document.querySelector(".header").innerHTML = html;
    });
});
