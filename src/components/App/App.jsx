import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

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
    },{
      id: "2",
      quantity: "1"
    }]
  }];

  const [pizzaArray, setPizzaArray] = useState(exampleArray);


  // <Router>
  //   <Route>
  //   </Route>
  // </Router>

  useEffect(() => {
    getPizza();
  }, [])

  const getPizza = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then((result) => {
      console.log('', result.data);
      // setPizzaArray(result.data)
    }).catch((error) => {
      console.log('', error);
      alert('HEY HEY HEY, WHATS PROBLEMMMMM?');
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

    </div>
  );
}

export default App;
