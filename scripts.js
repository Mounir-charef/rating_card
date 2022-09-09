const butts = document.querySelectorAll('li'),
    rate = document.querySelector('#rating'),
    submit = document.querySelector('button'),
    card = document.querySelector('.card'),
    tankCard = document.querySelector('.tanks-card');

butts.forEach((btn) => {
    btn.addEventListener('click',()=>{
        rate.textContent = btn.textContent;
    })
})

submit.addEventListener('click',()=>{
    if(rate.textContent){
        card.classList.add('ignore');
        tankCard.classList.remove('ignore');
    }else {
        alert('No Review was giving.. please give a feedback');
    }
})