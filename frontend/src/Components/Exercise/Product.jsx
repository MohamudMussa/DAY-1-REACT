import {useState} from 'react';

const Product = ({addToBasket}) => {

    //itemName
    //quantity

    // empty // and this is destructuring
    const [productName,setProductName] = useState('');
    const [quantity,setQuantity] = useState(0);


    const add = (e) => {
        e.preventDefault();
        const data = {
            productName: productName,
            quantity: quantity
        }
        addToBasket(data)
    }


    return(
         
        <form onSubmit={add}> 

        <lable> Enter Product Name: </lable>    
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)}/>
        
        <lable> Enter quantity Name: </lable>    
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
        
        <button type="submit"> Submit Product </button>
        </form>
        
    )
}


export default Product