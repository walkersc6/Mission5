//event listener for when the button is clicked
$('#btnCalc').click(function () {

    var hours = $('#hours').val();

    //check to see that input is less than 6 hours
    if (hours > 6) {
        alert('Please enter a number equal to or less than 6');
    }
    //check to see if input is positive
    else if (hours <= 0) {
        alert('Please enter a positive number');
    }
    else {
        var rate = $('#charge').val();
        var totalPrice = hours * rate;
        //replace the text in price header with the total calculated price
        $('#totalPrice').text(totalPrice);
    }
})