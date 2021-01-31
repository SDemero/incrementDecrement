import logo from './logo.svg';
import './App.css';
import IncreDecre from './Component/IncreDecre'

function App() {
  return (
    <div className="App">
        <IncreDecre amount={10}/>
    </div>
  );
}

export default App;
