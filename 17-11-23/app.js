// First exercise

const showPopUp = () => {
  const popUpBg = document.createElement("div");
  const popUpBox = document.createElement("div");
  const popUpText = document.createElement("p");
  const popUpBtnWrapper = document.createElement("div");
  const popUpBtnConfirm = document.createElement("button");
  const popUpBtnConfirmAnc = document.createElement('a')
  const popUpBtnCancel = document.createElement("button");

  popUpBg.className = "popup-bg";
  popUpBox.className = "popup-box";
  popUpBtnWrapper.className = "popup-btn__wrapper";

  popUpText.textContent = "Are you an adult?";
  popUpBtnConfirm.textContent = "Yes";
  popUpBtnCancel.textContent = "No";

  popUpBtnConfirmAnc.href = 'https://www.google.com/'

  popUpBtnConfirmAnc.appendChild(popUpBtnCancel)
  popUpBtnWrapper.append(popUpBtnConfirm, popUpBtnConfirmAnc);
  popUpBox.append(popUpText, popUpBtnWrapper);
  popUpBg.appendChild(popUpBox);

  popUpBtnConfirm.addEventListener("click", () => {
    popUpBg.remove();
  });

  return popUpBg;
};

setTimeout(() => {
  document.body.appendChild(showPopUp());
}, 3500);

// Second exercise

// This fetch prints the objects that have a price lower than $50. The other keys inside the objects will also get print.

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data.products.filter(el => el.price < 50)));

// This fetch works the same as the above one, but only the key 'price' will get printed.

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data.products.filter(el => el.price < 50).map(item => ({price: item.price}))));

// Alternative method with async-await

  const fetchApi = async () => {
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()
    const arrayFilter = data.products.filter((el) => el.price < 50)
    
    console.log(arrayFilter)
  }
  
  fetchApi()