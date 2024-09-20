// add money to the account
/**
 * step-1: Event handler 
 * prevent page reload
 * step-2:get money to be added to the account balance
 * step-3:get amount
 * step-4:get current amount
 * step-5:update amount
 * step-6:main account er ste set 
 */

// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    //step-2:get money to be added to the account balance
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput)
    
    // get pin
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput)
})