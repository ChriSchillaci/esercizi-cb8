import { popularTvSeriesGen, filteredTvSeries } from "./modules/components.js";

const searchQuery = new URLSearchParams(location.search);
const getFilter = searchQuery.get("filter");

const mainEl = document.querySelector("main");
const inputEl = document.querySelector("input");

popularTvSeriesGen(
  `/search/tv?query=${getFilter}&api_key=API_KEY`,
  "Were you looking for this?",
  "poster"
).then((el) => {
  mainEl.appendChild(el);
  const elList = document.querySelector(".tv-list");
  if (!elList.childNodes.length) {
    mainEl.textContent = "No TV Series Found :(";
    mainEl.classList.add("active");
  } else {
    mainEl.classList.remove("active");
  }
  el.addEventListener("click", (e) => {
    e.target.id !== ""
      ? (location.href = `./tv-series.html?id=${e.target.id}`)
      : null;
  });
});

inputEl.addEventListener("keyup", filteredTvSeries);
