import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import config from "../utils/config";
const stripePromise = loadStripe(config.stripeKey);

const Checkout = () => {
  const location = useLocation();
  const { resBody } = location.state || {};
  const { data, token } = useSelector((state) => state.users);

  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch(`${config.apiUrl}/stripe/create-checkout-session`, {
      method: "POST",
      body: JSON.stringify(resBody),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => data.client_secret);
  }, []);

  const options = { fetchClientSecret };

  return (
    <div
      id="checkout"
      className="flex items-center justify-center pt-28 pb-16 min-h-screen bg-lightGreen"
    >
      <div className="sm:min-w-[450px] w-auto">
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  );
};
export default Checkout;
