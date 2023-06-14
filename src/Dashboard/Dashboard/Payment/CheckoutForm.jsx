import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useProvider from '../../../hooks/useProvider';
import './CheckoutForm.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useMySelectedClass from '../../../hooks/useMySelectedClass';

const CheckoutForm = ({ price, singleClass }) => {
  // console.log(singleClass);
  // console.log(price);
  const [, refetch] = useMySelectedClass();
  const { user } = useProvider();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const navigate = useNavigate();
  console.log({ transactionId });

  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post(
          `https://best-teaching-home-server-abukawsar45.vercel.app/paymentData?email=${user?.email}`,
          {
            price,
          }
        )
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
    const { error } = await stripe.createPaymentMethod({
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
      const tnxId = paymentIntent.id;
      /* 
      updateOrderStatus
       */
      axiosSecure
        .put(
          `/updateOrderStatus/${singleClass?._id}`,

          {
            //  ...singleClass,
            classId: singleClass.classId,
            classPrice: singleClass.classPrice,
            customerEmail: singleClass.customerEmail,
            customerName: singleClass.customerName,
            instructorName: singleClass.instructorName,
            orderClassImpage: singleClass.orderClassImpage,
            orderClassName: singleClass.orderClassName,
            orderClassPrice: singleClass.orderClassPrice,
            orderDate: singleClass.orderDate,
            instructorImage: singleClass.instructorImage,
            tnxJID: tnxId,
            status: 'paid',
            paymentDate: new Date(),
          }
        )
        .then((res) => {
          console.log(res.data.result);
          if (res?.data?.result?.modifiedCount > 0) {
            refetch();
            Swal.fire('Payment Successfully', 'Saved', 'success');
            navigate('/dashboard/myEnrollClass');
          }
        });
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
