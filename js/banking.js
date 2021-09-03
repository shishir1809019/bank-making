function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const amountValue = inputField.value;
  inputField.value = "";
  return amountValue;
}
function updateTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  const previousTotal = totalElement.innerText;
  totalElement.innerText = parseFloat(previousTotal) + parseFloat(amount);
}
function getCurrentBalanceTotal() {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = balanceTotal.innerText;
  return previousBalanceTotal;
}
function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  // const previousBalanceTotal = balanceTotal.innerText;
  const previousBalanceTotal = getCurrentBalanceTotal();
  if (isAdd == true) {
    balanceTotal.innerText =
      parseFloat(previousBalanceTotal) + parseFloat(amount);
  } else {
    balanceTotal.innerText =
      parseFloat(previousBalanceTotal) - parseFloat(amount);
  }
}
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // const depositInput = document.getElementById("deposit-input");
    // const newDepositInput = depositInput.value;
    // const depositTotal = document.getElementById("deposit-total");

    // const previousDepositAmount = depositTotal.innerText;
    // const newDepositAmount =
    //   parseFloat(previousDepositAmount) + parseFloat(newDepositInput);

    // depositTotal.innerText = newDepositAmount;
    const newDepositInput = getInputValue("deposit-input");
    if (newDepositInput > 0) {
      updateTotalField("deposit-total", newDepositInput);
      updateBalance(newDepositInput, true);
    }

    // update account balance
    // const balanceTotal = document.getElementById("balance-total");
    // const previousBalanceTotal = balanceTotal.innerText;
    // const newBalanceTotal =
    //   parseFloat(previousBalanceTotal) + parseFloat(newDepositInput);
    // balanceTotal.innerText = newBalanceTotal;

    // depositInput.value = "";
  });

// handle withdraw event handler
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // const withdrawAmountText = document.getElementById("withdraw-input");
    // const newWithdrawAmount = withdrawAmountText.value;

    // const previousWithdrawText = document.getElementById("withdraw-total");
    // const previousWithdrawTotal = previousWithdrawText.innerText;

    // const newWithdrawTotal =
    //   parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
    // previousWithdrawText.innerText = newWithdrawTotal;
    const newWithdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalanceTotal();
    if (newWithdrawAmount > 0 && newWithdrawAmount <= currentBalance) {
      updateTotalField("withdraw-total", newWithdrawAmount);
      updateBalance(newWithdrawAmount, false);
    }
    if (newWithdrawAmount > currentBalance) {
      alert("Enter a valid number");
    }

    // update account balance

    // const balanceTotal = document.getElementById("balance-total");
    // const previousBalanceTotal = balanceTotal.innerText;

    // const newBalanceTotal =
    //   parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
    // balanceTotal.innerText = newBalanceTotal;

    // withdrawAmountText.value = "";
  });
