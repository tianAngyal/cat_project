const input = document.querySelector("input");

console.log(input);

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(...new FormData(form));
});
