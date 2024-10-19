const calculator = document.querySelector('#calculator')
const display = document.querySelector('.display')
let firstOperand = ''
let secondOperand = ''
let operator = null
calculator.addEventListener('click', (event) => {
  if (event.target.classList.contains('number')) {
    const displayOnScreen = display.textContent + event.target.textContent
    display.textContent = displayOnScreen
  }
  if (operator) {
    secondOperand = secondOperand + event.target.textContent
  } else {
    firstOperand = firstOperand + event.target.textContent
  }

  if (event.target.innerText === '*') {
    operator = '*'
    display.textContent = display.textContent + operator
  }
  if (event.target.innerText === '/') {
    operator = '/'
    display.textContent = display.textContent + operator
  }
  if (event.target.innerText === '+') {
    operator = '+'
    display.textContent = display.textContent + operator
  }
  if (event.target.innerText === '-') {
    operator = '-'
    display.textContent = display.textContent + operator
  }

  if (event.target.innerText === '=') {
    if (operator === '*') {
      const result = parseInt(firstOperand) * parseInt(secondOperand)
      display.textContent = result
    }
    if (operator === '/') {
      const result = parseInt(firstOperand) / parseInt(secondOperand)
      display.textContent = result
    }
    if (operator === '+') {
      const result = parseInt(firstOperand) + parseInt(secondOperand)
      display.textContent = result
    }
    if (operator === '-') {
      const result = parseInt(firstOperand) - parseInt(secondOperand)
      display.textContent = result
    }
    firstOperand = ''
    secondOperand = ''
    operator = null
  }

  if (event.target.innerText === 'C') {
    display.textContent = '0'
    firstOperand = ''
    secondOperand = ''
    operator = null
  }
})
