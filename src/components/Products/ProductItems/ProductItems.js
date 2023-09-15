import { useContext } from 'react';

import classes from './ProductItems.module.css';
import ProductItemsForm from './ProductItemsForm';
import CartContext from '../../../store/Cart-Context';

const ProductItems=(props)=>
{
   const cartCtx=useContext(CartContext)

    const price=`$${props.price.toFixed(2)}`

    const addToCartHandler=amount=>
    {
       cartCtx.addItems({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
    })
    }

    return(
    <li className={classes.product}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <ProductItemsForm onAddCart={addToCartHandler}></ProductItemsForm>
        </div>
    </li>
    )
}

export default ProductItems;