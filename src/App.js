import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components";
import { Boxes } from "./components/Styled";
import { useState } from "react";
import { CardData } from "./components/Data/CardsData";
import BoxList from "./components/BoxList";
import BoxItem from "./components/BoxItem";
import BoxInput from "./components/BoxInput";
function App() {
  const [cardData, setCardData] = useState(CardData);
  const deleteCard = (id) => {
    console.log("App", id);
    if (window.confirm("are you sure ")) {
      setCardData(cardData.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div style={{ marginLeft: "265px" }}>
        {" "}
        <BoxInput />
      </div>

      <div
        style={{ marginLeft: "250px", marginTop: "50px", marginBottom: "10px" }}
      >
        <BoxList cardData={cardData} handleDelete={deleteCard} />
      </div>
    </>
  );
}

export default App;
