// GLOBAL VARIABLES
  const billAmount = document.getElementById('bill-amount');

  const customTip = document.getElementById('custom-tip');

  const peopleAmount = document.getElementById('people-amount');

  const errorMessage = document.querySelector('.error');

  const resetButton = document.querySelector('.reset-button');

// LOOPS AND EVENT-LISTENERS
  document.querySelectorAll('.tip-button')
    .forEach((button) => {
      button.addEventListener('click', () => {
      isToggled();
      button.classList.add('is-toggled');
      errorCheck();
      })
    })
  // Adds toggle to clicked button

  customTip.addEventListener('click', () => {
    isToggled();
  })
  // removes toggle from all tip buttons when custom input is chosen
  document.querySelectorAll('input')
    .forEach((input) => {
      input.addEventListener('keyup', (event) => {
        errorCheck()
        })
    })
  // runs calculation when you hit ENTER in any input

  resetButton.addEventListener('click', () => {
    // When reset button is clicked:
    document.querySelector('.tip-amount').innerHTML = '$0.00';
    document.querySelector('.total').innerHTML = '$0.00';
    // - changes amounts to 0
    billAmount.value = '';
    isToggled();
    customTip.value = '';
    peopleAmount.value = '';
    // - clears all fields and buttons
    resetButton.classList.remove('activated');
    // deactivates a reset button
  })

// FUNCTIONS
  function isToggled() {
    document.querySelectorAll('.tip-button')
      .forEach((button) => {
        button.classList.remove('is-toggled');
      })
    }
  // removes toggle from all tip buttons

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
    // sets button to active status
  }

  function errorCheck() {
    if (peopleAmount.value == 0) {
      errorMessage.classList.remove('hidden');
      errorMessage.innerHTML = 'Can\'t be zero';
    } else if (peopleAmount.value < 0) {
      errorMessage.classList.remove('hidden');
      errorMessage.innerHTML = 'Must be positive';
    // first checks if there is valid people amount
    } else {
      errorMessage.classList.add('hidden');
      calculation();
    // if it is - hide error and run the function
    }
  }