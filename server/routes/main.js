const productRouter = require("./product");
function route(app) {
  app.use("/products", productRouter);
}

module.exports = route;
