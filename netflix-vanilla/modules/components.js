const searchBarGen = () => {
  const searchWrapper = document.createElement("div");
  const logo = document.createElement("img");
  const inputEl = document.createElement("input");

  searchWrapper.className = "search";

  logo.src =
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";
  logo.alt = "netflix-clone-logo";
  inputEl.type = "text";
  inputEl.placeholder = "Search";

  searchWrapper.append(logo, inputEl);

  return searchWrapper;
};

const categoryGen = () => {
  const ulWrapper = document.createElement("div");
  const ulEl = document.createElement("ul");
  const liEl1 = document.createElement("li");
  const liEl2 = document.createElement("li");
  const labelEl = document.createElement("label");
  const selectEl = document.createElement("select");
  const optionEl = document.createElement("option");

  ulWrapper.className = "links";
  ulEl.className = "links-list";

  labelEl.htmlFor = "categories";
  selectEl.name = "categories";
  selectEl.id = "categories";
  optionEl.value = "";

  liEl1.textContent = "TV Shows";
  liEl2.textContent = "Movies";
  labelEl.textContent = "Categories";

  selectEl.appendChild(optionEl);
  ulEl.append(liEl1, liEl2, labelEl, selectEl);
  ulWrapper.appendChild(ulEl);

  return ulWrapper
};

const listsContainerElGen = (title) => {
  const container = document.createElement("div");
  const titleEl = document.createElement("h3");

  container.className = "lists-container";
  titleEl.textContent = title;

  container.append(titleEl);
  return container;
};

const cardsListElGen = () => {
  const container = document.createElement("div");

  container.className = "cards-list";

  return container;
};

const cardElGen = (imageData) => {
  const imageEl = document.createElement("img");

  imageEl.className = "card-item";
  imageEl.src = `https://image.tmdb.org/t/p/w500${imageData.poster_path}`;
  imageEl.alt = imageData.name;
  imageEl.id = imageData.id;

  return imageEl;
};

export { cardElGen, cardsListElGen, listsContainerElGen, searchBarGen, categoryGen };
