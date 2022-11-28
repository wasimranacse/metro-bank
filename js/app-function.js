// get inputValue
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldValue = inputField.value;
    const fieldValue = parseFloat(inputFieldValue);
    inputField.value = '';
    return fieldValue;
}

function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInnerText = fieldTag.innerText;
    const fieldValue = parseFloat(fieldValueInnerText);
    return fieldValue;
}
// updateTotal amount!
function updateTotal(fieldId, amount){
    const previousTotal = getInnerTextValue(fieldId);
    /* const totalTag = document.getElementById(fieldId);
    const previousTotalText = totalTag.innerText;
    const previousTotalTotal = parseFloat(previousTotalText); */
    const newTotalAmount = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotalAmount;
    return newTotalAmount;
}

// update total remaining balance
function updateBalance(amount, isAdding){
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if( isAdding == true ){
        newBalance = previousBalance + amount;
    }
    else{
        newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;
}

// deposite button event handler!
document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
    if(amount > 0){
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
});

// withdraw button event handler!
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if(withdrawInput > 0 && withdrawInput <= balance){
        updateTotal('withdraw-total', withdrawInput);
        updateBalance(withdrawInput, false);
    }
});