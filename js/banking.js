// handle deposit amount button event listener
document.getElementById('deposit-button').addEventListener('click', function(){

    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');

    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    
    // update deposite total
    const depositToatl = document.getElementById('deposit-total') ;

    const previousDepositeText = depositToatl.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);

    const newDepositeTotal = previousDepositeAmount + newDepositAmount;
    depositToatl.innerText = newDepositeTotal;

    // update Remaining balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalaneTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalaneTotal;

    // clear the deposit input field
    depositInput.value = '';
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update remaining balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear input field
    withdrawInput.value = '';
});


