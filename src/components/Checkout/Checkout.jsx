import { useSelector } from "react-redux";

function Checkout() {
    const name = useSelector(store => store.cusName);
    const address = useSelector(store => store.cusAddress);
    const cities = useSelector(store => store.cusCity);
    const zipCode = useSelector(store => store.cusZip);
    const orderType = useSelector(store => store.orderType);
    const pizza = useSelector(store => store.pizzaType);
    const orderTotal = useSelector(store => store.cusTotal);


    return (
        <div>
            {/* <p>{orderTotal}</p> */}
            <p id='address' className="edit" >{name}<br></br>{address} {cities} {zipCode}</p>
            <p id='type' className="edit">For: {orderType}</p>

           
                <table className="t-head">
                    <tr>
                        <th>Pizza Name</th>
                        <th>Cost</th>
                    </tr>
                    <tr>
                        <td>{pizza}</td>
                        <td>{orderTotal}</td>
                    </tr>
                </table>
        </div>
    )
}

export default Checkout;