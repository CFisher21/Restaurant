import "./style.css";
import { burgerimg, slogancontainer, merch } from "./home.js";
import menu from "./menu.js"; 
import {aboutRow, headingrow} from "./about.js"

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

    function About() {
        content.appendChild(headingrow)
        content.appendChild(aboutRow)
    }
    
    Home();

    const homeNav = document.getElementById('home');
    const menuNav = document.getElementById('menu');
    const aboutNav = document.getElementById('about');

    homeNav.addEventListener('click', () => {
        content.innerHTML = "";
        Home();
    })

    menuNav.addEventListener('click', () => {
        content.innerHTML = "";
        Menu();
    })
    aboutNav.addEventListener('click', () => {
        content.innerHTML = "";
        About();
    })

})

