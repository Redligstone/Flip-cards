const card = document.querySelector('.inner__card');
const backs = document.querySelectorAll('.card__face-back');
const backsArr = [...backs];
const textBody = document.querySelectorAll('.back__body');
const textArr = [...textBody]

for (i = 0; i < backsArr.length; i++){
    let text = textArr[i].innerText;
    let textLength = text.split('').length;
    if (textLength > 350){
    backsArr[i].style.overflow = 'auto'
    }
    if(textLength < 350){
    backsArr[i].style.overflow = 'hidden'
    }
}
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

