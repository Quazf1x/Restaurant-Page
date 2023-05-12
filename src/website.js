const globalContainer = document.querySelector('#content');

function createHeader() {
  const header = document.createElement('header');
  //create navigation list
  const navList = document.createElement('ul');
  const navItems = ['Home', 'Menu', 'Contacts'];

  navList.setAttribute('id','website-menu');
  navItems.forEach(item => {
    // navList.appendChild(document.createElement('li', item));
    var itemList = document.createElement('li');
    itemList.textContent = item;
    navList.appendChild(itemList);
  });

  header.appendChild(navList);

  //create logo
  const websiteLogo = document.createElement('span');
  websiteLogo.setAttribute('id', 'website-logo');
  websiteLogo.textContent = 'Pizzaria';
  header.appendChild(websiteLogo);

  //add elements to the page
  globalContainer.appendChild(header);
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.textContent = 'Photo by Pixzolo Photography on Unsplash';
  globalContainer.appendChild(footer);
}
export default globalContainer;
export { createHeader, createFooter };