const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose
        .connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((res) => {
            console.log(`MongoDB connected: ${res.connection.host}`);
        })
        .catch((error) => {
            console.error("Errorecting to MongoDB:", error);
        });
};

module.exports = connectDatabase;
