import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";

const CheckoutForm = () => {
	const [error, setError] = useState("");
	const [clientSecret, setClientSecret] = useState("");
	const [transactionId, setTransactionId] = useState("");
	const stripe = useStripe();
	const elements = useElements();
	const axiosSecure = useAxiosSecure();
	const { user } = useAuth();
	const [cart, refetch] = useCart();

	const totalPrice = cart.reduce((total, item) => total + item.price, 0);

	useEffect(() => {
		if (totalPrice > 0) {
			//price is need by the server to return a 'client secret'
			axiosSecure.post("/create-payment-intent", { price: totalPrice }).then(res => {
				setClientSecret(res.data.clientSecret);
			});
		}
	}, [axiosSecure, totalPrice]);

	const handleSubmit = async event => {
		event.preventDefault();

		//from stripe documentation
		if (!stripe || !elements) {
			return;
		}
		const card = elements.getElement(CardElement);
		if (card === null) {
			return;
		}
		const { error } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			console.log("payment error", error);
			setError(error.message);
		} else {
			setError("");
		}

		// confirm payment
		const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: card,
				billing_details: {
					email: user?.email || "anonymous",
					name: user?.displayName || "anonymous",
				},
			},
		});

		if (confirmError) {
			console.log("confirm error");
		} else {
			if (paymentIntent.status === "succeeded") {
				setTransactionId(paymentIntent.id);
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "Your payment has been received",
					showConfirmButton: false,
					timer: 1500,
				});

				// save the payment in the database
				const payment = {
					email: user.email,
					price: totalPrice,
					transactionId: paymentIntent.id,
					date: new Date(), // utc date convert. use moment js to
					cartIds: cart.map(item => item._id),
					menuItemIds: cart.map(item => item.menuId),
					status: "pending",
				};

				const res = await axiosSecure.post("/payments", payment);
				refetch();
				if (res.data?.paymentResult?.insertedId) {
					// TODO:
					// navigate("/dashboard/paymentHistory");
				}
			}
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement
				options={{
					style: {
						base: {
							fontSize: "16px",
							color: "#424770",
							"::placeholder": {
								color: "#aab7c4",
							},
						},
						invalid: {
							color: "#9e2146",
						},
					},
				}}
			/>
			<button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
				Pay
			</button>
			<p className="text-red-600">{error}</p>
			{transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
		</form>
	);
};

export default CheckoutForm;
