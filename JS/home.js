// add money to the account
/**
 * step-1: Event handler 
 * prevent page reload
 * step-2:get money to be added to the account balance and also get thr pin number
 * step-3:verify the pin number
 * step-4:get current amount
 * step-5:update amount; add money input with balance
 * step-6:main account er ste set 
 */

// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    //step-2:get money to be added to the account balance
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    
    // get pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // step-3:verify the pin number
    // wrong way to validate pin number
    if(pinNumberInput === '1234'){
        console.log('adding money to your account');

        //  step-4:get current amount
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // step-5:update amount; add money input with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            const newBalance = addMoneyNumber + balanceNumber;
            console.log(newBalance);

            // step-6:Update the balance in the UI/DOM
            document.getElementById('account-balance').innerText = newBalance;
        }
    else{
        alert('fail to add money! please try again ');
    }

})