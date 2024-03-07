const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const nameList = document.getElementById('nameList');
const winnerElement = document.getElementById('winner');

function addName() {
  const name = nameInput.value.trim();
  if (name) {
    const li = document.createElement('li');
    li.textContent = name;
    li.style.color = getRandomColor();
    nameList.appendChild(li);
    nameInput.value = '';
  }
}

function selectWinner() {
  const lis = nameList.querySelectorAll('li');
  const winnerIndex = Math.floor(Math.random() * lis.length);
  const winnerName = lis[winnerIndex].textContent;
  winnerElement.textContent = `Winner: ${winnerName}`;
  lis.forEach(li => li.classList.remove('winner'));
  lis[winnerIndex].classList.add('winner');
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

nameForm.addEventListener('submit', function(event) {
  event.preventDefault();
  addName();
});

