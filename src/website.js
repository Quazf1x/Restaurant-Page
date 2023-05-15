const globalContainer = document.querySelector('#content');

//Function that is used to create most elements
function createHtmlElement(type, id, classes, content) {
  const element = document.createElement(type);
  element.setAttribute('id', id);
  element.classList.add(classes);
  element.textContent = content;
  return element;
}

function createHeader() {
  const header = createHtmlElement('header', null, null, null);
  //create navigation list
  const navList = createHtmlElement('ul', 'website-menu', null, null);
  const navItems = ['Home', 'Menu', 'About'];

  navItems.forEach(item => {
    const itemList = createHtmlElement('li', null, null, item);
    navList.appendChild(itemList);
  });

  //create logo
  const websiteLogo = createHtmlElement('span', 'website-logo', null, 'Pizzaria');

  //add elements to the page
  header.appendChild(navList);
  header.appendChild(websiteLogo);
  globalContainer.appendChild(header);
}

function createFooter() {
  const footer = createHtmlElement('footer', null, null, 'Background photo by Pixzolo Photography, menu photos by Mae Mu  on Unsplash');
  globalContainer.appendChild(footer);
}
export default globalContainer;
export { createHeader, createFooter, createHtmlElement };