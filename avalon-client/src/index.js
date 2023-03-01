import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/productContext';
import { Provider } from 'react-redux'
import store from './store/store'
import { FilterContextProvider } from './context/filterContext';
import { CartProvider } from './context/cartContext';
// import { ReviewProvider } from './context/reviewContext';
// const root = ReactDOM.createRoot(document.getElementById('root')); 

// root.render(
// <Provider store={store}>
//   <App />
//   </Provider>,
//   );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

  //to get global store data
<Provider store={store}>

  <AppProvider> 
    <FilterContextProvider>
      {/* <ReviewProvider> */}
      <CartProvider>
      <App />
      </CartProvider>
    </FilterContextProvider>
  {/* </React.StrictMode> */}
  </AppProvider>
  </Provider>,

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
