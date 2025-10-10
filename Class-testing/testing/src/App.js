import logo from './logo.svg';
import './App.css';
import Login from './components/Login'

function App() {
  let a = 2;
  let b = 2;
  return (
    <div className="App">
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
      <h1 data-testId = 'heading1'>I am a heading</h1>
      <span data-testId = 'sum1'>{a+b}</span>
      <Login/>
    </div>
  );
}

export default App;
