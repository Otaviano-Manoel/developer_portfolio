import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

test('Verificar a existencia de uma rede social', () => {
    render(<Nav />);
    const element = screen.getAllByTestId(/media-social/i)
    expect(element[0]).toBeInTheDocument();
})

test('Verificar a existencia do nome da pessoa', () => {
    render(<Nav />);
    const element = screen.getByText(/adamkeyes/i)
    expect(element).toBeInTheDocument();
})