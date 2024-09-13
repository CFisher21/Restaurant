import "./style.css";
import { burgerimg } from "./home.js";

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navigation = document.getElementsByClassName('navigation')[0];
    
    toggleButton.addEventListener("click", () => {
        navigation.classList.toggle('active')
    })
})

