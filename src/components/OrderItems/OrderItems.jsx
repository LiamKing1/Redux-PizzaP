import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { useHistory } from "react-router-dom";

function OrderItems() {
    const history = useHistory();
    const dispatch = useDispatch();
    const name = useSelector(store => store.cusName);
    const address = useSelector(store => store.cusAddress);
    const cities = useSelector(store => store.cusCity);
    const zipCode = useSelector(store => store.cusZip);
    const orderType = useSelector(store => store.orderType);
    const pizza = useSelector(store => store.pizzaType);
    const orderTotal = useSelector(store => store.cusTotal);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ORDER_LIST',
            payload: {
                customer_name: name,
                street_address: address,
                city: cities,
                zip: zipCode,
                total: orderTotal,
                type: orderType,
                pizzas: pizza
            }
        });
    }

    return (
        <div>
            {/* <form> */}
                <input value={name} onChange={(event) => dispatch({type: 'CUS_NAME', payload: event.target.value})} placeholder='Customer Name' />
                <input value={address} onChange={(event) => dispatch({type: 'CUS_ADDRESS', payload: event.target.value})} placeholder='Address' />
                <input value={cities} onChange={(event) => dispatch({type: 'CUS_CITY', payload: event.target.value})} placeholder='City'/>
                <input value={zipCode} onChange={(event) => dispatch({type: 'CUS_ZIP', payload: event.target.value})} placeholder='Zip'/>
                <select onChange={(event) => dispatch({type: 'SET_TYPE', payload: event.target.value})}>
                    <option value='delivery'> Delivery </option>
                    <option value='pickup'> Pick Up</option>
                </select>

                <button onClick={() => history.push('/checkout')}> Submit Info </button>
            {/* </form> */}
        </div>
    );
}




export default OrderItems;