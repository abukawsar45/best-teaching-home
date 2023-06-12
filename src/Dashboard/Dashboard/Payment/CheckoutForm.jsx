import { CardElement,  useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useProvider from '../../../hooks/useProvider';
import './CheckoutForm.css'

const CheckoutForm = ({ price, singleClass }) => {
  console.log(singleClass);
  console.log(price);
  const { user } = useProvider();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  console.log({ transactionId });

  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post(`http://localhost:5000/paymentData?email=${user?.email}`, { price })
        .then((res) => {
          console.log(res.data);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [price]);

  console.log(price);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // console.log('cart',card)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      // console.log('error', error);
      setCardError(error.message);
    } else {
      // console.log('payment', paymentMethod);
      setCardError('');
    }
    setProcessing(true);
    const { paymentIntent, error: confirmEroor } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.dispalayName || 'Unknown',
            email: user?.email || 'Unknown',
          },
        },
      });
    if (confirmEroor) {
      console.log('confirmError', confirmEroor);
    }
    setProcessing(false);
    console.log('paymentIntent', paymentIntent.status);
    if (paymentIntent.status === 'succeeded') {
      console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      // /* 
      // updateOrderStatus
      //  */
      //  axiosSecure
      //    .patch(
      //      `http://localhost:5000/updateOrderStatus/${singleClass?.classId}`,
      //      {
      //        price,
      //      }
      //    )
      //    .then((res) => {
      //      console.log(res.data);
      //    });
    }
  };

  return (
    <>
      {' '}
      <form className='w-9/12 m-2 md:m-6 lg:m-10' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          type='submit'
          className='btn btn-info btn-sm mt-6 px-8'
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className='text-red-600 ml-8'>{cardError && cardError}</p>
      {transactionId && (
        <p className='text-green-300 ml-8'>
          {' '}
          TransactionId complete with Transaction Id: {transactionId}{' '}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;