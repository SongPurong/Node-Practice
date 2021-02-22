const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const route_util = require("./utils/route_util.js");

const app = new Koa();
app.use(bodyParser());
app.use(route_util());

app.listen(3000, () => {
  console.log("app is listening at http://127.0.0.1:3000...");
});
