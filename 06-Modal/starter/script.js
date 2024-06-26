'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);

const openModal = function(i) {
    console.log(`CLICKED BUTTON NUMBER ${i+1}`);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', function(){
        openModal(i);
    })
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal)