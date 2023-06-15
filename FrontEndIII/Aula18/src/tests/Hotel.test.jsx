import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import Hotel from "../components/Home/Details/Hotel";



describe("<Hotel /> testes no componente", () => {

    

    test("Renderizou corretamente o componente", () => {
        render(
            <BrowserRouter>
                <Hotel id={parseInt(1)}/>
            </BrowserRouter>
        );
    });

    test("O botão 'voltar' está executando corretamente a ação de click", () => {
        render(
            <BrowserRouter>
                <Hotel id={parseInt(1)}/>
            </BrowserRouter>
        );
        const button = screen.getByRole("button");
        fireEvent.click(button);
    });

});