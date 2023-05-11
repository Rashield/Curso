import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = () =>{
  return <h1>Ola</h1>
}
function World(){
  return <h1>Mundo</h1>
}

function App() {
  

  return (
    <>
    <Hello/>
    <World/>
    </>
  )
}

export default App
