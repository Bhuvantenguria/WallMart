const mongoose = require('mongoose')


const connectDatabase = () => {
    mongoose
      .connect("mongodb://localhost:27017/ShadowCart", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {
        console.log(`mongod connected with server: ${data.connection.host}`);
      });
  };
  
  module.exports = connectDatabase;