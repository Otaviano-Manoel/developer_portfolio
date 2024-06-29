import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('verificar a existencia dos alts e a quantidade de aneis', () => {
  render(<App />);
  const elements = screen.getAllByAltText(/Ring/i);

  //verifica se a quantidade de elementos é igual a 3
  expect(elements.length).toEqual(3);

  //verifica se cada elemento está presente no documento
  elements.forEach((e) => {
    expect(e).toBeInTheDocument();
  })
});

test('verificar a existencia do circulo', () => {
  render(<App />);
  const element = screen.getByAltText(/Circle/i);

  //verifica se cada elemento está presente no documento
  expect(element).toBeInTheDocument();
});

test('verificar a existencia do campo para adicionar as seções da pagina', () => {
  render(<App />);
  const element = screen.getByTestId(/container-page/i);

  //verifica se cada elemento está presente no documento
  expect(element).toBeInTheDocument();
});
