import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import CardList from "./components/cardList/CardList";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const imagesList1 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?1",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?2",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?3",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?4",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?5",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?6",
      title: "Image card",
    },
  ];
  const imagesList2 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?10",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?21",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?31",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?41",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?51",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?61",
      title: "Image card",
    },
  ];

  const imagesGallery = [
    {
      id: 1,
      img: "https://picsum.photos/400/200?71",
      alt: "image gallery",
    },
    {
      id: 2,
      img: "https://picsum.photos/400/200?81",
      alt: "image gallery",
    },
    {
      id: 3,
      img: "https://picsum.photos/400/200?91",
      alt: "image gallery",
    },
    {
      id: 4,
      img: "https://picsum.photos/400/200?101",
      alt: "image gallery",
    },
    {
      id: 5,
      img: "https://picsum.photos/400/200?111",
      alt: "image gallery",
    },
    {
      id: 6,
      img: "https://picsum.photos/400/200?121",
      alt: "image gallery",
    },
    {
      id: 7,
      img: "https://picsum.photos/400/200?131",
      alt: "image gallery",
    },
    {
      id: 8,
      img: "https://picsum.photos/400/200?141",
      alt: "image gallery",
    },
  ];

  const heroData = {
    title: "Lorem, ipsum.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ab!",
    btn: "Click here",
  };

  return (
    <div className="App">
      <NavBar />
      <Hero heroData={heroData} />
      {/* <button>Ciao</button> */}
      {/* <Button textContent="cliccami!" color="white" />
      <Button textContent="Accetta!" />
      <Button textContent="Annulla!" /> */}
      <CardList
        cardListObj={{ title: "Indie movies ecc...", list: imagesList1 }}
      />
      <CardList cardListObj={{ title: "Fantasy", list: imagesList2 }} />
      {/* <CardList cardListObj={{ title: "Sci-Fi" }} />
      <CardList cardListObj={{ title: "Adventure" }} /> */}
      <Gallery imagesGallery={imagesGallery} />
      <Footer />
    </div>
  );
}

export default App;
