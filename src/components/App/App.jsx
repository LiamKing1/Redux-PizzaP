import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import PizzaItems from '../PizzaItems/PizzaItems';
import OrderItems from './OrderItems/OrderItems';
// import PizzaItems from '../PizzaItems/PizzaItems';

function App() {

  const reduxStore = useSelector(store => store);
  // const pizzaList = useSelector(store => store.pizzaList);

  const Dispatch = useDispatch();

  const exampleArray = [{
    customer_name: "Donatello",
    street_address: "20 W 34th St",
    city: "New York",
    zip: "10001",
    total: "27.98",
    type: "Pickup",
    pizzas: [{
      id: "1",
      quantity: "1"
    }, {
      id: "2",
      quantity: "1"
    }]
  }, {
    customer_name: "Myles",
    street_address: "1000 E 38th Ave",
    city: "New York",
    zip: "10661",
    total: "76.28",
    type: "Delivery",
    pizzas: [{
      id: "1",
      quantity: "1"
    }, {
      id: "2",
      quantity: "1"
    }]
  }];

  
  useEffect(() => {
    getPizza();
  }, [])

  const getPizza = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then((result) => {
      console.log('result from GET request', result.data);
      Dispatch({
        type: 'SET_PIZZA',
        payload: result.data,
      }); /* console.log('Checking dispatch', Dispatch.payload) */
    }).catch((error) => {
      console.log('Error in GET request', error);
      alert('HEY HEY HEY, WHATS PROBLEMMMMM?');
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'> PizzaP Pizzaria </h1>
      </header>

      <OrderItems />
      <p>Pizza is great.</p>
      <img src='images/pizza_photo.png' />
      <p> Pizza lists:</p>
      <PizzaItems />
    </div>
  );
}

export default App;
