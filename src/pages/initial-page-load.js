import renderNavigation from "../components/navigation";
import renderFooter from "../components/footer";

const initialPageLoad = () => {
    const contentEl = document.getElementById('content');
    
    const homeTab  = document.createElement('div');
    homeTab.setAttribute('id', 'div-stuff');
    
    homeTab.innerHTML = `
    <section>
        <img class="hero-img" src="./images/hero-food.jpg" alt="">
        <!-- https://unsplash.com/photos/-YHSwy6uqvk -->
        <h1 class="hero-heading">Eat with the Best</h1>
        <h3 class="hero-heading-description"> Welcome to The aethetic food stop. Eat the <span>Tastiest Delicacies</span> with a view to behold</h3>
    </section>

    <section>
        <div class="container">
            <h2>Food we have</h2>
            <ul>
                <li>Pizza</li>
                <li>Burger</li>
                <li>Cake</li>
                <li>Fries</li>
                <li>Hotdog</li>
            </ul>
        </div>
    </section>
    `
    
    contentEl.append(
        renderNavigation(),
        homeTab,
        renderFooter()
    );
}

export default initialPageLoad;