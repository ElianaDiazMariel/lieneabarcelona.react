import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';
import ListContainer from './components/ListContainer';
import Footer from './components/Footer';
import {CartContextProvider} from './context/cartContext';
import Contact from './components/Contact';






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
     <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;


