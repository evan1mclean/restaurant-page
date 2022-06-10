function menuPage() {
    const menu = document.createElement('div')
    menu.classList.add('menu');
    menu.classList.add('main-content');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');

    const menuLogo = document.createElement('img');
    menuLogo.src = './images/logo.png';
    menuLogo.alt = 'Salt Wharf Logo';

    const menuH1 = document.createElement('h1');
    menuH1.textContent = 'Menu';

    const item1 = createMenuItem('Lobster & Corn Risotto', 'Sherry risotto, baby spinach, parmesan cheese', '30');
    const item2 = createMenuItem('Grilled Flat Iron Steak', "Marinated 8 oz beef, Za'atar chimichurri, pickled onion & sliced tomato", '30');
    const item3 = createMenuItem('Basil Scottish Salmon', 'Seared salmon, rustic pesto & heirloom tomato salad', '29');
    const item4 = createMenuItem('Pan Seared Crab Cakes', 'Local picked crab with old bay seasoning, lemon, dijon mustard, breadcrumbs, & basil aioli', '30');
    const item5 = createMenuItem('Seared Sea Scallops', 'Lemon & lavender beurre blanc, baby spinach', '32');
    const item6 = createMenuItem('Local Beef & Lamb Kofta', 'ground beef & lamb skewers, couscous tabbouleh, feta, pickled onion, honey curry cream & grilled flat bread', '35');
    const item7 = createMenuItem('Atlantic Haddock Fish & Chips', 'Fried and served with tartar sauce, lemon, french fries & cole slaw', '25');
    const item8 = createMenuItem('Local Whole Belly Fried Clams', 'Tartar sauce, french fries & coleslaw', '25');

    menu.appendChild(menuContainer);
    menuContainer.appendChild(menuHeader);
    menuHeader.appendChild(menuLogo);
    menuHeader.appendChild(menuH1);
    menuContainer.appendChild(item1);
    menuContainer.appendChild(item2);
    menuContainer.appendChild(item3);
    menuContainer.appendChild(item4);
    menuContainer.appendChild(item5);
    menuContainer.appendChild(item6);
    menuContainer.appendChild(item7);
    menuContainer.appendChild(item8);

    return menu;
}

function createMenuItem(header, description, price) {
    const item = document.createElement('div');
    item.classList.add('menu-item');

    const title = document.createElement('h2');
    title.textContent = header;

    const desc = document.createElement('p');
    desc.textContent = description;

    const cost = document.createElement('p');
    cost.textContent = price;

    item.appendChild(title);
    item.appendChild(desc);
    item.appendChild(cost);

    return item;
}

export default menuPage;