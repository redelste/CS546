const palindromeRoutes = require("./palindrome");
const resultRoutes = require("./result");

const constructorMethod = app => {
  app.use("/result", resultRoutes);
  app.use("/", palindromeRoutes);
  app.use("*", (req, res) => {
    res.status(404).json({error: "Route not FUCKING found"})
  });
};

module.exports = constructorMethod;
