import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';

// const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_Gateway_PK);

const Payment = () => {
  const location = useLocation();
  const { singleClass } = location.state;
  const price = parseFloat(singleClass.classPrice);
  // ///console.log(classPrice)

  return (
    <div>
      <div>taka payment</div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} singleClass={singleClass} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
