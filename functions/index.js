const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IxA25SJ5szdLzajnumfcc2hsvYFUQ6TUaY9M7MWGRxF02auas5qnhqvv74o7drAbibOn7c4wGgmQcH3X4AfIrxe00dn3cHHby')


const app = express();


app.use(cors({ origin: true }));
app.use(express.json());


app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async(request,response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    currency: "INR",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


exports.api = functions.https.onRequest(app);
