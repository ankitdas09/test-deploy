require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const GoogleStrat = require("./passport/passport.config");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI).then(() => console.log("DB Connected"));

const authRoutes = require("./routes/auth.routes");
const formRoutes = require("./routes/form.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();
app.use(bodyParser.json());
app.use(
	cors({
		origin: process.env.CLIENT_URL,
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);
app.use(
	cookieSession({
		name: "session",
		keys: [process.env.COOKIE_SECRET],
		maxAge: 24 * 60 * 60 * 1000,
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);
app.use("/forms", formRoutes);
app.use("/admin", adminRoutes);

app.use((err, req, res, next) => {
	const { status = 500, message = "Something went wrong!" } = err;
	res.status(status).json({ error: true, message: message });
});

const PORT = process.env.PORT || 8000;
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}
app.listen(PORT, (req, res) => console.log(`Listening on PORT ${PORT}`));
