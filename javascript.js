const scrollTopBtn = document.querySelector('#scroll-top');
const dropDown = document.querySelector('.drop-down');
const optionOne = document.querySelector('.option1');
const mobileBtn = document.querySelector('.mobile-btn');


const onclick = document.querySelector('.cta-btn');

let sidenav = document.querySelector('#sidenav');

onclick.addEventListener('click', function scrollWin () {
  window.scrollBy(0, 1200);
});


scrollTopBtn.addEventListener('click', function() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 80) {
        scrollTopBtn.style.display = 'block'
    } else {
        scrollTopBtn.style.display = 'none'
    }
})

optionOne.addEventListener('click', function() {
    dropDown.classList.toggle('drop-down--active');
});

mobileBtn.addEventListener('click', function() {

    if (sidenav.style.width === '250px') {
        sidenav.style.width = '0px'
    } else {
        sidenav.style.width = '250px'
    }
});
