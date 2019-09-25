
//remove the mobile hidden class from

const hamburger = document.querySelector(".fa-hamburger");
const hiddenUL = document.querySelector ("ul");

hamburger.addEventListener('click', function () {
  // hiddenUL classlist remove ("is-hidden--mobile");
  hiddenUL.classList.toggle("is-hidden--mobile");
});
