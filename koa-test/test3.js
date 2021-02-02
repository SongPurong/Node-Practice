const Koa = require("koa");
const router = require("koa-router")(); // 注意require('koa-router')返回的是函数:

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`);
  await next();
});

router.get("/hello/:name", async (ctx, next) => {
  const name = ctx.params.name;
  ctx.response.body = `<p>hello, ${name}</p>`;
});

router.get("/", async (ctx, next) => {
  ctx.response.body = "<p>this is index</p>";
});

app.use(router.routes());

app.listen(3000);

console.log("app is listening at http://127.0.0.1:3000 ...");
