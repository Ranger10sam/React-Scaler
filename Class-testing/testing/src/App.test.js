import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// Write a test that check if the list items have fruits of length greater than 3

test('renders 3 fruits as list items', ()=>{
  render(<App/>)
  const listitems = screen.getAllByRole('listitem')
  expect(listitems.length).toBeGreaterThanOrEqual(3)
})

//Check for heading

test('checking heading', ()=>{
  render(<App/>)
  const heading = screen.getByTestId('heading1')
  expect(heading).toBeInTheDocument()
})

//Check for correct sum

test('check for sum to be 4', ()=>{
  render(<App/>)
  const sum = screen.getByTestId('sum1')
  expect(sum.textContent).toBe('4')
})