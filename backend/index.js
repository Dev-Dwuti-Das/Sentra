const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const holding = require("../backend/model/holding");
const position = require("../backend/model/positions");
const order = require("../backend/model/order");
const account = require("../backend/model/account");
const app = express();
const URL = process.env.DB_URL;
const Port = process.env.port || 3002;
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");



app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url, "Body:", req.body);
  next();
});

// app.use(
//   session({
//     secret: "xenon",
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 1000 * 60 * 60 * 24 },
//   })
// );

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3001", 
    credentials: true,              
  }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/holdingfetch", async (req, res) => {
  let holdingfetch = await holding.find({});
  res.json(holdingfetch);
});

app.post("/sellstock", async (req, res) => {
  console.log("route hit ")
  try {
    const { name, qty } = req.body;
    const sellQty = Number(qty);
    console.log("Sell Qty:", sellQty, "Type:", typeof sellQty);

    const holding_data = await holding.findOne({ name:req.body.name });
    console.log("Holding:", holding_data);

    if (!holding_data) {
      return res.json({ error: "Stock not found in holdings" });
    }

    if (holding_data.qty < sellQty) {
      return res.json({ error: "Not enough quantity to sell" });
    }

    holding_data.qty -= sellQty;

    if (holding_data.qty === 0) {
      await holding.deleteOne({ name });
      return res.json({ message: "Stock completely sold and removed", holding: null });
    } else {
      await holding_data.save();
      return res.json({ message: "Stock sold successfully", holding: holding_data });
    }
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
});

//account details
app.get("/accountfetch", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: "Not authenticated" });
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) return res.status(403).json({ error: "Invalid token" });
      const user = await account.findById(decoded.id).select("name email");
      if (!user) return res.status(404).json({ error: "User not found" });
      res.json(user);
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/positionfetch", async (req, res) => {
  let positionfetch = await position.find({});
  res.json(positionfetch);
});

app.get("/orderfetch", async (req, res) => {
  let orderfetch = await order.find({});
  res.json(orderfetch);
});

app.post("/signup", async (req, res) => {
  try {
    const existingUser = await account.findOne({ email:req.body.email});
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    let newuser = new account({
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 5),
    });
    ;
    await newuser.save();
    res.redirect("http://localhost:3001/dashboard");
  } catch (err) {
    console.error(err);
    res.json({ error: "Something went wrong" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const user = await account.findOne({ email: req.body.email });
    if (!user) return res.json({ error: "User not found" });

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.json({ error: "Invalid password" });
    const token = jwt.sign({ id: user._id, name:user.name }, process.env.JWT_SECRET, { expiresIn: "1h" });
    console.log(user.name);
    res.cookie("token", token, { httpOnly: true ,maxAge: 7 * 24 * 60 * 60 * 1000,});
    res.redirect("http://localhost:3001/dashboard"); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/neworders", async (req, res) => {
  try {
    let neworder = new order({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: "buy",
    });

    let holding_data = new holding({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      avg: 69,
      net: "%69",
      day: "%69",
    });

    await holding_data.save();
    console.log("Order saved:", holding_data);

    await neworder.save();
    console.log("Order saved:", neworder);

    res.redirect("http://localhost:3000/order");
  } catch (err) {
    console.error(err);
    res.json({ error: "Something went wrong" });
  }
});

// app.get("/tempdatapos", async (req, res) => {
//   tempholding = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];
//   tempholding.forEach((element) => {
//     let data = new position({
//       product: element.product,
//       name: element.name,
//       qty: element.qty,
//       avg: element.avg,
//       price: element.price,
//       net: element.net,
//       day: element.day,
//       isLoss: element.isLoss,
//     });
//     data.save();
//   });
//   res.send("done !");
// });
app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`);
  mongoose.connect(URL);
  console.log("DB_connected !");
});
