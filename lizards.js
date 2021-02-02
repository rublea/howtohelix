
let i = 0;
const txt = 'Thanks for checking me out human🦎😏!';
const speed = 50;

function message() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(message, speed);
  }
}
