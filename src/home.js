import RestView from "./images/LuckyBurgerRest.webp"
import sweaterimg from "./images/sweater.webp"
import hatimg from "./images/hat.webp"
import tshirtimg from "./images/tshirt.webp"
import keychainimg from "./images/keychain.webp"
import LuckyLogoPic from "./images/LuckyLogo.webp"

const burgerimg  = document.createElement('img');

burgerimg.src = RestView;
burgerimg.alt = "Burger";
burgerimg.className = 'main-photo';

const slogancontainer = document.createElement('div');

slogancontainer.className = 'slogan-container'

const seperate = document.createElement('div')

seperate.className = 'seperate'

const LuckyLogo = document.createElement('img');

LuckyLogo.src = LuckyLogoPic;
LuckyLogo.alt = "Lucky Logo"
LuckyLogo.className = "LuckyLogo"

slogancontainer.appendChild(LuckyLogo);

const slogan = document.createElement('h1');
const slogan2 = document.createElement('h1');
const slogan3 = document.createElement('h2');

slogan.className = "slogan"
slogan.textContent = "Lucky's Burgers,"

slogan2.className = "slogan2"
slogan2.textContent = "Where Every Burger's a Jackpot!"

slogan3.className = "slogan3"
slogan3.textContent = "High Quality, Where Every Burger is Made to Perfection"

seperate.appendChild(slogan);
seperate.appendChild(slogan2);
seperate.appendChild(slogan3);

slogancontainer.appendChild(seperate)

const merch = document.createElement('div');

merch.className = 'merch';

const merchandise = document.createElement('h1')

merchandise.textContent = 'Merchandise';

const grid = document.createElement('div');

grid.className = 'grid';

const sweater = document.createElement('img');
const tshirt = document.createElement('img');
const hat = document.createElement('img');
const keychain = document.createElement('img');

sweater.className = 'merch-img';
sweater.alt = "sweater"
sweater.src = sweaterimg
tshirt.className = 'merch-img';
tshirt.alt = "t-shirt"
tshirt.src = tshirtimg
hat.className = 'merch-img';
hat.alt = "hat"
hat.src = hatimg
keychain.className = 'merch-img';
keychain.alt = "keychain"
keychain.src = keychainimg

grid.appendChild(sweater);
grid.appendChild(tshirt);
grid.appendChild(hat);
grid.appendChild(keychain);

merch.appendChild(merchandise)
merch.appendChild(grid)
 
export { burgerimg,  slogancontainer, merch };