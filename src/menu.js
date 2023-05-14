import globalContainer, { mainSection } from './website';

let menuItems = [{
    name: 'Tasty',
    description: 'Very Yummy!',
    img: '../src/img/menu/1.jpg',
    price: '15$'
  },
  {
    name: 'Waffles',
    description: 'Delicious!',
    img: '../src/img/menu/2.jpg',
    price: '7$'
  },
  {
    name: 'Burger',
    description: 'Very good!',
    img: '../src/img/menu/3.jpg',
    price: '25$'
  },
  {
    name: 'Some pie',
    description: 'So cool!',
    img: '../src/img/menu/4.jpg',
    price: '18$'
  },
  {
    name: 'Soup',
    description: 'Looks interesting!',
    img: '../src/img/menu/5.jpg',
    price: '52$'
  },
  {
    name: 'Shrimps',
    description: 'Ehhhh...',
    img: '../src/img/menu/6.jpg',
    price: '69$'
  }
];


function createMenu() {
  const menuGrid = document.createElement('div');
  
  menuItems.forEach(item => {
    const itemCard = document.createElement('div');
    itemCard.classList.add('menu-card');
    itemCard.style.backgroundImage = `url("${item['img']}")`;

    const itemCardOverlay = document.createElement('div');
    itemCardOverlay.classList.add('menu-card-overlay');

    const itemName = document.createElement('h2');
    itemName.textContent = item['name'];

    const itemDescription = document.createElement('p');
    itemDescription.textContent = item['description'];

    const itemPrice = document.createElement('p');
    itemPrice.textContent = item['price'];

    itemCardOverlay.append(itemName, itemDescription, itemPrice);
    itemCard.appendChild(itemCardOverlay);
    menuGrid.appendChild(itemCard);
  });

  mainSection.setAttribute('id', 'menu-page');
  menuGrid.setAttribute('id', 'menu-grid-wrapper');

  mainSection.appendChild(menuGrid);
  globalContainer.appendChild(mainSection);
}

export default createMenu;