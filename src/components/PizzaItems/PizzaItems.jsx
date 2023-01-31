import { useSelector } from "react-redux";

function PizzaItems() {
    const pizzaList = useSelector(store => store.pizzaList);
    console.log('pizzaItems contains', pizzaList);
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
                        </p>
                    ))};
            </div>
        </>
    );
}

export default PizzaItems;