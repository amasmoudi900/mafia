// import app from app.js file
const app = require("./backend/app");
// App is running on http://localhost:3000
app.listen(3000, () => {
  console.log("Express Application is running on port 3000");
});
