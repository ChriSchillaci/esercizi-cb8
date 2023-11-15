// Nav

const topNav = document.createElement("nav");
const topNavTitle = document.createElement("h1");
const wrapperNavIcons = document.createElement("div");
const topNavIconBg1 = document.createElement("button");
const topNavIconBg2 = document.createElement("button");
const topNavSearch = document.createElement("i");
const topNavCart = document.createElement("i");

topNavTitle.textContent = "Find Best Furnitures";

topNav.className = "top-nav";
wrapperNavIcons.className = "nav-icons";
topNavIconBg1.className = "nav-icons__icon transition-hover";
topNavIconBg2.className = "nav-icons__icon transition-hover";
topNavSearch.className = "fa-solid fa-magnifying-glass";
topNavCart.className = "fa-solid fa-cart-shopping";

topNavIconBg1.appendChild(topNavSearch);
topNavIconBg2.appendChild(topNavCart);
wrapperNavIcons.append(topNavIconBg1, topNavIconBg2);
topNav.append(topNavTitle, wrapperNavIcons);
document.body.append(topNav);

topNavCart.addEventListener('click', () => {
  alert('The products have been purchased')
})

// Buttons

const dataButtons = [
  {
    icon: "fa-solid fa-magnifying-glass",
    text: "All",
  },
  {
    icon: "fa-solid fa-chair",
    text: "Chair",
  },
  {
    icon: "fa-solid fa-bed",
    text: "Bed",
  },
  {
    icon: "fa-solid fa-couch",
    text: "Couch",
  },
  {
    icon: "fa-solid fa-laptop",
    text: "PC",
  },
];

const wrapperButtons = document.createElement("div");
wrapperButtons.className = "category-buttons";

const generateButton = (dataCategory) => {
  const categoryButton = document.createElement("button");
  const iconButton = document.createElement("i");
  const textButton = document.createElement("p");

  categoryButton.className = "category-button transition-hover";
  iconButton.className = dataCategory.icon;
  textButton.textContent = dataCategory.text;

  categoryButton.append(iconButton, textButton);

  return categoryButton;
};

dataButtons.map((item) => wrapperButtons.appendChild(generateButton(item)));
document.body.appendChild(wrapperButtons);

// Section cards

const dataCards = [
  {
    id: Math.floor(Math.random() * 100000),
    name: "christian",
    price: `$${(Math.random() * 100).toFixed(2)}`,
    alt: "random image",
  },
  {
    id: Math.floor(Math.random() * 100000),
    name: "vincenzo",
    price: `$${(Math.random() * 100).toFixed(2)}`,
    alt: "random image",
  },
  {
    id: Math.floor(Math.random() * 100000),
    name: "chiara",
    price: `$${(Math.random() * 100).toFixed(2)}`,
    alt: "random image",
  },
  {
    id: Math.floor(Math.random() * 100000),
    name: "giovanni",
    price: `$${(Math.random() * 100).toFixed(2)}`,
    alt: "random image",
  },
  {
    id: Math.floor(Math.random() * 100000),
    name: "eugenia",
    price: `$${(Math.random() * 100).toFixed(2)}`,
    alt: "random image",
  },
  {
    id: Math.floor(Math.random() * 100000),
    name: "bianca",
    price: `$${(Math.random() * 100).toFixed(2)}`,
    alt: "random image",
  },
];

const gallery = document.createElement("section");
const sectTitle = document.createElement("h3");
const wrapperCards = document.createElement("ul");

wrapperCards.className = "wrapper-cards";

sectTitle.textContent = "Recommended for you";

gallery.append(sectTitle, wrapperCards);
document.body.append(gallery);

const generateCard = (dataCard) => {
  const card = document.createElement("li");
  const wrapperTopCard = document.createElement("div");
  const heartButtonCard = document.createElement("button");
  const heartCard = document.createElement("i");
  const img = document.createElement("img");
  const wrapperBottomCard = document.createElement("div");
  const wrapperTextCard = document.createElement("div");
  const priceCard = document.createElement("p");
  const textCard = document.createElement("p");
  const plusButtonCard = document.createElement("button");
  const plusCard = document.createElement("i");

  card.className = "card";
  wrapperTopCard.className = "wrapper-top";
  heartButtonCard.className = "heart-button";
  heartCard.className = "fa-regular fa-heart";
  wrapperBottomCard.className = "wrapper-bottom";
  wrapperTextCard.className = "wrapper-text";
  plusButtonCard.className = "plus-button";
  plusCard.className = "fa-solid fa-plus";

  priceCard.textContent = dataCard.price;
  textCard.textContent = dataCard.name;

  img.src = `https://robohash.org/${dataCard.name}/?set=set4`;
  img.alt = dataCard.alt;
  card.id = dataCard.id;

  plusButtonCard.appendChild(plusCard);
  wrapperTextCard.append(priceCard, textCard);
  wrapperBottomCard.append(wrapperTextCard, plusButtonCard);
  heartButtonCard.appendChild(heartCard);
  wrapperTopCard.appendChild(heartButtonCard);

  heartButtonCard.addEventListener('click', () => {
    alert('The product has been added to the favourite list')
  })

  card.append(wrapperTopCard, img, wrapperBottomCard);

  return card;
};

try {
  dataCards.map((item) => wrapperCards.appendChild(generateCard(item)));
} catch (e) {
  console.log(e.name + ": " + "Hai scritto qualcosa di brutto nel tuo codice");
}

// Bottom navbar

const dataIcons = [
  {
    icon: "fa-solid fa-house",
  },
  {
    icon: "fa-solid fa-heart",
  },
  {
    icon: "fa-solid fa-cart-shopping",
  },
  {
    icon: "fa-solid fa-user",
  },
];

const wrapperBottomNav = document.createElement('div')
const bottomNav = document.createElement("nav");
wrapperBottomNav.className = 'wrapper-bottom-nav'
bottomNav.className = "bottom-nav";
wrapperBottomNav.appendChild(bottomNav)
document.body.appendChild(wrapperBottomNav);

const generateIcon = (dataIcon) => {
  const bottomNavButton = document.createElement("button");
  const bottomNavIcon = document.createElement("i");

  bottomNavIcon.className = dataIcon.icon;

  bottomNavButton.appendChild(bottomNavIcon)

  return bottomNavButton
};

dataIcons.map(item => bottomNav.appendChild(generateIcon(item)))