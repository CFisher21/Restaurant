import "./style.css";
import { burgerimg, slogancontainer, merch } from "./home.js";
import menu from "./menu.js"; 

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navigation = document.getElementsByClassName('navigation')[0];    
    const content = document.getElementById('content');
    
    toggleButton.addEventListener("click", () => {
        navigation.classList.toggle('active')
    })

    function Home() {

        content.appendChild(burgerimg)
        content.appendChild(slogancontainer)
        content.appendChild(merch)

    }

    function Menu() {
        content.appendChild(menu)
    }
    
    Home();

})

