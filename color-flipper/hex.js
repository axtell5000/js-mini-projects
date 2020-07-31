const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  generateColor();
})

function generateColor() {
  let colorString;
  colorString = '#';
  for (let i = 0; i < 6; i++) {
    colorString += hex[generateRandomNum()];
  }
  document.body.style.backgroundColor = colorString;
  color.textContent = colorString;
}

function generateRandomNum() {
  return Math.floor(Math.random() * hex.length);
}
