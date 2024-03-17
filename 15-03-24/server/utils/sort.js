const sortArray = (arrData, prop, sort) => {
  if (sort === "asc" && prop === "price") {
    return arrData.toSorted((a, b) => a[prop] - b[prop]);
  }

  if (sort === "desc" && prop === "price") {
    return arrData.toSorted((a, b) => b[prop] - a[prop]);
  }

  if (sort === "asc" && (prop === "title" || prop === "description")) {
    return arrData.toSorted((a, b) => a[prop].localeCompare(b[prop]));
  }

  if (sort === "desc" && (prop === "title" || prop === "description")) {
    return arrData.toSorted((a, b) => b[prop].localeCompare(a[prop]));
  }

  return;
};

module.exports = sortArray;
