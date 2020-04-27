let counter = 0;

$('#increase').click((event) => {
    counter = counter + 1;
    $('h2').text(counter);
});

$('#decrease').click((event) => {
    counter--;
    $('h2').text(counter);
});

$('button').css('background', 'aquamarine');
$('button').css('border', '2px solid #0b8ec1');
$('button').css('border-radius', '50px');
$('button').css('font-size', '20px');
$('button').css('font-family', 'Patrick Hand, cursive');