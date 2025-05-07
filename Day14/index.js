const express= require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use("/api/profile", require("./routes/profileRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});