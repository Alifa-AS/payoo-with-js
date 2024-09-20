// show the cash out form
document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    
    // show cash out button clicked
    console.log('cash out button clicked')
    document.getElementById('cash-out-form').classList.remove('hidden');

    // hide add money from
    document.getElementById('add-money-form').classList.add('hidden');

});

// show add money form and hide the cash out form
document.getElementById('btn-show-add-money').addEventListener('click', function(){
    // show the add money form
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})