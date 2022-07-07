import { faker } from '@faker-js/faker';

const FakeData = () => {
    const productList = [...Array(100)].map((_,i)=>({
        id : i,
        name : faker.commerce.product(),
        fullName : faker.commerce.productName(),
        price :faker.commerce.price(100, 200, 0),
        description : faker.commerce.productDescription(), 
        image : faker.image.fashion(1234, 2345, true),
        group : Math.floor(Math.random()*3+1),
        isAvailable : faker.datatype.boolean(),
        isNew : faker.datatype.boolean(),
        isOnOff: faker.datatype.boolean(),
        offPercent : Math.floor(Math.random()*3+1)*10,
        ratings : Math.floor(Math.random()*4+1)
    }))

    
    console.log(productList)
    return (  
        <div>hi</div>
    );
}
 
export default FakeData;


product categories


features : 
1. context API (global context with HOC)
2. using router