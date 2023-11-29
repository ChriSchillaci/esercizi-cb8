export const modalGen = (dataApi) => {
  const bgModal = document.createElement("div");
  const modalBox = document.createElement("div");

  const imgWrapper = document.createElement("div");
  const imgEl = document.createElement("img");
  const btnCancel = document.createElement("button");
  const btnsWrapper = document.createElement("div");
  const btnPlay = document.createElement("button");
  const btnPlus = document.createElement("button");

  const movieDescriptionWrapper = document.createElement("div");
  const titleEl = document.createElement("h2");
  const description = document.createElement("p");

  const infoWrapper = document.createElement("div");

  const genre = document.createElement("p");
  const genreList = document.createElement("span");
  const releaseDate = document.createElement("p");
  const year = document.createElement("span");

  bgModal.className = "bg-modal";
  modalBox.className = "modal-box";
  imgWrapper.className = "img-wrapper";
  btnCancel.className = "btn-cancel round-btn";
  btnsWrapper.className = "btns-wrapper";
  btnPlay.className = "btn-play";
  btnPlus.className = "round-btn";

  movieDescriptionWrapper.className = "description-wrapper";

  infoWrapper.className = "info-wrapper";

  imgEl.src = `https://image.tmdb.org/t/p/w780/${dataApi.poster_path}`;
  imgEl.alt = dataApi.name;

  btnCancel.textContent = "x";
  btnPlay.textContent = "Play";
  btnPlus.textContent = "+";

  if (dataApi.hasOwnProperty("title")) {
    titleEl.textContent = dataApi.title;
  } else {
    titleEl.textContent = dataApi.name
  }
  description.textContent = dataApi.overview;

  genreList.textContent = "Language: ";
  genre.textContent = dataApi.original_language;
  year.textContent = "Release date: ";
  if (dataApi.hasOwnProperty('release_date')) {
    releaseDate.textContent = dataApi.release_date;
  } else {
    releaseDate.textContent = dataApi.first_air_date
  }

  btnsWrapper.append(btnPlay, btnPlus);
  imgWrapper.append(imgEl, btnCancel, btnsWrapper);

  movieDescriptionWrapper.append(titleEl, description);

  genre.prepend(genreList);
  releaseDate.prepend(year);
  infoWrapper.append(genre, releaseDate);

  modalBox.append(imgWrapper, movieDescriptionWrapper, infoWrapper);
  bgModal.appendChild(modalBox);

  description.textContent === "" ? description.remove() : null;

  bgModal.addEventListener("click", (e) => {
    e.target === btnCancel || e.target === bgModal ? bgModal.remove() : null;
  });

  return bgModal;
};
