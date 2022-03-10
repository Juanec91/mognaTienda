
import React from 'react';
import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ItemList } from './components/ItemList/ItemList';
import {CartProvider} from './components/Context/CartContext'



function App() {
  
  
  
  return (
    
  <BrowserRouter>
     <React.Fragment>
       <CartProvider>
       <NavBar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/ItemList/:id' element={<ItemList/>}/>
          <Route path='/products' element={<ItemListContainer/>}/>
        </Routes>
        </CartProvider>
    </React.Fragment>
    <Footer/>
  </BrowserRouter>
    

  );
}

export default App;
