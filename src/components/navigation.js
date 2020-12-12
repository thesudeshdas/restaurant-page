const renderNavigation = () => {
    const navbar = document.createElement('nav');
    navbar.innerHTML = `
        <h1>
            <img class="brand-logo" src="/dist/images/brand-logo.svg" alt="">
            Dash Eats
        </h1>
        <ul>
            <li class="list-item-inline">
                <button id="button-home" class="button-primary">Home</button>
            </li>
            <li class="list-item-inline">
                <button id="button-menu" class="button-primary">Menu</button>
            </li>
            <li class="list-item-inline">
                <button id="button-contact" class="button-primary">Contact</button>
            </li>
        </ul>
    `
    
    return navbar;
}

export default renderNavigation;