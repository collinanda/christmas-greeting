let envelope = document.getElementById('envelope');

function showLetter() {
    let letter = document.getElementById('letter');
    letter.classList.add('letter');
    setTimeout(scrollIntoView(letter); }, 1000);
}


// function timeFunction() {
//     setTimeout(function(){ alert("After 5 seconds!"); }, 5000);
// }


envelope.addEventListener('click', showLetter);