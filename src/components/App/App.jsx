import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './App.css';
// import PizzaItems from '../PizzaItems/PizzaItems';

function App() {

  const reduxStore = useSelector(store => store);

  const count = useSelector(store => store.count);

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

  const [pizzaArray, setPizzaArray] = useState([]);



  useEffect(() => {
    getPizza();
  }, [])

  const getPizza = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then((result) => {
      console.log('result from GET request', result.data);
      setPizzaArray(result.data)
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

      <p>Pizza is great.</p>
      <img src='images/pizza_photo.png' />
      {/* <PizzaItems pizzaArrayProp={pizzaArray}/> */}

      {/* {pizzaArray.map((pizza) => {
      })} */}
      <div>
        {JSON.stringify()}
      </div>
    </div>
  );
}

export default App;
