
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './comps/header/Header';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
