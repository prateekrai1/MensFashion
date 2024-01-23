import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Bottom from './Components/BottomPart/Bottom';
import ProductCard from './Components/Products/ProductCard';

function App() {
  return (
    <div className="App">
      <Homepage/>
      <ProductCard/>
      <Bottom/>
    </div>
  );
}

export default App;
