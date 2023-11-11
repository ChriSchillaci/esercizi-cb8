// First exercise

const hero = document.createElement("section");
const heroBtn = document.createElement("button");
heroBtn.textContent = "Click me";

const heroSection = () => {

  //Created elements
  const heroText = document.createElement("div");
  const title = document.createElement("h1");
  const paragraph = document.createElement("p");

  //Attributes set
  hero.setAttribute("class", "hero");
  heroText.setAttribute("class", "hero-text");

  // Text added
  title.textContent = "Lorem ipsum";
  paragraph.textContent = "Lorem ipsum dolor sit amet consectetur.";

  // Appended the elements to the hero section
  heroText.append(title, paragraph, heroBtn);
  hero.append(heroText);

  // Hero section ready to be appended
  return hero
};

// Hero section appended
document.body.append(heroSection());

//Second exercise

const containerDispBtn = document.createElement("div");
containerDispBtn.classList.add("container-disp-btn");

const displayBtn = document.createElement("button");
displayBtn.textContent = "display hero";

containerDispBtn.append(displayBtn);
document.body.prepend(containerDispBtn);

// Hero section set to display none upon click and a different button gets displayed
heroBtn.addEventListener("click", () => {
  hero.classList.add('active')
  containerDispBtn.classList.add('active')
});

// This button does the opposite 
displayBtn.addEventListener("click", () => {
  containerDispBtn.classList.remove('active')
  hero.classList.remove('active')
});

//Advanced exercise

const dataImg = [
  {
    id: Math.floor(Math.random() * 100000),
    src: "https://picsum.photos/200/200?1",
    alt: "Immagine alternativa 1",
  },
  {
    id: Math.floor(Math.random() * 100000),
    src: "https://picsum.photos/200/200?2",
    alt: "Immagine alternativa 2",
  },
  {
    id: Math.floor(Math.random() * 100000),
    src: "https://picsum.photos/200/200?3",
    alt: "Immagine alternativa 3",
  },
  {
    id: Math.floor(Math.random() * 100000),
    src: "https://picsum.photos/200/200?4",
    alt: "Immagine alternativa 4",
  },
  {
    id: Math.floor(Math.random() * 100000),
    src: "https://picsum.photos/200/200?5",
    alt: "Immagine alternativa 5",
  },
  {
    id: Math.floor(Math.random() * 100000),
    src: "https://picsum.photos/200/200?6",
    alt: "Immagine alternativa 6",
  },
  {
    id: Math.floor(Math.random() * 100000),
    src: "https://picsum.photos/200/200?7",
    alt: "Immagine alternativa 7",
  },
  {
    id: Math.floor(Math.random() * 100000),
    src: "https://picsum.photos/200/200?8",
    alt: "Immagine alternativa 8",
  },
  {
    id: Math.floor(Math.random() * 100000),
    src: "https://picsum.photos/200/200?9",
    alt: "Immagine alternativa 9",
  },
  {
    id: Math.floor(Math.random() * 100000),
    src: "https://picsum.photos/200/200?10",
    alt: "Immagine alternativa 10",
  },
];

// First method(hard way)

// Function that creates a card
// const generateImg = (elAttributes) => {
//   const card = document.createElement("div");
//   const img = document.createElement("img");
//   card.setAttribute('class', 'card')
//   // object.keys takes the object as parameter and return an array with keys objects. [id, src, alt]
//   Object.keys(elAttributes).forEach((attr) => {
//     console.log(attr);
//     console.log(elAttributes[attr]);
//     // attr = id, src, alt
//     // elAttributes[attr] = 321332, "https://picsum.photos/200/200?10", "Immagine alternativa 10"
//     img.setAttribute(attr, elAttributes[attr]);
//   });

//   card.append(img);

//   return card;
// };

// const loopGenerateImg = (arr) => {
//   const gallery = document.createElement("section");
//   gallery.setAttribute("class", "gallery");
//   document.body.append(gallery);

//   //this for loop calls the function generateImg 10 times with 10 different objects
//   for (let i = 0; i < arr.length; i++) {
//     gallery.append(generateImg(arr[i]));
//   }
// };

// loopGenerateImg(dataImg);

//Second method(easy way)

// Section element created and appended to the body
const gallery = document.createElement("section");
gallery.setAttribute("class", "gallery");
document.body.append(gallery);

// Function that creates a card
const generateImg = ({ id, src, alt }) => {
  const card = document.createElement("div");
  const img = document.createElement("img");
  card.setAttribute("class", "card");
  img.setAttribute("id", id);
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  card.append(img);
  gallery.append(card);

  return card;
};

dataImg.map((item) => {
  // I get the keys from item by using destructuring
  const { id, src, alt } = item; 
  // The map method calls the function generateImg 10 times with 10 different objects
  return generateImg({ id, src, alt });
});