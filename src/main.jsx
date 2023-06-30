import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Userprovider } from './context/user.context';
import {ProductsProvider} from './context/products.context';
import {CartProvider} from './context/cart.context';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Userprovider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </Userprovider>
    </BrowserRouter>
  </React.StrictMode>,
)
