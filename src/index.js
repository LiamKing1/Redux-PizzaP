import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';

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

const cusName = (state = '', action) => {
    if(action.type === 'CUS_NAME') {
        return action.payload
    }
    return state;
}

const cusAddress = (state = '', action) => {
    if(action.type === 'CUS_ADDRESS') {
        return action.payload
    }
    return state;
}

const cusCity = (state = '', action) => {
    if(action.type === 'CUS_CITY') {
        return action.payload
    }
    return state;
}

const cusZip = (state = '', action) => {
    if(action.type === 'CUS_ZIP') {
        return action.payload
    }
    return state;
}

const cusTotal = (state = 0, action) => {
    if(action.type === 'CUS_TOTAL') {
        return action.payload
    }
    return state;
}

const orderType = (state = 'delivery', action) => {
    if(action.type === 'SET_TYPE'){
        if(action.payload === 'delivery') {
            state = 'delivery';
        } else if (action.payload === 'pickup') {
            state = 'pick-up';
    }};
    return state;
}

const pizzaType = (state = '', action) => {
    if(action.type === 'PIZZA_TYPE') {
        return action.payload
    }
    return state;
}

const pizzaInstance = createStore(
    combineReducers({
        // count,
        pizzaList,
        orderList,
        pizzaType,
        orderType,
        cusTotal,
        cusZip,
        cusCity,
        cusAddress,
        cusName
    }),
    applyMiddleware(logger)
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