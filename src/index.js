import initialPageLoad  from "./pages/initial-page-load";
import renderMenuPage from "./pages/menupage";
import renderHomePage from "./pages/homepage";
import renderContactPage from "./pages/contactpage";

const finalCreation = ( () => {
    initialPageLoad();
    
    document.getElementById('button-menu').addEventListener('click', renderMenuPage);
    document.getElementById('button-home').addEventListener('click', renderHomePage);
    document.getElementById('button-home').addEventListener('click', renderContactPage);
} )();