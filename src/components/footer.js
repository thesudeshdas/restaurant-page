const renderFooter = () => {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <h2>Get in touch with us</h2>
        <ul>
            <li class="list-item-inline">
                <a class="link-button-alternate" href="https://github.com/thesudeshdas" target="blank"><i class="fab fa-github"></i> GitHub</a>
            </li>
            <li class="list-item-inline">
                <a class="link-button-alternate" href="https://www.linkedin.com/in/sudesh-kumar-das" target="blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
            </li>
            <li class="list-item-inline">
                <a class="link-button-alternate" href="https://twitter.com/thesudeshdas" target="blank"><i class="fab fa-twitter"></i></i> Twitter</a>
            </li>
            <li class="list-item-inline">
                <a class="link-button-alternate" href="https://www.instagram.com/thesudeshdas" target="blank"><i class="fab fa-instagram"></i> Instagram</a>
            </li>
        </ul>
    `
    
    return footer;
}

export default renderFooter;