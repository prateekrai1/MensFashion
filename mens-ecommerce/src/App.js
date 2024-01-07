import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Bottom from './Components/BottomPart/Bottom';

function App() {
  return (
    <div className="App">
      <Homepage/>
      <Bottom/>
    </div>
  );
}

export default App;
