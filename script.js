'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenmodal = document.querySelectorAll('.show-modal');
console.log(btnsOpenmodal);

for (let i = 0; i < btnsOpenmodal.length; i++) {
  btnsOpenmodal[i].addEventListener('click', function () {
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
}
