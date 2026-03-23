const numberInput = document.querySelector('#numberInput');
const addBtn = document.querySelector('#addBtn');
const resetBtn = document.querySelector('#resetBtn');
const message = document.querySelector('#message');
const totalCount = document.querySelector('#totalCount');
const oddSumText = document.querySelector('#oddSum');
const evenSumText = document.querySelector('#evenSum');
const numberList = document.querySelector('#numberList');
const container = document.querySelector('.container');

let numbers = [];

function getOddSum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      total = total + arr[i];
    }
  }

  return total;
}

function getEvenSum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      total = total + arr[i];
    }
  }

  return total;
}

function render() {
  numberList.innerHTML = '';

  totalCount.innerText = numbers.length;

  const oddTotal = getOddSum(numbers);
  const evenTotal = getEvenSum(numbers);

  oddSumText.innerText = oddTotal;
  evenSumText.innerText = evenTotal;

  container.classList.remove('odd-winning', 'even-winning', 'tie');

  if (numbers.length === 0) {
    message.innerText = 'No numbers yet.';
    container.classList.add('tie');
    return;
  }

  if (oddTotal > evenTotal) {
    message.innerText = 'Odd sum is winning.';
    container.classList.add('odd-winning');
  } else if (evenTotal > oddTotal) {
    message.innerText = 'Even sum is winning.';
    container.classList.add('even-winning');
  } else {
    message.innerText = 'Odd and even sums are tied.';
    container.classList.add('tie');
  }

  for (let i = 0; i < numbers.length; i++) {
    const li = document.createElement('li');
    const row = document.createElement('div');
    const text = document.createElement('span');
    const deleteBtn = document.createElement('button');

    row.classList.add('number-row');
    deleteBtn.classList.add('delete-btn');

    if (numbers[i] % 2 === 0) {
      row.classList.add('even-item');
      text.innerText = numbers[i] + ' (even)';
    } else {
      row.classList.add('odd-item');
      text.innerText = numbers[i] + ' (odd)';
    }

    deleteBtn.innerText = 'Delete';

    deleteBtn.addEventListener('click', function () {
      numbers.splice(i, 1);
      render();
    });

    row.appendChild(text);
    row.appendChild(deleteBtn);
    li.appendChild(row);
    numberList.appendChild(li);
  }
}

addBtn.addEventListener('click', function () {
  const inputValue = numberInput.value;

  if (inputValue === '') {
    message.innerText = 'Please enter a number.';
    return;
  }

  const numberValue = Number(inputValue);

  if (isNaN(numberValue)) {
    message.innerText = 'Please enter a valid number.';
    return;
  }

  numbers.push(numberValue);
  numberInput.value = '';
  render();
});

resetBtn.addEventListener('click', function () {
  numbers = [];
  render();
});

render();