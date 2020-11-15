// Media Query to Change Video on Tablets
const video = document.querySelector('.video');

let breakpoint = window.matchMedia("(max-width: 1024px)")

const changeListener = function(breakpoint) {
    if (breakpoint.matches) {
      video.setAttribute('src', 'resources/videos/hero-image-tablet.mp4')
    } else {
     video.setAttribute('src', 'resources/videos/hero-image.mp4')
    }
  }
  
changeListener(breakpoint);
breakpoint.addListener(changeListener);
  

// Hamburger Menu
const hamburgerIcon = document.querySelector('.hamburger');
const hamburgerContainer = document.querySelector('.hamburger-menu');
const hamburgerContent = document.querySelector('.hamburger-menu .container')
const hamburgerClose = document.querySelector('.hamburger-menu__close');

hamburgerIcon.addEventListener('click', e => {
  hamburgerContainer.style.display = 'block';
  hamburgerContent.style.animation = 'show .4s';
});

hamburgerClose.addEventListener('click', e => {
  hamburgerContent.style.animation = 'hide .4s';
  hamburgerContainer.style.display = 'none';
});


// Toggle Nested Lists
const showMore = document.querySelectorAll('.show-more')
const lists = document.querySelectorAll('.list');

lists.forEach(list => {
  showMore.forEach(item => {
    item.addEventListener('click', e => {
      if(item.getAttribute('data-id') === list.getAttribute('data-id')) {
        list.classList.toggle('d-none')
      }
    });
  });
});