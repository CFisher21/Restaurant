import burger from "./images/burger.webp"

const burgerimg  = document.createElement('img');

burgerimg.src = burger;
burgerimg.alt = "Burger";
burgerimg.className = 'burger-photo';

export {burgerimg};