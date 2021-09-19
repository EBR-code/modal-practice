'use strict';

// variables for DOM
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenmodal = document.querySelectorAll('.show-modal');

// Removes hidden class in modal and overlay to show modal
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Adds hidden class in modal and overlay to hide modal
const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//Loops through all the query of modals, and showModal the clicked modal.
// notice that the function is
for (let i = 0; i < btnsOpenmodal.length; i++) {
  btnsOpenmodal[i].addEventListener('click', showModal);
}
// adds hidden class to the modal on close button click
btnCloseModal.addEventListener('click', hideModal);
// adds hidden class to the modal on overlay click
overlay.addEventListener('click', hideModal);

//listends if the escape key is keydown and if the modal doesn't have the hidden class it then
// triggers the hide modal function
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  }
});
