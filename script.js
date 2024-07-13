<script>
    function donate() {
        var amount = document.getElementById('amount').value;

        var handler = StripeCheckout.configure({
            key: 'your_stripe_publishable_key',
            locale: 'auto',
            token: function(token) {
                // You can process the donation token here and send it to your server for further processing
                console.log(token);
                alert('Thank you for your donation!');
            }
        });

        handler.open({
            name: 'Charitable Organization',
            description: 'Donation',
            amount: amount * 100  // Stripe uses amount in cents
        });
    }
</script>
