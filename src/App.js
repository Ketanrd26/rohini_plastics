
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './comps/header/Header';
import Home from "./pages/home/Home"
import Footer from './comps/footer/Footer';
import Pagetotop from './comps/pagetotop/Pagetotop';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Pagetotop/>
    <Routes>
      <Route path='/'   element={<Home/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
