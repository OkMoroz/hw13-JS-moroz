document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementsByName("email")[0].value;
  const password = document.getElementsByName("password")[0].value;

  console.log(`Email:`, email);
  console.log(`Password:`, password);
  alert(`Email: ${email}`);
  alert(`Password: ${password}`);

  document.querySelector(".loader").classList.remove("loader--hidden");

  setTimeout(function () {
    document.querySelector(".loader").classList.add("loader--hidden");
    location.href = "myprofile.html";
  }, 2000);
});
