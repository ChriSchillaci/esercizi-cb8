import { getApi } from "./modules/api.js";
import { detailContainerGen, filteredTvSeries } from "./modules/components.js";

const mainEl = document.querySelector("main");
const inputEl = document.querySelector("input");

const searchQuery = new URLSearchParams(location.search);
const getId = searchQuery.get("id");

getApi(`/tv/${getId}?&append_to_response=videos&api_key=API_KEY"`).then(
  (data) => mainEl.appendChild(detailContainerGen(data))
);

inputEl.addEventListener("keyup", filteredTvSeries);
