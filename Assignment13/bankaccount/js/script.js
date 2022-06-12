const $ = id => document.getElementById(id);

function bankAccount(ownerName) {
    let balance = 0;
    let owner = ownerName;
    return {
        withdrawal: function(withdrawalAmount) {
            if (withdrawalAmount > 0 && withdrawalAmount <= balance) {
                withdrawalAmount = parseFloat(withdrawalAmount.toFixed(2));
                balance -= withdrawalAmount;
            } else {
                alert(`Please enter a valid withdrawal amount. You may withdraw up to $${balance}.`)
            }
        },
        deposit: function(depositAmount) {
            if (depositAmount != null && depositAmount != NaN) {
                depositAmount = parseFloat(depositAmount.toFixed(2));
                balance += depositAmount;
            } else {
                alert(`Please enter a valid deposit amount. Valid characters include 0-9.`)
            }
        },
        getBalance: function() {
            return balance;
        },
        getOwnerName: function() {
            return owner;
        }
    }
}

let account;
let nameBtn = $('nameBtn');
let depositBtn = $('depositBtn');
let withdrawalBtn = $('withdrawalBtn');
let acctInfo = $('acctInfo');

nameBtn.addEventListener('click', () => {
    let ownerName = prompt('Enter the account owner\'s name:');
    account = bankAccount(ownerName);
    acctInfo.innerHTML = `${account.getOwnerName()}:<br />Balance: $${account.getBalance()}`
})

depositBtn.addEventListener('click', () => {
    let depositAmount = prompt('Enter an amount to deposit into your account, using only numerals:');
    account.deposit(depositAmount);
    acctInfo.innerHTML = `${account.getOwnerName()}:<br />Balance: $${account.getBalance()}`;
})

withdrawalBtn.addEventListener('click', () => {
    let withdrawalAmount = prompt('Enter an amount to withdraw from your account, using only numerals:');
    account.withdrawal(withdrawalAmount);
    acctInfo.innerHTML = `${account.getOwnerName()}:<br />Balance: $${account.getBalance()}`;
})