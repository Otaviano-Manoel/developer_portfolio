import { render, screen } from "@testing-library/react";
import Link from "./link";

test('verificar a existencia do anchor', () => {
    render(<Link text='' url='' />);
    const element = screen.getByTestId('link');
    expect(element).toBeInTheDocument();
});