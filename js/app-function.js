// get inputValue
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldValue = inputField.value;
    const fieldValue = parseFloat(inputFieldValue);
    inputField.value = '';
    return fieldValue;
}

// updateTotal amount!
function updateTotal(fieldId, amount){
    const totalTag = document.getElementById(fieldId);
    const previousTotalText = totalTag.innerText;
    const previousTotalTotal = parseFloat(previousTotalText);
    const newTotalAmount = previousTotalTotal + amount;
    totalTag.innerText = newTotalAmount;
    return newTotalAmount;
}

// update total remaining balance
function updateBalance(amount, isAdding){
    const balanceTotal = document.getElementById('balance-total');
    const totalBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(totalBalanceText);
    let newBalance;
    if( isAdding == true ){
        newBalance = previousBalance + amount;
    }
    else{
        newBalance = previousBalance - amount;
    }
    balanceTotal.innerText = newBalance;
}

// deposite button event handler!
document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
    updateTotal('deposit-total', amount);
    updateBalance(amount, true);
});

// withdraw button event handler!
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = getInputValue('withdraw-input');
    updateTotal('withdraw-total', withdrawInput);
    updateBalance(withdrawInput, false);
});