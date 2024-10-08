import LuckyLogoPic from "./images/LuckyLogo.webp";

const menu = document.createElement('div');

menu.className = "menu";

const menuTitle = document.createElement('h1');


const seperate2 = document.createElement('div');
seperate2.className = "seperate2"

const LuckyLogo2 = document.createElement('img');

LuckyLogo2.className = 'LuckyLogo2'
LuckyLogo2.alt = "LuckyLogo"
LuckyLogo2.src = LuckyLogoPic;

menuTitle.className = "menu-title";
menuTitle.textContent = "Menu";

seperate2.appendChild(LuckyLogo2);
seperate2.appendChild(menuTitle);

const menuContainer = document.createElement('div');

menuContainer.className = 'menu-items';

// Menu 

const menuItems = {
    burgers: [
        { name: 'Classic Cheeseburger', price: '$8.99' },
        { name: 'Bacon BBQ Burger', price: '$10.49' },
        { name: 'Veggie Burger', price: '$9.49' },
        { name: 'Spicy Jalapeño Burger', price: '$10.99' },
        { name: 'Double Bacon Smash', price: '$12.99' },
        { name: 'Mushroom & Swiss Melt', price: '$10.79' }
    ],
    sides: [
        { name: 'French Fries', price: '$2.99' },
        { name: 'Onion Rings', price: '$3.99' },
        { name: 'Sweet Potato Fries', price: '$3.49' },
        { name: 'Mozzarella Sticks', price: '$5.99' },
        { name: 'Deep Fried Pickles', price: '$4.89' },
        { name: 'Mac & Cheese Bites', price: '$3.89' }
    ],
    salads: [
        { name: 'Caesar Salad', price: '$6.99' },
        { name: 'Grilled Chicken Salad', price: '$8.49' },
        { name: 'House Salad', price: '$5.99' },
        { name: 'Cob Salad', price: '$10.79' },
        { name: 'Everything Bagel Salad', price: '$8.79' },
        { name: 'Add Chicken', price: '$4.57' }
    ],
    kids: [
        { name: 'Kids Cheeseburger', price: '$5.99' },
        { name: 'Chicken Tenders', price: '$5.49' },
        { name: 'Mini Corn Dogs', price: '$4.99' },
        { name: 'Mac & Cheese', price: '$4.99' },
        { name: 'Dino Nuggets', price: '$4.79' }
    ],
    drinks: [
        { name: 'Soft Drinks', price: '$1.99' },
        { name: 'Lemonade', price: '$2.49' },
        { name: 'Iced Tea', price: '$2.49' },
        { name: 'Milk Shake', price: '$4.99' },
        { name: 'Smoothie', price: '$4.99' }
    ],
    desserts: [
        { name: 'Chocolate Brownie', price: '$3.99' },
        { name: 'Ice Cream Sundae', price: '$4.49' },
        { name: 'Apple Pie', price: '$4.99' },
        { name: 'Cheesecake', price: '$6.99' },
        { name: 'Funnel Cake', price: '$6.79' }
    ]
};


    
    // Helper function to create a category section
    function createCategory(categoryName, items) {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add(categoryName, 'menu-item');

        const heading = document.createElement('h2');
        heading.classList.add('menu-subcat');
        heading.textContent = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

        const ul = document.createElement('ul');

        items.forEach(item => {
            const menuRow = document.createElement('div');
            menuRow.classList.add('menu-row');

            const itemName = document.createElement('li');
            itemName.textContent = item.name;

            const itemPrice = document.createElement('li');
            itemPrice.textContent = item.price;

            menuRow.appendChild(itemName);
            menuRow.appendChild(itemPrice);

            ul.appendChild(menuRow);
        });

        categoryDiv.appendChild(heading);
        categoryDiv.appendChild(ul);
        menuContainer.appendChild(categoryDiv);
        
    }

    // Iterate through the categories and create the menu
    for (const [categoryName, items] of Object.entries(menuItems)) {
        createCategory(categoryName, items);
        
    }
     // Append the full menu to the document body or any container
    

menu.appendChild(seperate2);
menu.appendChild(menuContainer);
    


export default menu;

