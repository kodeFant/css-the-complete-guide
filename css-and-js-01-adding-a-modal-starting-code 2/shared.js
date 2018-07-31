var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.button');
var noButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

console.dir(backdrop);


for (i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener('click', function() {
/*     modal.style.display = 'block';
    backdrop.style.display = 'block'; */
    /* modal.className = 'open';  Would override */
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

function closeModal() {
/*   modal.style.display = 'none';
  backdrop.style.display = 'none'; */
  if(modal) {
  modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
} 

backdrop.addEventListener('click', function() {
  /* mobileNav.style.display = 'none'; */
  mobileNav.classList.remove('open');
  closeModal();
});

if (noButton) {
  noButton.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', function() {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});