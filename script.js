'use strict';

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// TABBED COMPLNENT

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  // REMOVE ACTIVE CLASSES
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(tabc =>
    tabc.classList.remove('operations__content--active')
  );

  //ACTIVE TAB
  clicked.classList.add('operations__tab--active');

  //ACTIVE CONTENT
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
