const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(cors({
  origin: true,
  credentials: true
}))

const stripe = require("stripe")(process.env.STRIPE_KEY);

app.post("/checkout", async (req, res, next) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.items.map((item) => ({
       price_data: {
         currency: "usd",
        product_data: {
          name: item.product.name,
          images: [item.product.images[0]]
        },
        unit_amount: item.product.prices[0].value * 100
       },
       quantity: item.quantity
      })),
      mode: "payment",
      success_url: "http://localhost:4200/confirm",
      cancel_url: "http://localhost:4242/cancel.html"
    });

    res.status(200).json(session);
  } catch (error) {
    next(error)
  }
});

app.listen(4242, () => console.log('app is running on port 4242'))
