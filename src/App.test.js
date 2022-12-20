import { render, screen } from '@testing-library/react';

import App from './App';
import TextColumn from './components/Text';
import Table from './components/Table';

test('renders city data', () => {
  render(<App />);
  const linkElement = screen.getByText(/getting/i);
  expect(linkElement).toBeInTheDocument();
});

{/* <TextColumn /> */}
test('renders a paragraph', () => {
  render(<TextColumn />);
  const linkElement = screen.getByText(/lorem/i);
  expect(linkElement).toBeInTheDocument();
});

{/* <Table /> */}
test('renders city data', () => {
  const cityData = [{name: 'Dublin', country: 'Ireland', subcountry: 'Ireland', geonameid: 'aaa123'}];

  render(<Table cities={cityData} />);
  const linkElement = screen.getByText(/dublin/i);
  expect(linkElement).toBeInTheDocument();
});
