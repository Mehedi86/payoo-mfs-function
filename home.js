// this is for add money function
document.getElementById('add-money-button').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyAmount = getValueFromInputField('add-money-amount');
    const addMoneyPin = getValueFromInputField('add-money-pin');
    const balance = getInnerTextFormElement('total-balance');

    if (addMoneyPin === 1234 && isNaN(addMoneyAmount) === false) {
        const newBalance = balance + addMoneyAmount;
        document.getElementById('total-balance').innerText = newBalance;
        const transectionContainer = document.getElementById('transection-container');
        const p = document.createElement('p');
        p.classList.add('bg-green-300', 'rounded-xl', 'font-semibold', 'px-4', 'py-2', 'my-2');
        p.innerText = `Add Money: ${addMoneyAmount} TK and new balance is ${newBalance} TK `;
        transectionContainer.appendChild(p);

    }
    else {
        alert('Please provide valid input');
    }
});

// this is for cash out function
document.getElementById('cash-out-button').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutAmount = getValueFromInputField('cash-out-amount');
    const cashOutPin = getValueFromInputField('cash-out-pin');
    const balance = getInnerTextFormElement('total-balance');

    if (cashOutPin === 1234 && isNaN(cashOutAmount) === false && balance > cashOutAmount) {
        const newBalance = balance - cashOutAmount;
        document.getElementById('total-balance').innerText = newBalance;
        const transectionContainer = document.getElementById('transection-container');
        transectionContainer.innerHTML = `<p class="bg-rose-300 rounded-xl font-semibold px-4 py-2 my-2">Cash out: ${cashOutAmount} TK and new balance is ${newBalance} TK</p>`;
    }
    else {
        alert('please provide valid input');
    }
});

// this is for send money function

document.getElementById('send-money-button').addEventListener('click', function (event) {
    event.preventDefault();
    const sendMoneyAmount = getValueFromInputField('send-money-input');
    const sendMoneyPin = getValueFromInputField('send-money-pin');
    const balance = getInnerTextFormElement('total-balance');

    if (sendMoneyPin === 1234 && typeof (sendMoneyAmount) === 'number' && balance > sendMoneyAmount) {
        const newBalance = balance - sendMoneyAmount;
        document.getElementById('total-balance').innerText = newBalance;
        const transectionContainer = document.getElementById('transection-container');
        transectionContainer.innerHTML = `<p class="bg-rose-300 rounded-xl font-semibold px-4 py-2 my-2">Cash out: ${sendMoneyAmount} TK and new balance is ${newBalance} TK</p>`;

    }
    else {
        alert('Please enter valid input');
    }
});

// add money show button 

document.getElementById('add-money-show-button').addEventListener('click', function(){
    showTheElement('add-money-form');
});

//  cashout form show button

document.getElementById('cash-out-show-button').addEventListener('click', function(){
    showTheElement('cash-out-form');
});

// send money show button

document.getElementById('send-money-show-button').addEventListener('click', function(){
    showTheElement('send-money-form');
});

// transection show button

document.getElementById('transection-show-button').addEventListener('click', function(){
    showTheElement('transection-container');
});