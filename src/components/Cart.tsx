import Menuitem from "./Menuitem";

const Cart = () => {
    return (
        <>
            <h1>Cart</h1>
            <Menuitem item={
                {
                    name: "Pizza",
                    price: 12.99
                }
            }/>
            <Menuitem item={{
                name: "Burger",
                price: 8.99
            }}/>
            <Menuitem item={{
                name: "Pasta",
                price: 10.99
            }}/>
        </>
    );
}
export default Cart;