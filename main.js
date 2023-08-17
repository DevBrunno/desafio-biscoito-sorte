const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnImage = document.querySelector("#biscoito");
const btnReset = document.querySelector("#btnReset");

btnImage.addEventListener("click", toggleScreen);
btnReset.addEventListener("click", toggleScreen);

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}


