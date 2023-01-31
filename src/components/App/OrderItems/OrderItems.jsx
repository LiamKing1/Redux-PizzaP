import { useSelector, useDispatch } from "react-redux";
import {useState} from 'react';

function OrderItems(){
    const orderList = useSelector(store => store.orderList);
    const Dispatch = useDispatch();
    
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [total, setTotal] = useState('');
    const [type, setType] = useState('');
    const [pizza, setPizza] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        Dispatch({
            type: 'ORDER_LIST',
            payload: {
                name: {name},
                address: {address},
                city: {city},
                zip: {zip},
                total: {total},
                type: {type},
                pizza: {pizza}
            }
        });
        setName('');
        setAddress('');
        setCity('');
        setZip('');
        setTotal('');
        setType('');
        setPizza('');
    }

    return(
      <>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(event) => setName(event.target.value)}  > Customer Name: </input>
        <input value={address} onChange={(event) => setAddress(event.target.value)} > Address: </input>
        <input value={city} onChange={(event) => setCity(event.target.value)} > City: </input>
        <input value={zip} onChange={(event) => setZip(event.target.value)} > Zip: </input>
        <input value={total} onChange={(event) => setTotal(event.target.value)} > Total: </input>
        <input value={type} onChange={(event) => setType(event.target.value)} > Type: </input>
        <input value={pizza} onChange={(event) => setPizza(event.target.value)} > Pizzas: </input>
        <button type='submit'> Add to Order </button>
      </form>
      </>  
    );
}




export default OrderItems;