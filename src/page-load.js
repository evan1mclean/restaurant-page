import homePage from "./home";

function createHeader() {
    const container = document.createElement('div');
    container.classList.add('header');
    
    const img = document.createElement('img');
    img.src = './images/logo.png';
    img.alt = 'Salt Wharf Logo';

    const nav = document.createElement('ul');
    nav.classList.add('nav');

    const home = document.createElement('li');
    home.setAttribute('id', 'home');
    home.classList.add('selected');
    home.textContent = "Home";

    const menu = document.createElement('li');
    menu.setAttribute('id', 'menu');
    menu.textContent = "Menu";

    const contact = document.createElement('li');
    contact.setAttribute('id', 'contact');
    contact.textContent = "Contact";

    container.appendChild(img);
    container.appendChild(nav);
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    return container;
}

function initialPageLoad() {
    const content = document.getElementById('content');
    const header = createHeader();
    const home = homePage();
    content.appendChild(header);
    content.appendChild(home);
    
}

export default initialPageLoad;