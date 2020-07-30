const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  // get a random number bewtween 0 and 3
  const randomNum = generateRandomNum();
  console.log(randomNum);
  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
});

function generateRandomNum() {
  return Math.floor(Math.random() * colors.length);
}
