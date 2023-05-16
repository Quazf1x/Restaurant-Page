import { createHeader, createFooter } from './website.js';
import createMenu from './menu.js';
import createAbout from './about.js';
import  createHomePage  from './home.js';
import backgroundImg from '../src/img/main.jpg';

  function renderPage(pageFunction) {
    document.querySelector('#content').innerHTML = ' ';
    createHeader();
    pageFunction();
    createFooter();
  }

  document.addEventListener('click',(e) =>{
    switch(e.target.innerText){
      case 'Home':
        renderPage(createHomePage);
      break;
      case 'Menu':
        renderPage(createMenu);
      break;
      case 'About':
        renderPage(createAbout);
      break;
    }
  });

  document.querySelector('body').style.backgroundImage = `url("${backgroundImg}")`;
  renderPage(createHomePage);