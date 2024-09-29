const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    let buttonValue = event.target.textContent
    switch (buttonValue) {
      case 'C':
        clear()
        break
      case '=':
        evaluate()
        break
      default:
        toDisplayOnScreen(buttonValue)
    }
  })
})
const clear = () => {
  display.textContent = ''
}
const toDisplayOnScreen = (value) => {
  display.textContent = display.textContent + value
}
const evaluate = () => {
  try {
    let calculation = eval(display.textContent)
    display.textContent = calculation
  } catch (error) {
    display.textContent = 'Invalid error'
  }
}
