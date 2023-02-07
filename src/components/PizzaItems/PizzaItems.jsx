import { useSelector, useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";

function PizzaItems() {
    const dispatch = useDispatch();
    const pizzaList = useSelector(store => store.pizzaList);
    const history = useHistory();
    // console.log('pizzaItems contains', pizzaList);

    const handleClick = (price, name) => {
        dispatch({type: 'CUS_TOTAL', payload: price});
        dispatch({type: 'PIZZA_TYPE', payload: name});
        history.push('/order');
    }


    return (
        <>
            <div className='column'>
                {pizzaList.map((pizza, index) => (
                    <p key={index}>
                        {pizza.name}:
                        {pizza.description},
                        {pizza.price}
                        <br />
                        <img src={pizza.image_path} />
                        <button onClick={() => handleClick(pizza.price, pizza.name)}> Add To Cart </button>
                    </p>
                ))};
            </div>
        </>
    );
}

export default PizzaItems;