import chef from "./images/Chef.webp";
import LuckyLogo from "./images/LuckyLogo.webp";

const headingrow = document.createElement('div');
headingrow.className = "heading-row";

const Logo = document.createElement('img');
Logo.src = LuckyLogo;
Logo.className = "LuckyLogo2";
Logo.alt = "LuckyLogo";

const aboutHeading = document.createElement('h1');
aboutHeading.className = "aboutHeading";
aboutHeading.textContent = "Lucky's Burgers Origin";

headingrow.appendChild(Logo);
headingrow.appendChild(aboutHeading);

const aboutRow = document.createElement('div')
aboutRow.className = "about-row";

const chefImg = document.createElement('img');
chefImg.src = chef;
chefImg.alt = "Luckys-Chef";
chefImg.className = "chef"


const about = document.createElement('div');
about.className = "about";

const paragraphItems = [
        "In the 1960s, a young immigrant from a small village overseas arrived in Canada with a suitcase full of dreams and a passion for great food. Despite the challenges of starting a new life in a foreign country, he found comfort in cooking the recipes passed down through generations. With a dream to share the flavors of his homeland and create something truly special, he opened a small burger stand on a quiet corner in the heart of the city.",
        "What started as a humble stall quickly became a local favorite, known for its handcrafted burgers, fresh ingredients, and that signature sauce—just like Lucky, the founder, used to make back home. Over the decades, Lucky's Burgers has grown into a beloved part of the community, serving up not just burgers, but a legacyof hard work, family, and the pursuit of a better life.",
        "Today, Lucky’s Burgers is still family-owned, committed to serving the same delicious, high-quality food that Lucky dreamed of when he first arrived in Canada. From our classic burgers to our new menu innovations, every bite is a taste of that original vision.",
        "Welcome to Lucky’s Burgers—where every burger tells a story."
    ]

    


paragraphItems.forEach(item => {
    const paragraph = document.createElement('p')
    paragraph.textContent = item
    about.appendChild(paragraph);
});

aboutRow.appendChild(chefImg);
aboutRow.appendChild(about)

export {aboutRow, headingrow};



