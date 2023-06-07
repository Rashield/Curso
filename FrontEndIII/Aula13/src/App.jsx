import InputComponent from "./components/InputComponent"
import FormComponent from "./components/FormComponent"
import './App.css'
import HelloComponent from "./components/HelloComponent"
import { useEffect } from "react"
import { useState } from "react"



function App() {
  const [pedido,setPedido] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Código a ser executado após o tempo definido
      setPedido("Pizzas")
      console.log("O componente foi atualizado");
    }, 2000);
    
  }, []);

  const cancelOrder = () =>{
    alert("O pedido foi cancelado!")
    setPedido("");
  }
  return (
    <>
      <h1>Seu Pedido:{pedido}</h1>
      <button onClick={cancelOrder}>Cancelar pedido</button>
    </>
  )
}

export default App
