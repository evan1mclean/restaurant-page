function homePage() {
    const home = document.createElement('div');
    home.classList.add('home-page');

    const header = document.createElement('h1');
    header.textContent = 'Salt Wharf';

    const description = document.createElement('p');
    description.textContent = 'Harborside Dining and Rooftop Bar';

    home.appendChild(header);
    home.appendChild(description);

    return home;
}

export default homePage;