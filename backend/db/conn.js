const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://rodrigo2196:UV3nKmqCYtlTHFBB@cluster0.ipdwoww.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Conectado ao banco");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
