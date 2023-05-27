import React from "react";

function TableComponent({ qtdeAlunosBD, mediaAlunosBD, qtdeAlunosFE, mediaAlunosFE, qtdeAlunosDB, mediaAlunosDB }) {
  return (
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
          <td>Desenvolvimento Backend</td>
          <td>{qtdeAlunosDB}</td>
          <td>{mediaAlunosDB}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableComponent;