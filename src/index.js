import initialPageLoad from "./page-load";
import homePage from "./home";
import menuPage from "./menu";
import contactPage from "./contact";

initialPageLoad();

const setButtonListeners = (function () {
    const content = document.getElementById('content');
    let home = homePage();
    let contact = contactPage();
    
    const navOptions = document.querySelectorAll('.nav li');

    navOptions.forEach(element => {
        element.addEventListener('click', function(e) {
            if (e.target.className === "selected") {
                return;
            }
            clearSelected();
            clearContent();
            element.classList.add('selected');
            if (e.target.id === "home") {
                const home = homePage();
                content.appendChild(home);
            }
            else if (e.target.id === "menu") {
                const menu = menuPage();
                content.appendChild(menu);
            }
            else if (e.target.id === "contact") {
                const contact = contactPage();
                content.appendChild(contact);
            }
        })
    });

    function clearContent() {
        let mainContent = document.querySelector('.main-content');
        mainContent.remove();
    }

    function clearSelected() {
        const selected = document.querySelectorAll('.selected');
        selected.forEach(element => {
            element.classList.remove('selected');
        });
    }
})();