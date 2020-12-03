const mainImage = document.querySelector("#img");
const button = document.querySelector(".btn");

const images = ["img/pick1.jpg", "img/pick2.jpg", "img/pick3.jpg", "img/pick4.jpg"];

button.addEventListener("click",()=>{
console.log("hello from script file!");
let rnd = Math.floor(Math.random() * images.length);
mainImage.src = images [rnd];
console.log("Random number:",rnd);
});