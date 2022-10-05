import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './components/Error404';
import ItemList from './components/shop/ItemList';
import ItemDetail from './components/shop/ItemDetail';




function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
     <Routes>
       <Route path={'/shop'} element={<ItemList/>} />
       <Route path={'/shop/item/:id'} element={<ItemDetail/>} />
       <Route path={'*'} element={<Error404/>} />
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


