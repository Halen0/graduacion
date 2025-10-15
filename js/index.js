const card = document.getElementById('card');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

function flipToBack() {
    card.classList.add('is-flipped');
    document.querySelector('.front').setAttribute('aria-hidden','true');
    document.querySelector('.back').setAttribute('aria-hidden','false');
}
function flipToFront() {
    card.classList.remove('is-flipped');
    document.querySelector('.front').setAttribute('aria-hidden','false');
    document.querySelector('.back').setAttribute('aria-hidden','true');
}

nextBtn.addEventListener('click', flipToBack);
prevBtn.addEventListener('click', flipToFront);

card.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'button') return;
    card.classList.toggle('is-flipped');
    const flipped = card.classList.contains('is-flipped');
    document.querySelector('.front').setAttribute('aria-hidden', flipped ? 'true' : 'false');
    document.querySelector('.back').setAttribute('aria-hidden', flipped ? 'false' : 'true');
});