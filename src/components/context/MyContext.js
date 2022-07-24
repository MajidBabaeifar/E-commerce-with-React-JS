import { createContext, useState } from "react";
import data from '../Data/Data.json'

export const CartContext = createContext();
export const PaginationContext = createContext();
export const FilterContext = createContext();
export const LoginRegister = createContext();

const MyContext = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [value1, setValue1] = useState([0, 500]);
    const [category, setCategory] = useState({
        isWoman: true,
        isMen: true,
        isKids: true,
        sortBy: ""
    })
    const [searchLetters, setSearchLetters] = useState("")
    const [userName, setUserName] = useState("")


    const noOfMen = data.filter((c) => c.group == 1).length
    const noOfWoman = data.filter((c) => c.group == 2).length
    const noOfKids = data.filter((c) => c.group == 3).length
    const filterData = () => {
        var fData = data
        if (!category.isKids) {
            fData = fData.filter((c) => c.group !== 3)
        }
        if (!category.isMen) {
            fData = fData.filter((c) => c.group !== 1)
        }
        if (!category.isWoman) {
            fData = fData.filter((c) => c.group !== 2)
        }
        if (searchLetters) {
            fData = fData.filter((c) => c.name.toLowerCase().includes(searchLetters) || c.fullName.toLowerCase().includes(searchLetters))
        }
        fData = fData.filter((c) => c.price >= value1[0] && c.price <= value1[1])
        switch (category.sortBy) {
            case "pricea":
                fData = fData.sort((a, b) => parseInt(a.price) - parseInt(b.price))
                break;
            case "priced":
                fData = fData.sort((a, b) => parseInt(b.price) - parseInt(a.price))
                break;
            case "ratinga":
                fData = fData.sort((a, b) => a.ratings - b.ratings)
                break;
            case "ratingd":
                fData = fData.sort((a, b) => b.ratings - a.ratings)
                break;
            case "title":
                fData = fData.sort((a, b) => a.name.localeCompare(b.name))
                break;
            default:
                break;
        }
        return fData
    }
    const handleFilter = (e) => {
        setCategory({
            ...category,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        })
    }
    const ProductsInThisPage = filterData().slice((currentPage - 1) * 16, currentPage * 16)



    return (
        <LoginRegister.Provider value={{ userName, setUserName }}>
            <FilterContext.Provider value={{
                data, value1, setValue1, category, setCategory, filterData, handleFilter, ProductsInThisPage, noOfMen, noOfWoman, noOfKids, setSearchLetters
            }}>
                <PaginationContext.Provider value={{
                    currentPage, setCurrentPage
                }}>
                    <CartContext.Provider value={{
                        cartList, setCartList
                    }}>
                        {children}
                    </CartContext.Provider>
                </PaginationContext.Provider>
            </FilterContext.Provider>
        </LoginRegister.Provider>
    );
}

export default MyContext;