const butts = document.querySelectorAll('li'),
    rate = document.querySelector('#rating'),
    submit = document.querySelector('button'),
    card = document.querySelector('.card'),
    tankCard = document.querySelector('.tanks-card');

function addHover(index){
    butts.forEach(btn => {
        if(btn.dataset.tabindex <= index){
            btn.classList.add('hover')
        }
    })
}

function removeHover(){
    butts.forEach(btn =>{
        btn.classList.remove('hover')
    })
}

butts.forEach((btn) => {
    btn.addEventListener('click',()=>{
        rate.textContent = btn.textContent;
        removeHover();
        addHover(btn.dataset.tabindex);
    })
})

submit.addEventListener('click',()=>{
    if(rate.textContent){
        card.style.display = 'none';
        tankCard.style.display = 'flex';
    }else {
        alert('No Review was giving.. please give a feedback');
    }
})
