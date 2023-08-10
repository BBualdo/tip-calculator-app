/* 
Algorithm:

  1. Program takes bill input value in cents.
  2. * it by value in toggled tip button or custom input.
  3. / it by value in people input.
  4. Shows result in Tip Amount in dolars.
  
  1. Program takes bill input value in cents.
  2. / it by value in people input.
  3. + result in Tip Amount.
  4. Shows result in Total in dolars.
*/

const billAmount = document.getElementById('bill-amount');

const customTip = document.getElementById('custom-tip');

const peopleAmount = document.getElementById('people-amount');

const resetButton = document.querySelector('.reset-button');

document.querySelectorAll('.tip-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
    isToggled();
    button.classList.add('is-toggled')
    })
  })
// Adds toggle to clicked button
function isToggled() {
  document.querySelectorAll('.tip-button')
    .forEach((button) => {
      button.classList.remove('is-toggled');
    })
  }
// removes toggle from all tip buttons
customTip.addEventListener('click', () => {
  isToggled();
})
// removes toggle from all tip buttons when custom input is chosen
document.querySelectorAll('input')
  .forEach((input) => {
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        calculation();
      }
    })
  })
// runs calculation when you hit ENTER in any input
function calculation() {
  const tipButton = document.querySelector('.is-toggled');

  if (tipButton) {
    let tip = parseInt(tipButton.innerHTML);
    calculate(tip);
  } else if (!tipButton) {
    let tip = parseInt(customTip.value);
    calculate(tip);
  }
  // checks where should be value taken from
  function calculate(tip) {
    let tipAmountInCents = ((billAmount.value * 100) * (tip / 100) / peopleAmount.value);
  
    let totalInCents = ((billAmount.value * 100) / peopleAmount.value + tipAmountInCents);
  
    document.querySelector('.tip-amount').innerHTML = `$${(tipAmountInCents / 100).toFixed(2)}`;
  
    document.querySelector('.total').innerHTML = `$${(totalInCents / 100).toFixed(2)}`;
  }
  //calculates and shows Tip Amount and Total in dollars

  resetButton.classList.add('activated');
}

resetButton.addEventListener('click', () => {
  document.querySelector('.tip-amount').innerHTML = '$0.00';
  document.querySelector('.total').innerHTML = '$0.00';
  resetButton.classList.remove('activated');
})