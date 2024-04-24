function togglePaymentFields() {
  var paymentMethod = document.getElementById('payment-method').value;
  var creditCardFields = document.getElementById('credit-card-fields');
  var mobileMoneyFields = document.getElementById('mobile-money-fields');
  var networkSelect = document.getElementById('network');
  var payNowBtn = document.getElementById('pay-now-btn');

  if (paymentMethod === 'card') {
    creditCardFields.classList.remove('hidden');
    mobileMoneyFields.classList.add('hidden');
    enableCreditCardFields();
    disableMobileMoneyFields();
    // Enable "Pay Now" button for credit card payment
    payNowBtn.removeAttribute('disabled');
  } else if (paymentMethod === 'mobile-money') {
    creditCardFields.classList.add('hidden');
    mobileMoneyFields.classList.remove('hidden');
    enableMobileMoneyFields();
    disableCreditCardFields();
    // Check if a network option is selected
    if (networkSelect.value === "") {
      payNowBtn.setAttribute('disabled', true);
    } else {
      payNowBtn.removeAttribute('disabled');
    }
  }
}

function enableCreditCardFields() {
  var creditCardFields = document.getElementById('credit-card-fields').querySelectorAll('input, select');

  for (var i = 0; i < creditCardFields.length; i++) {
    creditCardFields[i].removeAttribute('disabled');
    creditCardFields[i].setAttribute('required', true);
  }
}

function disableCreditCardFields() {
  var creditCardFields = document.getElementById('credit-card-fields').querySelectorAll('input, select');

  for (var i = 0; i < creditCardFields.length; i++) {
    creditCardFields[i].setAttribute('disabled', true);
    creditCardFields[i].removeAttribute('required');
  }
}

function enableMobileMoneyFields() {
  var mobileMoneyFields = document.getElementById('mobile-money-fields').querySelectorAll('input, select');

  for (var i = 0; i < mobileMoneyFields.length; i++) {
    mobileMoneyFields[i].removeAttribute('disabled');
    mobileMoneyFields[i].removeAttribute('required');
  }
}

function disableMobileMoneyFields() {
  var mobileMoneyFields = document.getElementById('mobile-money-fields').querySelectorAll('input, select');

  for (var i = 0; i < mobileMoneyFields.length; i++) {
    mobileMoneyFields[i].setAttribute('disabled', true);
    mobileMoneyFields[i].removeAttribute('required');
  }
}

function validateExpiryDate() {
  var expiryDateInput = document.getElementById('expiry-date');
  var expiryDateError = document.getElementById('expiry-date-error');
  var expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // Pattern for MM/YY format

  if (!expiryDatePattern.test(expiryDateInput.value)) {
    expiryDateError.textContent = 'Invalid expiry date format. Please use MM/YY.';
    expiryDateInput.classList.add('error');
    return false;
  } else {
    expiryDateError.textContent = '';
    expiryDateInput.classList.remove('error');
    return true;
  }
}

var expiryDateInput = document.getElementById('expiry-date');
expiryDateInput.addEventListener('input', validateExpiryDate);
