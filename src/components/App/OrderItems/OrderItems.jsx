import { useDispatch } from "react-redux";
import { useState } from 'react';

function OrderItems() {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [cities, setCities] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [orderTotal, setTotal] = useState('');
    const [orderType, setType] = useState('');
    const [pizza, setPizza] = useState('');

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
        setName('');
        setAddress('');
        setCities('');
        setZipCode('');
        setTotal('');
        setType('');
        setPizza('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(event) => setName(event.target.value)} placeholder='Customer Name:' />
                <input value={address} onChange={(event) => setAddress(event.target.value)} placeholder='Address' />
                <input value={cities} onChange={(event) => setCities(event.target.value)} placeholder='City:'/>
                <input value={zipCode} onChange={(event) => setZipCode(event.target.value)} placeholder='Zip:'/>
                <input value={orderTotal} onChange={(event) => setTotal(event.target.value)} placeholder='Total:'/>
                <input value={orderType} onChange={(event) => setType(event.target.value)} placeholder='Type' />
                <input value={pizza} onChange={(event) => setPizza(event.target.value)} placeholder='Pizza Choice' />
                <button type='submit'> Add to Order </button>
            </form>
        </div>
    );
}




export default OrderItems;