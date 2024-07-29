// data for the cards in each category
const categories = {
    all: [
        { image: 'Images/greenDetox.jpg', hoverImage: 'Images/greenDetox2.jpg' , title: 'Green Detox Drink', 
            link: 'https://cs-oars-1.myshopify.com/collections/all-collections/products/green-detox-drink' , 
            price: 'From $10.00' , labels: ['New' , 'Hot'] },
        { image: 'Images/greenPeppercorn0.jpg', hoverImage: 'Images/green-peppercorn.jpg', title: 'Green Peppercorn', 
            link: 'https://cs-oars-1.myshopify.com/collections/all-collections/products/green-peppercorn' , 
            price: 'From $10.00' },
        { image: 'Images/green-peppercorn3.jpg', hoverImage: null , title: 'Green Peppercorn', 
            link: 'https://cs-oars-1.myshopify.com/collections/all-collections/products/green-peppercorn-1' , 
            price: '$100.00' },
        { image: 'Images/Peppercorn.jpg', hoverImage: null , title: 'Green Peppercorn', 
            link: 'https://cs-oars-1.myshopify.com/collections/all-collections/products/copy-of-fresh-tomatoesgreen-peppercorn' , 
            price: '$100.00' },
        { image: 'Images/Mushroom.jpg', hoverImage: 'Images/mushroom-hover.webp' , title: 'Organic Mushroom', 
            link: 'https://cs-oars-1.myshopify.com/collections/all-collections/products/organic-mushroom' , 
            price: '$10.00' , disscount: '$20.00' , labels: ['-50%'] },
        { image: 'Images/corn.webp', hoverImage: null, title: 'Vegetable Smoothie', 
            link: 'https://cs-oars-1.myshopify.com/collections/all-collections/products/vegetable-smoothie' , 
            price: '$100.00' },
        { image: 'Images/simple-aineapple-juice.webp', hoverImage: null , title: 'Simple Aineapple Juice', 
            link: 'https://cs-oars-1.myshopify.com/collections/all-collections/products/simple-aineapple-juice' , 
            price: '$100.00' , disscount: '$200.00', labels: ['-50%' , 'New'] },
        { image: 'Images/purple-cabbage.jpg', hoverImage: null , title: 'Purple Cabbage', 
            link: 'https://cs-oars-1.myshopify.com/collections/all-collections/products/purple-cabbage-1' , 
            price: '$100.00' , labels: ['New'] },
    ],
    smothie: [
        { image: 'Images/vegetable.webp', hoverImage: 'Images/vegetableSmoothie.webp' , title: 'Vegetable Smoothie', 
            link: 'https://cs-oars-1.myshopify.com/collections/smoothie/products/vegetable-smoothie-2' , 
            price: '$41.00' , disscount: '$50.00' , labels: ['-18%' , 'Best'] },
        { image: 'Images/DetoxFreshMangoJuice.webp', hoverImage: 'Images/DetoxFreshMangoJuice2.jpg', title: 'Detox Fresh Mango Juice', 
            link: 'https://cs-oars-1.myshopify.com/collections/smoothie/products/detox-fresh-mango-juice' , 
            price: 'From $10.00' , labels: ['Hot'] },
        { image: 'Images/pinaple.webp', hoverImage: null , title: 'Simple Aineapple Juice', 
            link: 'https://cs-oars-1.myshopify.com/collections/smoothie/products/simple-aineapple-juice-1' , 
            price: '$100.00' },
        { image: 'Images/VegetableSmoothie.jpg', hoverImage: 'Images/str.jpg' , title: 'Vegetable Smoothie', 
            link: 'https://cs-oars-1.myshopify.com/collections/smoothie/products/vegetable-smoothie-1' , 
            price: '$41.00' , disscount: '$50.00' , labels: ['-18%' , 'Best'] },
        { image: 'Images/Blueberries.jpg', hoverImage: 'Images/Blueberries2.webp' , title: 'Fresh Detox Blueberries', 
            link: 'https://cs-oars-1.myshopify.com/collections/smoothie/products/fresh-detox-blueberries-1' , 
            price: `From $10.00` , labels: ['Best'] },
        { image: 'Images/green.webp', hoverImage: 'Images/green2.webp', title: 'Green Detox Drink', 
            link: 'https://cs-oars-1.myshopify.com/collections/smoothie/products/green-detox-drink-1' , 
            price: 'From $10.00' },
        { image: 'Images/icecream.webp', hoverImage: 'Images/iceCream2.webp' , title: 'Whipped Cream With Strawberry', 
            link: 'https://cs-oars-1.myshopify.com/collections/smoothie/products/organic-mushroom-2c' , 
            price: `$100.00` , disscount: '$200.00' , labels: ['-50%'] },
        { image: 'Images/Isolated.webp', hoverImage: 'Images/Isolated2.webp' , title: 'Colorful Popsicles Isolated', 
            link: 'https://cs-oars-1.myshopify.com/collections/smoothie/products/organic-mushroomc' , 
            price: 'From $10.00' , disscount: '$20.00' , labels: ['-50%' , 'New'] },
    ],
    juice: [
        { image: 'Images/DetoxFreshMangoJuice.webp', hoverImage: 'Images/DetoxFreshMangoJuice2.jpg', title: 'Detox Fresh Mango Juice', 
            link: 'https://cs-oars-1.myshopify.com/collections/smoothie/products/detox-fresh-mango-juice' , 
            price: 'From $10.00' , labels: ['Hot'] },
        { image: 'Images/pinaple.webp', hoverImage: null , title: 'Simple Aineapple Juice', 
            link: 'https://cs-oars-1.myshopify.com/collections/smoothie/products/simple-aineapple-juice-1' , 
            price: '$100.00' },
        { image: 'Images/kiwi.webp', hoverImage: null , title: 'Fresh Kiwi Smoothie', 
            link: 'https://cs-oars-1.myshopify.com/collections/juices/products/fresh-kiwi-smoothie' , 
            price: '$100.00' },
        { image: 'Images/VegetableSmoothie.jpg', hoverImage: 'Images/str.jpg' , title: 'Vegetable Smoothie', 
            link: 'https://cs-oars-1.myshopify.com/collections/smoothie/products/vegetable-smoothie-1' , 
            price: '$41.00' , disscount: '$50.00' , labels: ['-18%' , 'Best'] },
        { image: 'Images/green.webp', hoverImage: 'Images/green2.webp', title: 'Green Detox Drink', 
            link: 'https://cs-oars-1.myshopify.com/collections/smoothie/products/green-detox-drink-1' , 
            price: 'From $10.00' },
        { image: 'Images/Isolated.webp', hoverImage: 'Images/Cappuccino2.webp' , title: 'Cappuccino Ice Cream', 
            link: 'https://cs-oars-1.myshopify.com/collections/juices/products/banana-blossomsc' , 
            price: 'From $10.00' , disscount: '$20.00' , labels: ['-50%'] },
        { image: 'Images/vegetable.webp', hoverImage: 'Images/vegetableSmoothie.webp' , title: 'Vegetable Smoothie', 
            link: 'https://cs-oars-1.myshopify.com/collections/smoothie/products/vegetable-smoothie-2' , 
            price: '$41.00' , disscount: '$50.00' , labels: ['-18%' , 'Best'] },
        { image: 'Images/kiwii.webp', hoverImage: null , title: 'Simple Kiwi Juice', 
            link: 'https://cs-oars-1.myshopify.com/collections/juices/products/simple-kiwi-juice' , 
            price: '$100.00' },
    ],
    vegetables: [
        { image: 'Images/greenPeppercorn0.jpg', hoverImage: 'Images/green-peppercorn.jpg', title: 'Green Peppercorn', 
            link: 'https://cs-oars-1.myshopify.com/collections/all-collections/products/green-peppercorn' , 
            price: 'From $10.00' },
        { image: 'Images/Blossoms.jpg', hoverImage: 'Images/Blossoms2.webp', title: 'Banana Blossoms', 
            link: 'https://cs-oars-1.myshopify.com/collections/vegetables/products/banana-blossoms' , 
            price: 'From $10.00' , disscount: '$20.00' , labels: ['-50%'] },
        { image: 'Images/Cabbage.webp', hoverImage: null , title: 'Purple Cabbage', 
            link: 'https://cs-oars-1.myshopify.com/collections/vegetables/products/purple-cabbage' , 
            price: 'From $10.00' , disscount: '$20.00' , labels: ['-50%'] },
        { image: 'Images/Pomegranate.jpg', hoverImage: 'Images/Pomegranate2.webp' , title: 'Pomegranate Juice', 
            link: 'https://cs-oars-1.myshopify.com/collections/vegetables/products/pomegranate-juice' , 
            price: 'From $10.00' , disscount: '$20.00' , labels: ['-50%']},
        { image: 'Images/greenDetox.jpg', hoverImage: 'Images/greenDetox2.jpg' , title: 'Green Detox Drink', 
            link: 'https://cs-oars-1.myshopify.com/collections/all-collections/products/green-detox-drink' , 
            price: 'From $10.00' , labels: ['New' , 'Hot'] },
        { image: 'Images/fresh.jpg', hoverImage: null , title: 'Fresh Tomatoes', 
            link: 'https://cs-oars-1.myshopify.com/collections/tea/products/fresh-tomatoes-1' , 
            price: '$100.00' , disscount: '$200.00', labels: ['-50%' , 'New'] },
        { image: 'Images/purple-cabbage.jpg', hoverImage: null , title: 'Purple Cabbage', 
            link: 'https://cs-oars-1.myshopify.com/collections/all-collections/products/purple-cabbage-1' , 
            price: '$100.00' },
        { image: 'Images/banana.jpg', hoverImage: null , title: 'Banana Blossoms', 
            link: 'https://cs-oars-1.myshopify.com/collections/vegetables/products/banana-blossoms-1' , 
            price: `$100.00` },
    ],
    tea: [
        { image: 'Images/icecream.webp', hoverImage: 'Images/iceCream2.webp' , title: 'Whipped Cream With Strawberry', 
            link: 'https://cs-oars-1.myshopify.com/collections/smoothie/products/organic-mushroom-2c' , 
            price: `$100.00` , disscount: '$200.00' , labels: ['-50%'] },
        { image: 'Images/greenDetox.jpg', hoverImage: 'Images/greenDetox2.jpg' , title: 'Green Detox Drink', 
            link: 'https://cs-oars-1.myshopify.com/collections/all-collections/products/green-detox-drink' , 
            price: 'From $10.00' , labels: ['New' , 'Hot'] },
        { image: 'Images/fresh.jpg', hoverImage: null , title: 'Fresh Tomatoes', 
            link: 'https://cs-oars-1.myshopify.com/collections/tea/products/fresh-tomatoes-1' , 
            price: '$100.00' , disscount: '$200.00', labels: ['-50%' , 'New'] },
        { image: 'Images/tomato.jpg', hoverImage: null , title: 'Fresh Tomatoes', 
            link: 'https://cs-oars-1.myshopify.com/collections/tea/products/purple-cabbage-2' , 
            price: '$100.00' , disscount: '$20.00', labels: ['-50%'] },
        { image: 'Images/purple-cabbage.jpg', hoverImage: null , title: 'Purple Cabbage', 
            link: 'https://cs-oars-1.myshopify.com/collections/all-collections/products/purple-cabbage-1' , 
        price: '$100.00' , labels: ['New'] },
        { image: 'Images/banana.jpg', hoverImage: null , title: 'Banana Blossoms', 
            link: 'https://cs-oars-1.myshopify.com/collections/vegetables/products/banana-blossoms-1' , 
            price: `$100.00` },
        { image: 'Images/corn.webp', hoverImage: null, title: 'Vegetable Smoothie', 
            link: 'https://cs-oars-1.myshopify.com/collections/all-collections/products/vegetable-smoothie' , 
            price: '$100.00' },
        { image: 'Images/greenPeppercorn0.jpg', hoverImage: 'Images/green-peppercorn.jpg', title: 'Green Peppercorn', 
            link: 'https://cs-oars-1.myshopify.com/collections/all-collections/products/green-peppercorn' , 
            price: 'From $10.00' },
    ]
};

// create a card template
function createCard(title, price, disscount, image, hoverImage, link, labels) {
    const card = document.createElement('div');
    card.className = 'card';

    // create image of card
    const imgContainer = document.createElement('div');
    imgContainer.className = 'images-container';
    imgContainer.style.backgroundImage = `url(${image})`;

    // create hover image optional
    if (hoverImage) {
        const hoverImg = document.createElement('div');
        hoverImg.className = 'hover-image';
        hoverImg.style.backgroundImage = `url(${hoverImage})`;
        imgContainer.appendChild(hoverImg);
    }

    // create label => new, hot, best, disscount
    if (labels && labels.length > 0) {
        labels.forEach(label => {
            const labelSpan = document.createElement('span');
            labelSpan.className = `${label.toLowerCase()}-span`; // Convert label to lowercase and add '-span'
            labelSpan.textContent = label.replace(/([A-Z])/g, ' $1').trim(); // Convert class name to readable label
            imgContainer.appendChild(labelSpan);
        });
    }

    card.appendChild(imgContainer);

    // create icons container
    const iconsContainer = document.createElement('div');
    iconsContainer.className = 'icons-container';

    const iconPaths = [
        "Images/shopping-cart.png", 
        "Images/search.png",        
        "Images/heart.png",         
        "Images/recycle.png"        
    ];

    iconPaths.forEach((path, index) => {
        const iconLink = document.createElement('a');
        iconLink.href = '#'; // Replace with actual URLs if needed
        iconLink.target = '_blank';
        iconLink.className = 'icon-link';

        const iconImage = document.createElement('img');
        iconImage.src = path;
        iconImage.alt = `Icon ${index + 1}`;
        
        iconLink.appendChild(iconImage);
        iconsContainer.appendChild(iconLink);
    });

    card.appendChild(iconsContainer);


    // create content container
    const contentContainer = document.createElement('div');
    contentContainer.className = 'content-container';
    card.appendChild(contentContainer);

    // create title of card as link
    const cardTitle = document.createElement('h3');
    const cardLink = document.createElement('a');
    cardLink.href = link;
    cardLink.textContent = title;
    cardLink.target = "_blank"; // Opens the link in a new tab
    cardTitle.appendChild(cardLink);
    contentContainer.appendChild(cardTitle);

    // create price of item
    const cardPrice = document.createElement('p');
    cardPrice.textContent = price;
    contentContainer.appendChild(cardPrice);

    // create price del disscount
    const cardPriceDisscount = document.createElement('p');
    cardPriceDisscount.textContent = disscount;
    cardPriceDisscount.className = 'price-disscount';
    cardPrice.appendChild(cardPriceDisscount);

    const cardContainer = document.getElementById('card-container');
    cardContainer.appendChild(card);
}

// display cards based on selected category
function displayCards(category) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ''; // Clear existing cards

    const cards = categories[category] || [];
    cards.forEach(card => {
        createCard(card.title, card.price, card.disscount, card.image, card.hoverImage, card.link, card.labels);
    });
}

// Event listener for category selection
document.getElementById('feature-products-categories').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        // add 'active' class from all categories
        document.querySelectorAll('#feature-products-categories li').forEach(li => {
            li.classList.remove('active');
        });
        // add 'active' class to the clicked category
        event.target.classList.add('active');
        // display the cards for the selected category
        displayCards(event.target.id);
    }
});

// default category
displayCards('all');