const btn = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.burger_menu'),
    closeBtn = document.querySelector('.close');

btn.addEventListener('click', () => {
    burgerMenu.classList.add('burger_menu-active');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('burger_menu-active');
    document.body.style.overflow = '';
});

const accrodion = () => {
    const characteristicTitle = document.querySelectorAll('.characteristic_title'),
        characteristicDescription = document.querySelectorAll('.characteristic_description'),
        closeAccord = document.querySelectorAll('.close_accrod'),
        cooperateIntro = document.querySelector('.cooperate_intro'),
        invite = document.querySelector('.invite'),
        cooperate = document.querySelector('.cooperate');

    characteristicTitle.forEach((item, index) => {
        item.addEventListener('click', () => {
            characteristicDescription[index].classList.toggle('active');
            closeAccord[index].classList.toggle('active');
            invite.style.height = '1350px';
            cooperateIntro.style.height = '1350px';
            cooperateIntro.classList.add('active');
            cooperate.classList.add('active');
            if(characteristicDescription.classList.contains('active') < 2){
                invite.style.height = '1022px';
                cooperateIntro.style.height = '1022px';
            }
        });
    });

}

accrodion();