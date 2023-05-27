import { useState } from "react";
import "./styles.css";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";

function App() {
  const [qtdeAlunosBD, setQtdeAlunosBD] = useState(0);
  const [qtdeAlunosFE, setQtdeAlunosFE] = useState(0);
  const [qtdeAlunosDB, setQtdeAlunosDB] = useState(0);
  const [fieldNota, setFieldNota] = useState("");
  const [mediaAlunosBD, setMediaAlunosBD] = useState(0);
  const [mediaAlunosFE, setMediaAlunosFE] = useState(0);
  const [mediaAlunosDB, setMediaAlunosDB] = useState(0);

  return (
    <div className="container">
      <h1>Média de Alunos por Disciplina</h1>
      <FormComponent
        qtdeAlunosBD={qtdeAlunosBD}
        setQtdeAlunosBD={setQtdeAlunosBD}
        qtdeAlunosFE={qtdeAlunosFE}
        setQtdeAlunosFE={setQtdeAlunosFE}
        qtdeAlunosDB={qtdeAlunosDB}
        setQtdeAlunosDB={setQtdeAlunosDB}
        fieldNota={fieldNota}
        setFieldNota={setFieldNota}
        mediaAlunosBD={mediaAlunosBD}
        setMediaAlunosBD={setMediaAlunosBD}
        mediaAlunosFE={mediaAlunosFE}
        setMediaAlunosFE={setMediaAlunosFE}
        mediaAlunosDB={mediaAlunosDB}
        setMediaAlunosDB={setMediaAlunosDB}
      />

      <div className="container">
        <TableComponent
          qtdeAlunosBD={qtdeAlunosBD}
          qtdeAlunosFE={qtdeAlunosFE}
          qtdeAlunosDB={qtdeAlunosDB}
          mediaAlunosBD={mediaAlunosBD}
          mediaAlunosFE={mediaAlunosFE}
          mediaAlunosDB={mediaAlunosDB}
        />
      </div>
    </div>
  );
}

export default App;