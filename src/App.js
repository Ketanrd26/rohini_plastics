
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './comps/header/Header';
import Home from "./pages/home/Home"
import Footer from './comps/footer/Footer';
import Pagetotop from './comps/pagetotop/Pagetotop';
import About from './pages/about/About';
import Products from './pages/products/Products';
import Service from './pages/services/Service';
import Contact from './pages/contact/Contact';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Pagetotop/>
    <Routes>
      <Route path='/'   element={<Home/>} />
      <Route path='/about'   element={<About/>} />
      <Route path='/products'   element={<Products/>} />
      <Route path='/services'   element={<Service/>} />
      <Route path='/contact-us'   element={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
