import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/Cart-Context'; 


const HeaderCartButton=props =>
{
    const cartCtx=useContext(CartContext);

    const numberOfCartItems=cartCtx.items.reduce((currNumb,item)=>{
        return currNumb+item.amount;
    },0) 

    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;