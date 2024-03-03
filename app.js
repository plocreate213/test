let unknownNumber = Math.floor(Math.random() * 100)
let heading = document.querySelector('label')
let guessedNumbers = []
let guessedNumbersList = document.getElementById('guessedNumberList')
let attempts = document.querySelector('h3')

document.getElementById('submitNumber').onclick = function () {

  let yourNumber = document.getElementById('guessField').value

  if (yourNumber==='') {
    return;
  } 
  
  else if (yourNumber > unknownNumber) {
    heading.innerHTML = 'Wrong number. Try lower number.'
  }
  else if (yourNumber < unknownNumber) {
    heading.innerHTML = 'Wrong number. Try higher number'
  } else {
  heading.innerHTML = 'Congratulations! Your number is correct now.'
  attempts.style.opacity = '100%'
  attempts.innerHTML += guessedNumbers.length + 1
  }

  guessedNumbers.push(+yourNumber);
  updateGuessedNumberList();
}


function updateGuessedNumberList() {
  guessedNumbersList.innerHTML = ''
  guessedNumbers.forEach(function (number) {
    let listItem = document.createElement('li');
    listItem.textContent = number;
    guessedNumbersList.appendChild(listItem)
  })
}


console.log(guessedNumbers)
