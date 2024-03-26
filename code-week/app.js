import { getApi } from "./modules/api.js";
import {
  popularTvSeriesGen,
  tvCardGen,
  filteredTvSeries,
} from "./modules/components.js";

import { closeModal, openModal } from "./utils/modal.js";

getApi("/tv/popular").then((data) =>
  data.results.map((el) => slider.appendChild(tvCardGen(el, "1280")))
);

popularTvSeriesGen("/tv/popular", "Popular TV Series >").then((series) => {
  mainEl.appendChild(series);
  series.addEventListener("click", (e) => {
    e.target.id !== ""
      ? (location.href = `./tv-series.html?id=${e.target.id}`)
      : null;
  });
});

const inputEl = document.querySelector("input");

const slider = document.querySelector(".slider");
const mainEl = document.querySelector("main");

const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

const searchBtn = document.querySelectorAll(".icon")[3];

const modalInput = document.querySelector(".modal-input");

setInterval(() => {
  slider.scrollBy({ left: 1000, behavior: "smooth" });
}, 5000);

btnLeft.addEventListener("click", () => {
  slider.scrollBy({ left: -1000, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  slider.scrollBy({ left: 1000, behavior: "smooth" });
});

searchBtn.addEventListener("click", openModal);
document.body.addEventListener("click", closeModal);

inputEl.addEventListener("keyup", filteredTvSeries);
modalInput.addEventListener("keyup", filteredTvSeries);
