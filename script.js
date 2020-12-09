let envelope = document.getElementById('envelope');

function showLetter() {
    let letter = document.getElementById('letter');
    letter.classList.add('letter');
    
}

envelope.addEventListener('click', showLetter);