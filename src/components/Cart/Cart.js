import { useContext } from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/Cart-Context';
import CartItem from './CartItem';

const Cart=(props)=>
{
    const cartCtx=useContext(CartContext)
   
    const totalAmount=cartCtx.totalAmount.toFixed(2)

    const hasItems=cartCtx.items.length>0

    const cartItemAddHandler=(item)=>
    {
       cartCtx.addItems({...item,amount:1})
    }
    const removeItemCartHandler=(id)=>
    {
       cartCtx.removeItems(id)
    }

    const cartItems=(
    <ul className={classes['cart-items']}>
        {
            cartCtx.items.map((items)=>
            {
                return(<CartItem key={items.id} name={items.name} amount={items.amount} price={items.price} onAdd={cartItemAddHandler.bind(null, items)} onRemove={removeItemCartHandler.bind(null,items.id)}></CartItem>)
            })
        }
    </ul>
    )
    return (
     <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>${totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
     </Modal>
    )
}

export default Cart;