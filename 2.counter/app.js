const btns = document.querySelectorAll('button');
let countValue = document.getElementById('value');
let countNum = countValue.textContent;
countNum = parseInt(countNum, 10);

btns.forEach(btn => {
  if (btn.classList.contains('decrease')) {
    btn.addEventListener('click', decreaseCount);
  } else if (btn.classList.contains('reset')) {
    btn.addEventListener('click', resetCount);
  } else if (btn.classList.contains('increase')) {
    btn.addEventListener('click', increaseCount);
  }
});

function decreaseCount() {
  countNum -= 1;
  countValue.textContent = countNum;
  checkNum(countNum);
}

function resetCount() {
  countNum = 0;
  countValue.textContent = countNum;
  checkNum(countNum);
}

function increaseCount() {
  countNum += 1;
  countValue.textContent = countNum;
  checkNum(countNum);
}

function checkNum(countNum) {
  if (countNum < 0) {
    countValue.style.color = 'red';
  } else if (countNum > 0) {
    countValue.style.color = 'green';
  } else {
    countValue.style.color = 'black';
  }
}