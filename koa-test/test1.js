const Koa = require('koa');

const app = new Koa();

app.use(async ctx => {
  ctx.response.type = 'text/html';
  ctx.response.body = '<h>hello koa</h';
})

app.listen(3000)

console.log('app is listening at http://127.0.0.1:3000 ...');