var siteHeader = document.querySelector('.site-header');
var siteHeaderButton = siteHeader.querySelector('.site-header__button');
var siteHeaderWrapper = siteHeader.querySelector('.site-header__wrapper');
var flexWrapper = document.querySelector('.flex-wrapper');

siteHeaderButton.addEventListener('click', function() {
  siteHeaderButton.classList.toggle('site-header__button--close');

  if (siteHeaderButton.classList.contains('site-header__button--close')) {
    siteHeader.classList.remove('site-header--close-menu');
    siteHeaderWrapper.classList.remove('site-header__wrapper--hidden');
  } else {
    siteHeader.classList.add('site-header--close-menu');
    siteHeaderWrapper.classList.add('site-header__wrapper--hidden');
  }
  
  if(siteHeader.classList.contains('site-header--close-menu')) {
    flexWrapper.classList.remove('flex-wrapper--padding');
  } else {
    flexWrapper.classList.add('flex-wrapper--padding');
  }
});