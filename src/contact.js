function contactPage() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.classList.add('main-content');

    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contact-container');

    const phone = document.createElement('p');
    phone.textContent = 'Phone: +1 (123) 456 7891';

    const address = document.createElement('p');
    address.textContent = 'Address: 3 Wayfarer Dr. Camden ME, 04849';

    const map = document.createElement('img');
    map.src = './images/street-view.png';
    map.alt = 'Salt Wharf Map';

    contact.appendChild(contactContainer);
    contactContainer.appendChild(phone);
    contactContainer.appendChild(address);
    contactContainer.appendChild(map);

    return contact;
}

export default contactPage;