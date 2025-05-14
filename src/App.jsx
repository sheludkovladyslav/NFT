import "./reset.css";
import "./global.css";
import "./variables.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import authorImg from "./assets/author_img.jpg";
import collectionIcon from "./assets/collection_img.png";
import productImg from "./assets/product-img.jpg";
import { Hotbids } from "./components/Hot-Bids/Hotbids";
import hotbids from "./data/hotbids.json";
import { Academy } from "./components/academy/academy";

function App() {
  return (
    <>
      <Header />
      <Hero
        product={{
          release: "Soon drop",
          date: "Jan 6, 2022",
          img: productImg,
        }}
        author={{
          img: authorImg,
          name: "@jastidesigns",
        }}
        collection={{
          img: collectionIcon,
          name: "Outcrowd",
        }}
      />

      <Hotbids hotbids={hotbids}></Hotbids>
      <Academy></Academy>
    </>
  );
}

export default App;
