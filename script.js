let envelope = document.getElementById('envelope__shape');

function showLetter() {
    let letter = document.getElementById('letter');
    // adding fade animation &  '.letter' class from CSS
    letter.classList.add('animate__animated', 'animate__fadeIn', 'letter');
    // delay to allow user to see envelope being pushed
    setTimeout( function() {letter.scrollIntoView(); }, 500);
}

envelope.addEventListener('click', showLetter);
