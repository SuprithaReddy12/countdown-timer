import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import { AppRoute } from './pay/payment'
import ShopContextProvider from './context/shop-context';
import Paid from './pay/paid';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/payment' element={<AppRoute/>} />
          <Route path='/paid' element={<Paid/>} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
