import { render, screen } from "@testing-library/react";
import Hero from "./hero";

test('verifica a existencia do boas vindas', () => {
    render(<Hero />);
    const element = screen.getByText(/Nice to meet you!/i);
    expect(element).toBeInTheDocument();
});

test('verifica a existencia da descrição', () => {
    render(<Hero />);
    const element = screen.getByTestId(/description/i);
    expect(element).toBeInTheDocument();
});

test('verifica a existencia do link de contato', () => {
    render(<Hero />);
    const element = screen.getByText(/Contact me/i);
    expect(element).toBeInTheDocument();
});

test('verifica a existencia da imagem da pessoa', () => {
    render(<Hero />);
    const element = screen.getByTestId(/image/i);
    expect(element).toBeInTheDocument();
});