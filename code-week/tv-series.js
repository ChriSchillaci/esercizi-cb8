import { getApi } from "./modules/api.js";
import { detailContainerGen, filteredTvSeries } from "./modules/components.js";
import { closeModal, openModal } from "./utils/modal.js";

const mainEl = document.querySelector("main");
const inputEl = document.querySelector("input");

const searchBtn = document.querySelectorAll(".icon")[3];
const modalInput = document.querySelector(".modal-input");

const searchQuery = new URLSearchParams(location.search);
const getId = searchQuery.get("id");

getApi(`/tv/${getId}?&append_to_response=videos&api_key=API_KEY"`).then(
  (data) => mainEl.appendChild(detailContainerGen(data))
);

searchBtn.addEventListener("click", openModal);
document.body.addEventListener("click", closeModal);

inputEl.addEventListener("keyup", filteredTvSeries);
modalInput.addEventListener("keyup", filteredTvSeries);
