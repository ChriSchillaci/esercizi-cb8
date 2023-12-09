import { getApi } from "./api.js";

const tvContainerGen = (data) => {
  const container = document.createElement("div");
  const categoryTv = document.createElement("h3");

  container.className = "tv-container";

  categoryTv.textContent = data;

  container.appendChild(categoryTv);

  return container;
};

const tvCardsListGen = () => {
  const container = document.createElement("div");

  container.className = "tv-list";

  return container;
};

const tvCardGen = (data, width, imgType) => {
  const imgEl = document.createElement("img");

  imgEl.id = data.id;
  if (imgType === "poster") {
    imgEl.src = `https://image.tmdb.org/t/p/w${width}${data.poster_path}`;
  } else {
    imgEl.src = `https://image.tmdb.org/t/p/w${width}${data.backdrop_path}`;
  }
  imgEl.alt = data.name;
  imgEl.title = data.name;

  return imgEl;
};

const popularTvSeriesGen = async (endpoint, category, imgType) => {
  const data = await getApi(endpoint);

  const tvContainerGenEl = tvContainerGen(category);
  const tvCardsListGenEl = tvCardsListGen();

  data.results.map((el) =>
    tvCardsListGenEl.appendChild(tvCardGen(el, "780", imgType))
  );

  tvContainerGenEl.appendChild(tvCardsListGenEl);

  return tvContainerGenEl;
};

const detailContainerGen = (data) => {
  const detailContainer = document.createElement("div");

  const detail = document.createElement("div");

  const titleEl = document.createElement("h1");
  const detailTv = document.createElement("div");
  const rating = document.createElement("p");
  const releaseDate = document.createElement("p");
  const seasons = document.createElement("p");

  const overview = document.createElement("p");

  const btnsContainer = document.createElement("div");
  const btnPlay = document.createElement("button");
  const iconPlay = document.createElement("i");
  const btnWatchList = document.createElement("button");

  const genresContainer = document.createElement("div");
  const genreEl = document.createElement("h3");
  const genres = document.createElement("p");

  const videoWrapper = document.createElement("div");
  const videoEl = document.createElement("iframe");

  detailContainer.className = "detail-container";

  detail.className = "detail";

  detailTv.className = "detail-tv";

  overview.className = "overview";

  btnsContainer.className = "btns-container";
  iconPlay.className = "bi bi-play-fill";

  genresContainer.className = "genres-container";

  titleEl.textContent = data.name;

  rating.textContent = `⭐(${Math.floor(data.popularity)})`;
  releaseDate.textContent = data.first_air_date.split("-")[0];
  seasons.textContent = `${data.seasons.length} Seasons `;

  overview.textContent = data.overview;

  btnPlay.textContent = "Watch now";
  btnWatchList.textContent = "Add to WatchList";

  genreEl.textContent = "Genres";
  genres.textContent = data.genres.map((genre) => genre.name).join(", ");

  if (!data.videos.results.length) {
    videoEl.src = `https://www.youtube.com/embed/99m-p5KsPxI`;
  } else {
    videoEl.src = `https://www.youtube.com/embed/${data.videos.results[0].key}`;
  }

  btnPlay.appendChild(iconPlay);

  detailTv.append(rating, releaseDate, seasons);
  btnsContainer.append(btnPlay, btnWatchList);
  genresContainer.append(genreEl, genres);

  detail.append(titleEl, detailTv, overview, btnsContainer, genresContainer);
  videoWrapper.appendChild(videoEl);

  detailContainer.append(detail, videoEl);

  return detailContainer;
};

const filteredTvSeries = (e) => {
  e.key === "Enter"
    ? (location.href = `./tv-series-search.html?filter=${e.target.value}`)
    : null;
};

export { tvCardGen, popularTvSeriesGen, detailContainerGen, filteredTvSeries };
