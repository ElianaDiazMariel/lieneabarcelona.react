import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/shop/ItemDetail';
import Cart from './components/Cart';
import CartWidget from './components/CartWidget';
import Home from './components/Home';
import IteamDetail from './components/IteamDetail';
import ListContainer from './components/ListContainer';
import Footer from './components/Footer';




function App() {
  return (
    
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
     <Routes>

       <Route path='/home' element={<Home/>} />     
       <Route path='/cart' element={<Cart/>} />
       <Route path='/contact' element={<Contact/>} />
       <Route path='/shop' element={<ListContainer/>} />
       <Route path='/detail/:id' element={<ItemDetail/>} /> 
       
       
     </Routes>
     
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;


