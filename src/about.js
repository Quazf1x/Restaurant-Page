import globalContainer, { mainSection } from './website';

function createAbout() {
  //Set main section id
  mainSection.setAttribute('id', 'about-page');

  //Create elements
  const aboutWrapper = document.createElement('div');
  aboutWrapper.setAttribute('id', 'about-wrapper');
  const headline = document.createElement('h1');
  headline.textContent = 'About us';
  const paragraph = document.createElement('p');
  paragraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  //Append elements
  aboutWrapper.appendChild(headline);
  aboutWrapper.appendChild(paragraph);
  mainSection.appendChild(aboutWrapper);
  globalContainer.appendChild(mainSection);
}

export default createAbout;