import { useState } from "react";

function FormComponent(props) {
    const {
        qtdeAlunosBD,
        setQtdeAlunosBD,
        qtdeAlunosFE,
        setQtdeAlunosFE,
        qtdeAlunosDB,
        setQtdeAlunosDB,
        fieldNota,
        setFieldNota,
        mediaAlunosBD,
        setMediaAlunosBD,
        mediaAlunosFE,
        setMediaAlunosFE,
        mediaAlunosDB,
        setMediaAlunosDB
    } = props;

    const [disciplina, setDisciplina] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleChangeFieldNota(event) {
        setFieldNota(event.target.value);
    }

    const handleChangeSelectDisciplina = (event) => {
        setDisciplina(event.target.value);
    };

    function handleClickButton() {
        updateTable();
    }

    const updateTable = () => {
        if (disciplina === "database") {
            const novaQtdeAlunosBD = qtdeAlunosBD + 1;
            const novaMediaAlunosBD = calculaMedia(mediaAlunosBD, qtdeAlunosBD, novaQtdeAlunosBD);
            setQtdeAlunosBD(novaQtdeAlunosBD);
            setMediaAlunosBD(novaMediaAlunosBD);
        } else if (disciplina === "frontend") {
            const novaQtdeAlunosFE = qtdeAlunosFE + 1;
            const novaMediaAlunosFE = calculaMedia(mediaAlunosFE, qtdeAlunosFE, novaQtdeAlunosFE);
            setQtdeAlunosFE(novaQtdeAlunosFE);
            setMediaAlunosFE(novaMediaAlunosFE);
        } else if (disciplina === "backend") {
            const novaQtdeAlunosDB = qtdeAlunosDB + 1;
            const novaMediaAlunosDB = calculaMedia(mediaAlunosDB, qtdeAlunosDB, novaQtdeAlunosDB);
            setQtdeAlunosDB(novaQtdeAlunosDB);
            setMediaAlunosDB(novaMediaAlunosDB);
        }
    }

    function calculaMedia(media, qtde, novaQtde) {
        return (media * qtde + parseFloat(fieldNota)) / novaQtde;
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="container_input">
                <select value={disciplina} onChange={handleChangeSelectDisciplina}>
                    <option value="">Selecione uma disciplina</option>
                    <option value="database">Banco de Dados</option>
                    <option value="backend">Desenvolvimento Backend</option>
                    <option value="frontend">Desenvolvimento Frontend</option>
                    <option value="devops">Devops</option>
                </select>
                <input onChange={handleChangeFieldNota} />
            </div>
            <input type="submit" value="Salvar" onClick={handleClickButton} />
        </form>
    );
}

export default FormComponent;