import { Server, Model, RestSerializer } from "miragejs";
import { stringify } from "uuid";
import {
  addNewAddressHandler,
  getAllAddressesHandler,
  removeAddressHandler,
} from "./backend/controllers/AddressController";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import {
  addItemToCartHandler,
  getCartItemsHandler,
  removeItemFromCartHandler,
  updateCartItemHandler,
} from "./backend/controllers/CartController";
import {
  getAllCategoriesHandler,
  getCategoryHandler,
} from "./backend/controllers/CategoryController";
import { getAllCouponsHandler } from "./backend/controllers/CouponController";
import {
  getAllProductsHandler,
  getProductHandler,
} from "./backend/controllers/ProductController";
import {
  addItemToWishlistHandler,
  getWishlistItemsHandler,
  removeItemFromWishlistHandler,
} from "./backend/controllers/WishlistController";
import { categories } from "./backend/db/categories";
import { products } from "./backend/db/products";
import { users } from "./backend/db/users";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      product: Model,
      category: Model,
      user: Model,
      cart: Model,
      wishlist: Model,
      address: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      // disballing console logs from Mirage
      server.logging = false;
      products.forEach((item) => {
        server.create("product", { ...item });
      });

      users.forEach((item) =>
        server.create("user", { ...item, cart: [], wishlist: [] })
      );

      categories.forEach((item) => server.create("category", { ...item }));
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // products routes (public)
      this.get("/products", getAllProductsHandler.bind(this));
      this.get("/products/:productId", getProductHandler.bind(this));

      // categories routes (public)
      this.get("/categories", getAllCategoriesHandler.bind(this));
      this.get("/categories/:categoryId", getCategoryHandler.bind(this));

      // coupons route (public)
      this.get("/coupon", getAllCouponsHandler.bind(this));

      // cart routes (private)
      this.get("/user/cart", getCartItemsHandler.bind(this));
      this.post("/user/cart", addItemToCartHandler.bind(this));
      this.post("/user/cart/:productId", updateCartItemHandler.bind(this));
      this.delete(
        "/user/cart/:productId",
        removeItemFromCartHandler.bind(this)
      );

      // wishlist routes (private)
      this.get("/user/wishlist", getWishlistItemsHandler.bind(this));
      this.post("/user/wishlist", addItemToWishlistHandler.bind(this));
      this.delete(
        "/user/wishlist/:productId",
        removeItemFromWishlistHandler.bind(this)
      );

      // address routes (private)
      this.get("/user/addresses", getAllAddressesHandler.bind(this));
      this.post("/user/address", addNewAddressHandler.bind(this));
      this.delete("/user/address/:addressId", removeAddressHandler.bind(this));
    },
  });
}

//BELOW CODE IS FOR RAZORPAY GATEWAY

// const express = require("express");
// const mongoose = require("mongoose");
// const Razorpay = require("razorpay");
// const dotenv = require("dotenv");

// const app = express();
// mongoose.connect(process.env.MONGO_URI).then(() => {
//   console.log("mongodb connected");
// });

// app.use(express.json({ extended: false }));

// const orderSchema = mongoose.Schema({
//   isPaid: Boolean,
//   amount: Number,
//   Razorpay: {
//     orderId: String,
//     paymentId: String,
//     Signature: String,
//   },
// });

// const Order = mongoose.model("Order", orderSchema);

// app.get("/get-razorpay-key", (req, res) => {
//   res.send({ key: process.env.RAZORPAY_KEY_ID });
// });

// app.post("/create-order", async (req, res) => {
//   try {
//     const instance = new Razorpay({
//       key_id: process.env.RAZORPAY_KEY_ID,
//       key_secret: process.env.RAZORPAY_SECRET,
//     });
//     const options = {
//       amount: req.body.amount,
//       currency: "INR",
//     };
//     const order = await instance.orders.create(options);
//     if (!order) return res.status(500).send("some error occured");
//     res.send(order);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// app.post("./pay-order", async (req, res) => {
//   try {
//     const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
//       req.body;
//     const newPayment = Order({
//       isPaid: true,
//       amount: amount,
//       razorpay: {
//         orderId: razorpayOrderId,
//         paymentId: razorpayPaymentId,
//         signature: razorpaySignature,
//       },
//     });
//     await newPayment.save();
//     res.send({
//       msg: "payment was successful",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
//   }
// });

// app.get("/list-orders", async (req, res) => {
//   const orders = await Order.find();
//   res.send(orders);
// });

// const port = process.env.PORT || 5000;
// app.listen(port, () =>
//   console.log(`server started on http://localhost${port}`)
// );
