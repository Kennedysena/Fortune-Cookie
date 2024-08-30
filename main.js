const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const clickOnCookie = document.querySelector("#closedCookie");
const phrases = [
  "Se o passado te ligar não atenda, ele não tem nada de novo a oferecer",
  "Você não é especial",
  "Pelo que estou sofrendo ?",
  "O caminho da felicidade é cheio de obstáculos e humilhações"
];
let randomPhrase = document.querySelector("#randomPhrase");
let generateRandomPhrase;

clickOnCookie.addEventListener("click", generatePhrase);
document.addEventListener("keydown", pressEnterKey);

function generatePhrase() {
  toggleScream();
  generateRandomPhrase = Math.floor(Math.random() * phrases.length);
  randomPhrase.innerHTML = phrases[generateRandomPhrase];
}

function toggleScream() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function pressEnterKey(event) {
  if (event.key == "Enter" && screen1.classList.contains("hide")) {
    toggleScream();
  }
}
