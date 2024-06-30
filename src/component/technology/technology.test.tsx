import { render, screen } from "@testing-library/react"
import Technology from "./technology"

test('verifica a existencia de pelo menos uma technologia', () => {
    render(<Technology />);
    const element = screen.getAllByTestId('container');
    expect(element.length).toBeGreaterThan(0);
    expect(element[0]).toBeInTheDocument();
})