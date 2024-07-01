import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Product from './components/Product';
import PageNotFound from './components/PageNotFound';
function App() {
  return (
    <div style={{backgroundColor:"rgb(102, 187, 195)"}}>
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='*' element={<PageNotFound/>}/>
       </Routes>
      <Footer/>
    </div>
  );
}

export default App;
