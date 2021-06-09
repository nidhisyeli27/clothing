import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton= ({price})=>{
    const priceForStripe= price*100;
    const publishableKey= 'pk_test_51J0CM9DhqLjEoSc5tgOfIcwR6c7jSacNnu4u7v0aE5rioWhTexjgo6Xk4OdiNXPAPjHHp0zFKu6gh0jBME3TXosa000saloC83';

    const onToken = token =>{
        console.log(token);
        alert('Payment successful');
    }
    
    return (
        <StripeCheckout
        lable='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={ onToken }
        stripeKey={ publishableKey }
        />
    )
}

export default StripeCheckoutButton;