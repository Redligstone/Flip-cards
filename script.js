const card = document.querySelector('.inner__card');

card.addEventListener('click', function(){
    card.classList.toggle('is-flipped');
})

const cardMidlle = document.querySelector('.inner__card-middle');

cardMidlle.addEventListener('click', function(){
    cardMidlle.classList.toggle('is-flipped');
})

const cardSenior = document.querySelector('.inner__card-senior');

cardSenior.addEventListener('click', function(){
    cardSenior.classList.toggle('is-flipped');
})