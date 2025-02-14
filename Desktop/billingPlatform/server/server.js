require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const bodyParser = require("body-parser");
const authRoute = require("./routes/authRoute");
const invoiceRoute = require("./routes/invoiceRoute");
const billingRoute = require("./routes/billingRoute");
const usageRoute = require("./routes/usageRoute");
const session = require("express-session"); // Correct import for express-session
const passportStrategy = require("./passport"); // Assuming you have passport configuration in this file

const app = express();

app.use(
  session({
    secret: "cyberwolve", // Secret key for encrypting the session ID
    resave: false, // Prevent session being saved back to the store if not modified
    saveUninitialized: false, // Don't save uninitialized sessions
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      secure: false, // Use true if you're using HTTPS
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(bodyParser.json());

app.use("/auth", authRoute);

app.use("/invoice", invoiceRoute);
// Mocked usage details

// Usage Details Endpoint
app.use("/usage", usageRoute);

// Billing Information Endpoint
app.use("/billing", billingRoute);

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
