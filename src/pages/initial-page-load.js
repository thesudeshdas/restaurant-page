import renderNavigation from "../components/navigation";
import renderFooter from "../components/footer";
import createHomeTab from "./homepage";

const initialPageLoad = () => {
    const contentEl = document.getElementById('content');
    
    contentEl.append(
        renderNavigation(),
        createHomeTab(),
        renderFooter()
    );
}

export default initialPageLoad;