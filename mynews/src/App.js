import logo from './logo.svg';
import './App.css';
import News from './Components/News';

function App() {
  return (
    <div className="App">
      <News pageSize={2} />
    </div>
  );
}

export default App;
