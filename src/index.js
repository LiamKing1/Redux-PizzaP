import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// First Reducer
// const count = (state = 0, action) => {
//     // console.log('In count Reducer');
//     return state;
// }

// Second Reducer
const pizzaList = (state = [], action) => {
    // console.log("In pizzaList Reducer", action.payload);
    if(action.type === 'SET_PIZZA') {
        return action.payload;
    }
    return state;
}

const orderList = (state = [], action) => {
    // console.log('In orderList reducer'); 
    if(action.type === 'ORDER_LIST') {
        return action.payload;
    }
    return state;
}

const pizzaInstance = createStore(
    combineReducers({
        // count,
        pizzaList,
        orderList,
    })
)



ReactDOM.render(
    <React.StrictMode>
        <Provider store={pizzaInstance}>
            <App />
        </Provider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);