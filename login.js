document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const loginNumber = getValueFromInputField('login-number');
    const passwordNumber =getValueFromInputField('password-input');
    if(isNaN(loginNumber) || isNaN(passwordNumber)){
        alert('Please valid Input!');
        return;
    };
    if(loginNumber === 1234 && passwordNumber === 1234){
        window.location.href = 'home.html';
    }
    else{
        alert('Please enter valid phone and password');
    }
});