import './App.css';
import { Route, Routes } from 'react-router-dom';
import MePerdonas from './pages/mePerdonas';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div id='container'>
      <Routes>
        <Route path='/' element={ <MePerdonas />} />
        <Route path='/yes' element={ <HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
