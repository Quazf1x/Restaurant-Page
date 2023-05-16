import globalContainer, { createHtmlElement } from './website.js';
import img1 from '../src/img/menu/1.jpg';
import img2 from '../src/img/menu/2.jpg';
import img3 from '../src/img/menu/3.jpg';
import img4 from '../src/img/menu/4.jpg';
import img5 from '../src/img/menu/5.jpg';
import img6 from '../src/img/menu/6.jpg';


let menuItems = [{
    name: 'Tasty',
    description: 'Very Yummy!',
    img: img1,
    price: '15$'
  },
  {
    name: 'Waffles',
    description: 'Delicious!',
    img: img2,
    price: '7$'
  },
  {
    name: 'Burger',
    description: 'Very good!',
    img: img3,
    price: '25$'
  },
  {
    name: 'Some pie',
    description: 'So cool!',
    img: img4,
    price: '18$'
  },
  {
    name: 'Soup',
    description: 'Looks interesting!',
    img: img5,
    price: '52$'
  },
  {
    name: 'Shrimps',
    description: 'Ehhhh...',
    img: img6,
    price: '69$'
  }
];


function createMenu() {
  const menuGrid = createHtmlElement('div', 'menu-grid-wrapper', null, null);
  const mainSection = createHtmlElement('main', 'menu-page', 'main-wrapper', null);
  
  menuItems.forEach(item => {
    //Create elements
    const itemCard = createHtmlElement('div', null, 'menu-card', null);
    itemCard.style.backgroundImage = `url("${item['img']}")`;

    const itemCardOverlay = createHtmlElement('div', null, 'menu-card-overlay', null);
    const itemName = createHtmlElement('h2', null, null, item['name']);
    const itemDescription = createHtmlElement('p', null, null, item['description']);
    const itemPrice = createHtmlElement('p', null, null, item['price']);
    //Append Elements
    itemCardOverlay.append(itemName, itemDescription, itemPrice);
    itemCard.appendChild(itemCardOverlay);
    menuGrid.appendChild(itemCard);
  });

  mainSection.appendChild(menuGrid);
  globalContainer.appendChild(mainSection);
}

export default createMenu;