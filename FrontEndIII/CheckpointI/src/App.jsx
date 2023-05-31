import { useState } from 'react'

import './App.css'
import style from "./components/Card/CardListComponent.module.css"
import CardComponent from './components/Card/CardComponent'
import CardListComponent from './components/Card/CardListComponent';
import InputComponent from './components/Input/InputComponent';
function App() {

  const [cardTitle, setCardTitle] = useState("");
  const [cardUrl, setCardUrl] = useState("");
  const [card, setCard] = useState({ nome: "", url: "" });  const [cardList, setCardList] = useState([]);
  const handleCardTitle = (e) => {
    setCardTitle(e.target.value);
  }

  const handleCardUrl = (e) => {
    setCardUrl(e.target.value);
  }

  const handleClickButton = (e) => {
    e.preventDefault();
    const regex = /\d+/;
    if ((cardTitle.length >= 3) && (cardUrl.length >= 6 && regex.test(cardUrl))) {
      const newCard={
        nome: cardTitle.trim(),
        url: cardUrl
      }
      // setCard(newCard);
      setCardList((prevCardList) => [...prevCardList, newCard]);
      setCardTitle("");
      setCardUrl("");
    } else {
      alert("Por favor, verifique os dados inseridos no formulário")
    }

  }
  return (
    <>
      <h1>Crie seu card de personagem do Dragon Ball!</h1>
      <form>
        <InputComponent
          title="Título do Card:"
          value={cardTitle}
          fnOnChange={handleCardTitle}
        />
        <br />
        <InputComponent
          title="URL da Imagem:"
          type="url"
          value={cardUrl}
          fnOnChange={handleCardUrl}
        />
        <br />
        <button onClick={handleClickButton}> Salvar </button>
      </form>
      <CardListComponent>
        {cardList.map((card, index) => {
          return (
            <CardComponent className={style.card}
              key={index}
              titulo={card.nome}
              img={card.url}
            />
          )
        })}

      </CardListComponent>
    </>
  )
}

export default App
