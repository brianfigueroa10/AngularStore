// This is your test publishable API key.
const stripe = Stripe("pk_test_51POPsjFK7JXyjRdIPAvimEpGbXpHvGPlRVAyrDJpq8miukZPGora5U1fcqj9RYi4V3900fqbdCYntDf8OCl3geLH00LmVeiV95");

initialize();

// Create a Checkout Session
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}