import globalContainer, { createHtmlElement } from './website';

function createHomePage() {
  //Create elements
  const mainSection = createHtmlElement('main', 'home-page', 'main-wrapper', null);
  const textWrapper = createHtmlElement('div', null, null, null);
  const firstHomeLine = createHtmlElement('h1', null, null, 'Made by us.');
  const secondHomeLine = createHtmlElement('h1', null, null, 'Enjoyed by Everyone.');
  //Append elements
  textWrapper.appendChild(firstHomeLine);
  textWrapper.appendChild(secondHomeLine);
  mainSection.appendChild(textWrapper);

  globalContainer.appendChild(mainSection);
}

export default createHomePage;