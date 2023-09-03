import './App.css';
import React, { useState, useEffect } from 'react';
import {DataTable} from './components/DataTable/DataTable';
import {Cart} from './components/BasketCard/CartPopup';
import { CartProvider } from './store/reducer';

function App() {
  const [data,setData]=useState([]);
//Data Fetching
  useEffect(() => {
    fetch('https://nesine-case-study.onrender.com/bets')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Veriyi çekerken hata oluştu:", error));
  }, []); 

  return (
    <CartProvider>
        <DataTable data={data} />
        <Cart />
    </CartProvider>
);
}

export default App;
