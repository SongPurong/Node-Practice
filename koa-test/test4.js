const Koa = require("koa");
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");

const app = new Koa();
app.use(bodyParser());

router.get("/", async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
  <form action="/signin" method="post">
    <p>Name: <input name="name"></p>
    <p>Password: <input name="password" type="password"></p>
    <p><input type="submit" value="Submit"></p>  
  </form>`;
});

router.post("/signin", async (ctx, next) => {
  const name = ctx.request.body.name || "";
  const password = ctx.request.body.password || "";
  console.log(`signin with name: ${name}, password: ${password}`);
  if (password === "123456") {
    ctx.response.body = `<h1>Welcome, ${name}</h1>`;
  } else {
    ctx.response.body = `<h1>Login failed</h1>
    <p><a href="/">try again</a></p>`;
  }
});

app.use(router.routes());

app.listen(3000, () => {
  console.log("app is listening at http://127.0.0.1:3000 ...");
});
