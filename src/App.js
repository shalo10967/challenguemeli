import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import ProductDetail from './screens/ProductDetail';
import PageSearch from './screens/PageSearch';

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<PageSearch />} />
        <Route path='/items/:id' element={<ProductDetail {...props}/>} />
      </Routes>
    </Router>
  );
} 

export default App;
