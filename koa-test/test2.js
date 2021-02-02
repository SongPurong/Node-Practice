const Koa = require("koa");

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印请求方法和地址
  await next();
});

app.use(async (ctx, next) => {
  const start = new Date().getTime();
  await next();
  const ms = new Date().getTime() - start;
  console.log(`Time: ${ms}ms`); // 打印响应时间
});

app.use(async (ctx, next) => {
  ctx.response.type = "text/html";
  ctx.response.body = "<h>hello koa</h>";
});

app.listen(3000);

console.log("app is listening at http://127.0.0.1:3000 ...");
