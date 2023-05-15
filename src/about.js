import globalContainer, { createHtmlElement } from './website';

function createAbout() {
  //Create elements
  const mainSection = createHtmlElement('main', 'about-page', 'main-wrapper', null);
  const aboutWrapper = createHtmlElement('div','about-wrapper', null, null);
  const headline = createHtmlElement('h1', null, null, 'About us');
  const paragraph = createHtmlElement('p', null, null, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

  //Append elements
  aboutWrapper.appendChild(headline);
  aboutWrapper.appendChild(paragraph);
  mainSection.appendChild(aboutWrapper);
  globalContainer.appendChild(mainSection);
}

export default createAbout;