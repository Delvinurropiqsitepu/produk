import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
       <Product name="Product Name" price={10} stock={20} />
    </div>
  );
}

export default App;
