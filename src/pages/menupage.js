const renderMenuPage = () => {
    document.getElementById('div-stuff').innerHTML = `
        <ul>
            <li>Pizza</li>
            <li>Burger</li>
            <li>Cake</li>
            <li>Fries</li>
            <li>Hotdog</li>
        </ul>
    `
}

export default renderMenuPage;