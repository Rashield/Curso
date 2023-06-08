import { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css'
import style from "./components/Card/CardListComponent.module.css"
import CardComponent from './components/Card/CardComponent'
import CardListComponent from './components/Card/CardListComponent';

function App() {

  
  const [cardList, setCardList] = useState([]);



  useEffect(() => {
    findData();
  }, []);

  const findData = async () =>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
    console.log(response.data);
    setCardList(response.data);
  }

  return (
    <>
      <h1>Testes useEffect/ requisições assincronas</h1>
      {/* <form>
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
      </form> */}
      <CardListComponent>
        {cardList.map((card) => {
          return (
            <CardComponent className={style.card}
              key={card.id}
              titulo={card.name}
              conteudo={card.body}
            />
          )
        })}

      </CardListComponent>

    </>
  )
}

export default App
