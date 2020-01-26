var modal = document.querySelector(".modal");
var modForm = modal.querySelector(".form");
var modClPhone = modal.querySelector(".form__contact--phone");
var modClEmail = modal.querySelector(".form__contact--mail");

modal.addEventListener("submit", function(evt) {
  evt.preventDefault();
  modal.classList.add("visually-hidden");
  modal.offsetWidth = modal.offsetWidth;
  if (!modClPhone || !modClEmail) {
    modal.classList.remove("visually-hidden")
  };
});
