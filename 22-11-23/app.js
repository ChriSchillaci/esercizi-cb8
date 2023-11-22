// First/Third exercise
const ulEl = document.querySelector('.card-list')

const renderCard = (dataImg) => {
    const card = document.createElement('li')
    const textWrapper = document.createElement('div')
    const authorName = document.createElement('h3')
    const imgWrapper = document.createElement('div')
    const imgEl = document.createElement('img')

    card.id = parseInt(dataImg.id) + 1
    card.className = 'card'
    textWrapper.className = 'text-wrapper'
    imgWrapper.className= 'img-wrapper'
    authorName.textContent = dataImg.author
    imgEl.src = dataImg.download_url

    textWrapper.appendChild(authorName)
    imgWrapper.appendChild(imgEl)
    card.append(textWrapper, imgWrapper)

    return card
}

const fetchApi = async (baseUrl) => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  data.filter((imgList) => console.log(imgList.download_url));

  data.map(item => ulEl.appendChild(renderCard(item)))
};

fetchApi("https://picsum.photos/v2/list")

// Second exercise

// const fetchApi = async (baseUrl) => {
//   const response = await fetch(baseUrl);
//   const data = await response.json();

//   return data
// };

// fetchApi("https://picsum.photos/v2/list").then(image => ulEl.appendChild(renderCard(image[0])))

