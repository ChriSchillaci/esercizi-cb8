const listGenerator = (obj) => {
  const liEl = document.createElement("li");
  liEl.textContent = obj.text;
  return liEl;
};

const sectionLarge = (obj) => {
  const { classSec, src, alt, title, text, btnText } = obj;
  const section = document.createElement("section");
  const sectionText = document.createElement("div");
  const sectionTitle = document.createElement("h2");
  const sectionPara = document.createElement("p");
  const sectionBtn = document.createElement("button");
  const sectionImgContainer = document.createElement("div");
  const sectionImg = document.createElement("img");

  section.className = classSec;
  sectionImgContainer.className = "large-image";
  sectionText.className = "section-text";
  sectionBtn.className = "blue-btn";

  sectionTitle.textContent = title;
  sectionPara.textContent = text;
  sectionBtn.textContent = btnText;

  sectionImg.src = src;
  sectionImg.alt = alt;

  sectionText.append(sectionTitle, sectionPara, sectionBtn);
  sectionImgContainer.appendChild(sectionImg);

  section.append(sectionText, sectionImgContainer);

  return section;
};

// Nav

const navLi = [
  {
    text: "Home",
  },
  {
    text: "About",
  },
  {
    text: "Shop",
  },
  {
    text: "Pages",
  },
  {
    text: "Contact",
  },
];

const nav = document.createElement("nav");
const logo = document.createElement("div");
const logoImg = document.createElement("img");
const navUl = document.createElement("ul");
const navBtns = document.createElement("div");
const navBtn1 = document.createElement("button");
const navBtn2 = document.createElement("button");
const navBurger = document.createElement('i')

logo.className = "logo";
navUl.className = "menu";
navBtns.className = "nav-buttons";
navBurger.className = 'menu-burger fa-solid fa-bars'

logoImg.src = "./assets/logoipsum-245.jpg";

navBtn1.textContent = "Sign up";
navBtn2.textContent = "Order now";

logo.appendChild(logoImg);
navLi.map((item) => navUl.appendChild(listGenerator(item)));
navBtns.append(navBtn1, navBtn2);
nav.append(logo, navUl, navBtns, navBurger);
document.body.appendChild(nav);

// End Nav

// 1st Section
const sectionData1 = {
  classSec: "first-section",
  src: "./assets/gift.png",
  alt: "gift",
  title: "Thoughtful Gifting Made Easy",
  text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
    inventore expedita perferendis deleniti magni nesciunt?`,
  btnText: "GET STARTED",
};

document.body.appendChild(sectionLarge(sectionData1));

// End 1st Section

// 2nd Section
const section2Data = [
  {
    src: "./assets/present.png",
    alt: "present",
    title: "Gift Boxes",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
        aliquid deleniti alias!`,
  },
  {
    src: "./assets/home.png",
    alt: "home",
    title: "Gift Boxes",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
        aliquid deleniti alias!`,
  },
  {
    src: "./assets/flowers.png",
    alt: "flowers",
    title: "Gift Boxes",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
        aliquid deleniti alias!`,
  },
];

const section2 = document.createElement("section");
const section2Text = document.createElement("div");
const section2Title = document.createElement("h2");
const section2Para = document.createElement("p");
const section2Boxes = document.createElement("ul");

section2.className = "second-section";
section2Text.className = "second-section__text";
section2Boxes.className = "second-section__boxes";

section2Title.textContent = "Thoughtful Gifting Made Easy";
section2Para.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque qui
distinctio, placeat perspiciatis libero cupiditate nesciunt quo
dolore.`;

const generateBox = (obj) => {
  const { src, alt, title, text } = obj;
  const liEl = document.createElement("li");
  const smallImgContainer = document.createElement("div");
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h3");
  const paraEl = document.createElement("p");

  smallImgContainer.className = "small-image";

  imgEl.src = src;
  imgEl.alt = alt;

  titleEl.textContent = title;
  paraEl.textContent = text;

  smallImgContainer.appendChild(imgEl);
  liEl.append(smallImgContainer, titleEl, paraEl);

  return liEl;
};

section2Text.append(section2Title, section2Para);
section2Data.map((item) => section2Boxes.appendChild(generateBox(item)));
section2.append(section2Text, section2Boxes);

document.body.appendChild(section2);

// End 2nd Section

// 3rd Section

const section3Data = {
  classSec: "third-section",
  src: "./assets/gifts.png",
  alt: "gifts",
  title: "Corporate Gifting",
  text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
        doloremque molestias unde porro, aperiam asperiores fugit
        reprehenderit officiis accusantium eos!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        fugiat incidunt, expedita ut sint distinctio nostrum ea natus.`,
  btnText: "READ MORE",
};

document.body.append(sectionLarge(section3Data));

// End 3rd Section

// Banner

const banner = document.createElement("div");
const bannerTitle = document.createElement("h2");

banner.className = "middle-bar";

bannerTitle.textContent = "We're trusted by clients.";

banner.appendChild(bannerTitle);

document.body.appendChild(banner);

// End Banner

// 4th Section

const section4Data = {
  classSec: "fourth-section",
  src: "./assets/gift-box.png",
  alt: "giftbox",
  title: "Personal Gifting",
  text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum aut
        totam nam repellendus minus, quasi sit assumenda cum hic
        reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ad
        provident esse ipsum! Rerum a necessitatibus beatae aliquid.`,
  btnText: "LEARN MORE",
};

document.body.appendChild(sectionLarge(section4Data));

// End 4th Section

// 5th Section

const section5Data = [
  {
    src: "./assets/blog-gift1.jpg",
    alt: "blog-gift1",
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, consectetur.`,
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Perspiciatis impedit dolore, aliquid accusamus quibusdam iusto quo
    odio placeat. Suscipit esse cumque optio, culpa omnis repellat`,
  },
  {
    src: "./assets/blog-gift2.jpg",
    alt: "blog-gift2",
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, consectetur.`,
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Perspiciatis impedit dolore, aliquid accusamus quibusdam iusto quo
    odio placeat. Suscipit esse cumque optio, culpa omnis repellat`,
  },
  {
    src: "./assets/blog-gift3.jpg",
    alt: "blog-gift3",
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, consectetur.`,
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Perspiciatis impedit dolore, aliquid accusamus quibusdam iusto quo
    odio placeat. Suscipit esse cumque optio, culpa omnis repellat`,
  },
];

const section5 = document.createElement("section");
const section5TextContainer = document.createElement("div");
const section5Title = document.createElement("h2");
const section5Para = document.createElement("p");
const section5Cards = document.createElement("ul");

section5.className = "fifth-section";
section5TextContainer.className = "fifth-section__text";
section5Cards.className = "fifth-section__cards";

section5Title.textContent = 'Our Blog'
section5Para.textContent = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
obcaecati explicabo maxime quod.`

const generateCard = (obj) => {
  const { src, alt, title, text } = obj;
  const liEl = document.createElement("li");
  const mediumImgContainer = document.createElement("div");
  const imgEl = document.createElement("img");
  const textContainer = document.createElement("div");
  const titleEl = document.createElement("h3");
  const paraEl = document.createElement("p");
  const buttonEl = document.createElement("button");

  mediumImgContainer.className = "medium-image";
  textContainer.className = "fifth-section__text-image";

  imgEl.src = src;
  imgEl.alt = alt;

  titleEl.textContent = title;
  paraEl.textContent = text;
  buttonEl.textContent = "Read More →";

  mediumImgContainer.appendChild(imgEl);
  textContainer.append(titleEl, paraEl, buttonEl);
  liEl.append(mediumImgContainer, textContainer);

  return liEl;
};

section5TextContainer.append(section5Title, section5Para);
section5Data.map((item) => section5Cards.appendChild(generateCard(item)));

section5.append(section5TextContainer, section5Cards);
document.body.appendChild(section5);

// End 5th Section

const section6Data = [
  {
    placeholder1: "First Name",
    placeholder2: "Last Name",
  },
  {
    placeholder1: "Email",
    placeholder2: "Subject",
  },
];

const section6 = document.createElement("section");
const section6TextContainer = document.createElement("div");
const section6Title = document.createElement("h2");
const section6Para = document.createElement("p");
const section6Form = document.createElement("form");
const section6Textarea = document.createElement("textarea");
const section6Btn = document.createElement("button");

section6.className = "sixth-section";
section6TextContainer.className = "section-text";
section6Form.className = "sixth-section__form";
section6Btn.className = "blue-btn";

section6Textarea.cols = "30";
section6Textarea.rows = "10";
section6Textarea.placeholder = "Your Message...";

section6Title.textContent = "Contact Us";
section6Para.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, quae.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
officiis aspernatur nam nihil ullam.`;
section6Btn.textContent = "Submit";

const generateInput = (obj) => {
  const { placeholder1, placeholder2 } = obj;
  const inputsContainer = document.createElement("div");
  const input1 = document.createElement("input");
  const input2 = document.createElement("input");

  inputsContainer.className = "sixth-section__inputs";

  input1.type = "text";
  input2.type = "text";
  input1.placeholder = placeholder1;
  input2.placeholder = placeholder2;

  inputsContainer.append(input1, input2);

  return inputsContainer;
};

section6TextContainer.append(section6Title, section6Para);
section6Data.map((item) => section6Form.appendChild(generateInput(item)));
section6Form.append(section6Textarea, section6Btn);

section6.append(section6TextContainer, section6Form);

document.body.appendChild(section6);

// End 6th Section

const footerData = [
  {
    title: "Company",
    text1: "Blog",
    text2: "About Us",
    text3: "Download",
  },
  {
    title: "Parthner",
    text1: "Sell On Gifting",
    text2: "Corporate Gifting",
    text3: "Press",
  },
  {
    title: "Help",
    text1: "Contact Us",
    text2: "Lorem, ipsum",
    text3: "FAQ",
  },
];

const footer = document.createElement("footer");
const footerTextContainer = document.createElement("div");
const footerTitle = document.createElement("h3");
const footerPara = document.createElement("p");

footerTextContainer.className = "footer-giftly";

footerTitle.textContent = "Giftly";
footerPara.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
ducimus. Lorem ipsum dolor`;

const generateInfo = (obj) => {
  const { title, text1, text2, text3 } = obj;
  const ulEl = document.createElement("ul");
  const liTitle = document.createElement("li");
  const titleEl = document.createElement("h4");
  const liEl1 = document.createElement("li");
  const liEl2 = document.createElement("li");
  const liEl3 = document.createElement("li");
  const aEl1 = document.createElement("a");
  const aEl2 = document.createElement("a");
  const aEl3 = document.createElement("a");

  ulEl.className = "infos";

  titleEl.textContent = title;
  aEl1.textContent = text1;
  aEl2.textContent = text2;
  aEl3.textContent = text3;

  aEl1.href = "https://www.google.com/";
  aEl2.href = "https://www.google.com/";
  aEl3.href = "https://www.google.com/";

  liTitle.appendChild(titleEl);
  liEl1.appendChild(aEl1);
  liEl2.appendChild(aEl2);
  liEl3.appendChild(aEl3);
  ulEl.append(liTitle, liEl1, liEl2, liEl3);

  return ulEl;
};

const generateLastInfo = () => {
  const ulEl = document.createElement("ul");
  const liEl1 = document.createElement("li");
  const liEl2 = document.createElement("li");
  const liEl3 = document.createElement("li");
  const liEl4 = document.createElement("li");
  const liTitle = document.createElement("h4");
  const inputEl = document.createElement("input");
  const iconEl1 = document.createElement("i");
  const iconEl2 = document.createElement("i");
  const iconEl3 = document.createElement("i");

  ulEl.className = "infos";

  liTitle.textContent = "Newsletter";
  liEl2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing.";
  iconEl1.textContent = "📫";
  iconEl2.textContent = "💼";
  iconEl3.textContent = "🖋️";

  inputEl.type = "text";
  inputEl.placeholder = "Your Email";

  liEl1.appendChild(liTitle);
  liEl3.appendChild(inputEl);
  liEl4.append(iconEl1, iconEl2, iconEl3);

  ulEl.append(liEl1, liEl2, liEl3, liEl4);

  return ulEl;
};

footerTextContainer.append(footerTitle, footerPara);
footer.append(footerTextContainer);
footerData.map((item) => footer.appendChild(generateInfo(item)));
footer.appendChild(generateLastInfo());
document.body.appendChild(footer);