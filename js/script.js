var siteHeader = document.querySelector('.site-header');
var siteHeaderButton = siteHeader.querySelector('.site-header__button');
var siteHeaderWrapper = siteHeader.querySelector('.site-header__wrapper');

siteHeaderWrapper.classList.remove('site-header__wrapper--no-js');
siteHeaderWrapper.classList.add('site-header__wrapper--hidden');
siteHeader.classList.add('site-header--close-menu');
siteHeaderButton.classList.remove('site-header__button--close');

siteHeaderButton.addEventListener('click', function() {
  siteHeaderButton.classList.toggle('site-header__button--close');

  if (siteHeaderButton.classList.contains('site-header__button--close')) {
    siteHeader.classList.remove('site-header--close-menu');
    siteHeaderWrapper.classList.remove('site-header__wrapper--hidden');
  } else {
    siteHeader.classList.add('site-header--close-menu');
    siteHeaderWrapper.classList.add('site-header__wrapper--hidden');
  }
});