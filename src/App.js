import './App.css';
import shops from './data/shops.mjs';
import processData from './services/processData.mjs';
import PriceList from './components/priceList';

function App() {
   const result = processData(shops);
  // const result = reverseData(renderData);

  return (
    <div className="App">
       {PriceList(result)}
    </div>
  );
}

export default App;
