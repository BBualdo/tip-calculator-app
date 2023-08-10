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
        calculate();
      }
    })
  })
// runs calculation when you hit ENTER in any input
function calculate() {
  const tipButton = document.querySelector('.is-toggled');
  const tip = parseInt(tipButton.innerHTML);

  let tipAmountInCents = ((billAmount.value * 100) * (tip / 100) / peopleAmount.value);

  let totalInCents = ((billAmount.value * 100) / peopleAmount.value + tipAmountInCents);

  document.querySelector('.tip-amount').innerHTML = `$${(tipAmountInCents / 100).toFixed(2)}`;

  document.querySelector('.total').innerHTML = `$${(totalInCents / 100).toFixed(2)}`;
}
//calculates and shows Tip Amount and Total in dollars