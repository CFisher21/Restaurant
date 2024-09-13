import "./style.css";
import LuckyLogo from './images/LuckyLogo.webp'

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navigation = document.getElementsByClassName('navigation')[0];

toggleButton.addEventListener("click", () => {
    navigation.classList.toggle('active')
})