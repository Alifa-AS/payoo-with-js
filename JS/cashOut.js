document.getElementById('btn-cash-out').addEventListener('click', function(event){
    console.log('clicked cash out');
    event.preventDefault();

    // 
    const cashOut = document.getElementById('input-cash-out').value
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin').value
    console.log(cashOut , pinNumber);

    // wrong way to verify pin number
    if(pinNumber === '1234'){
        // get the balance
        const balance = document.getElementById('account-balance').innerText
        const balanceNumber = parseFloat(balance);

        // reduce The balance
        const newBalance = balanceNumber - cashOutNumber;

        // Update The UI
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cashOut. Please try again later.')
    }
});
