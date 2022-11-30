import React from 'react'
import KhaltiCheckout from "khalti-checkout-web";
import config from './Khalti.config'
import { useState } from 'react';

const PaymentUI = () => {
    let checkout = new KhaltiCheckout(config);
    const [amount, setAmount] = useState(null)
    const handleKhaltiPayment=(e)=>{
        e.preventDefault();
        console.log(amount,"and", amount*100)
        const amountAllotted = Number(amount *100);
        window.alert(`You are about to initiate transaction with Khalti. Please Confirm!!`)
        checkout.show({amount: amountAllotted})
    }
  return (
    <div>
        <h1>Pay seamlessly with Khalti</h1>
        <form action="" className="payment-info">
            <label htmlFor="amount" className="amount">Amount</label>
            <input 
                type="number" 
                name="amount" 
                className="amount" 
                placeholder='100 @ in Rs' 
                onChange={(e)=>setAmount(e.target.value)}
            />
            <label htmlFor="purpose" className="purpose">Reason</label>
            <input type="text" name="purpose" className="purpose" placeholder='bought clothes'/>
        </form>
        <button className="pay-btn" onClick={(e)=>handleKhaltiPayment(e)}>Pay Now</button>
    </div>
  )
}

export default PaymentUI