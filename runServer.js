const { setupExpressServer } = require("./index");

const PORT = process.env.PORT || 3000;
const app = setupExpressServer();
app.listen(PORT, () => {
  console.log("Server running on:", PORT);
});
