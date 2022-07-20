import { Route, Routes } from "react-router";
import ProductListHeader from './ProductListHeader';
import SimpleHedear from './SimpleHeader';

const Hedear = () => {

    return (
        <Routes>
            <Route path="/productlist" element={<ProductListHeader />} />
            <Route path="*" element={<SimpleHedear />} />
        </Routes>
    );
}

export default Hedear;