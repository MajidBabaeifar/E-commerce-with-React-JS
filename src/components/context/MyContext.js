import { createContext, useState } from "react";

export const CartContext = createContext();
export const PaginationContext = createContext();

const MyContext = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)


    return (
        <PaginationContext.Provider value={{
            currentPage, setCurrentPage
        }}>
            <CartContext.Provider value={{
                cartList, setCartList
            }}>
                {children}
            </CartContext.Provider>
        </PaginationContext.Provider>
    );
}

export default MyContext;