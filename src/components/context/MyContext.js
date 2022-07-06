import { createContext, useState } from "react";

export const CartContext = createContext();

const MyContext = ({children}) => {
const [cartList, setCartList] = useState([])

    return (
        <CartContext.Provider value={{
            cartList, setCartList
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default MyContext;