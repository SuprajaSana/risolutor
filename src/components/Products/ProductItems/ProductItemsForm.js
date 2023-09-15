import { useRef,useState } from 'react';

import classes from './ProductItemsForm.module.css';
import Input from '../../UI/Input';


const ProductItemsForm=props=>
{
    const [amountIsValid,setAmountIsValid]=useState(true)
  const amountInputRef=useRef()

    const submitHandler=(event)=>
    {
        event.preventDefault();

        const enteredAmount=amountInputRef.current.value;
        const enteredAmountNumber= +enteredAmount;

        if(enteredAmount.trim().length===0||enteredAmountNumber<1||enteredAmountNumber>10)
        {
            setAmountIsValid(false)
            return;
        }
        props.onAddCart(enteredAmountNumber)
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
            ref={amountInputRef}
            label="Amount"
            input={{
                id:"amount"+props.id,
                type:"number",
                min:1,
                max:10,
                step:1,
                defaultValue:1,
            }}
            ></Input>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid items (1-10)</p>}
        </form>
    )
}

export default ProductItemsForm;