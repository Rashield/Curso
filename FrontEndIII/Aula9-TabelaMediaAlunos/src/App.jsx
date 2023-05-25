import { useState } from "react";
import "./styles.css";

function App() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  const [qtdeAlunosBD, setQtdeAlunosBD] = useState(0);
  const [qtdeAlunosFE, setQtdeAlunosFE] = useState(0);
  const [qtdeAlunosDB, setQtdeAlunosDB] = useState(0);
  const [fieldNota, setFieldNota] = useState("");
  const [disciplina, setDisciplina] = useState("");
  
  const[mediaAlunosBD, setMediaAlunosBD] = useState(0);
  const[mediaAlunosFE, setMediaAlunosFE] = useState(0);
  const[mediaAlunosDB, setMediaAlunosDB] = useState(0);

  function handleClickButton(){
    updateTable();
  }
  function handleChangeFieldNota(event){
      setFieldNota(event.target.value);
  }
  const handleChangeSelectDisciplina = (event) => {
    setDisciplina(event.target.value);
  };

  const updateTable = () => {
    if(disciplina=="database"){
      const novaQtdeAlunosBD = qtdeAlunosBD + 1;
      const novaMediaAlunosBD = calculaMedia(mediaAlunosBD,qtdeAlunosBD,novaQtdeAlunosBD);
      setQtdeAlunosBD(novaQtdeAlunosBD);
      setMediaAlunosBD(novaMediaAlunosBD);
    }else if(disciplina =="frontend"){
      const novaQtdeAlunosFE = qtdeAlunosFE + 1;
      const novaMediaAlunosFE = calculaMedia(mediaAlunosFE,qtdeAlunosFE,novaQtdeAlunosFE)
      setQtdeAlunosFE(novaQtdeAlunosFE);
      setMediaAlunosFE(novaMediaAlunosFE);
    }else if(disciplina =="backend"){
      const novaQtdeAlunosDB = qtdeAlunosDB + 1;
      const novaMediaAlunosDB = calculaMedia(mediaAlunosDB,qtdeAlunosDB,novaQtdeAlunosDB)
      setQtdeAlunosDB(novaQtdeAlunosDB);
      setMediaAlunosDB(novaMediaAlunosDB);
    }
  }
  function calculaMedia(media,qtde,novaQtde){
      return ((media*qtde+parseFloat(fieldNota))/novaQtde);
  }
  return (
    <div className="container">
      <h1>Média de Alunos por Disciplina</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select value={disciplina} onChange={handleChangeSelectDisciplina}>
            <option value="">
              Selecione uma disciplina
            </option>
            <option value="database">Banco de Dados</option>
            <option value="backend">Desenvolvimento Backend</option>
            <option value="frontend">Desenvolvimento Frontend</option>
            <option value="devops">Devops</option>
          </select>
          <input onChange={handleChangeFieldNota}/>
        </div>
        <input type="submit" value="Salvar" onClick={handleClickButton}/>
      </form>

      <div className="container">
        <table border="1" className="line_title">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Quantidade de Alunos</th>
              <th>Média das notas dos alunos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Banco de Dados</td>
              <td>{qtdeAlunosBD}</td>
              <td>{mediaAlunosBD}</td>
            </tr>

            <tr>
              <td>Desenvolvimento Frontend</td>
              <td>{qtdeAlunosFE}</td>
              <td>{mediaAlunosFE}</td>
            </tr>

            <tr>
              <td>Desenolvimento Backend</td>
              <td>{qtdeAlunosDB}</td>
              <td>{mediaAlunosDB}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
