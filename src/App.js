import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <header className='navbar__wraper'>
        <Navbar/>
      </header>
      <main>
        <ItemListContainer greeting={'MUEBLES INDUSTRIALES PROXIMAMENTE'}/>
      </main>
    </>
  );
}

export default App;


