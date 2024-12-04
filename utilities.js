// function for get Input value
function getValueFromInputField(id){
   const inputFieldText =  document.getElementById(id).value;
   const inputFieldNumber = parseFloat(inputFieldText);
   return inputFieldNumber;
}

// function for get Inner Text
function getInnerTextFormElement(id){
    const elementInnerText = document.getElementById(id).innerText;
    const elementInnerNumber = parseFloat(elementInnerText);
    return elementInnerNumber;
}

// function for get elememnt
function showTheElement(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('send-money-form').classList.add('hidden');
    document.getElementById('transection-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}