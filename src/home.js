import globalContainer, { mainSection } from './website';

function createHomePage() {
  const textWrapper = document.createElement('div');
  const firstHomeLine = document.createElement('h1');
  const secondHomeLine = document.createElement('h1');

  mainSection.setAttribute('id', 'home-page');
  firstHomeLine.textContent = 'Made by us.';
  secondHomeLine.textContent = 'Enjoyed by Everyone.';

  textWrapper.appendChild(firstHomeLine);
  textWrapper.appendChild(secondHomeLine);
  mainSection.appendChild(textWrapper);

  globalContainer.appendChild(mainSection);
}

export default createHomePage;