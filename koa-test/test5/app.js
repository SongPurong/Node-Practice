const Koa = require("koa");
const router = require("koa-router")();
const app = new Koa();
const bodyParser = require("koa-bodyparser");
app.use(bodyParser());

const fs = require("fs");

const files = fs.readdirSync(__dirname + "/routes");

const js_files = files.filter((f) => f.endsWith(".js"));

for (let f of js_files) {
  const file = require(__dirname + "/routes/" + f);
  for (let url in file) {
    if (url.startsWith("GET ")) {
      // GET路由
      let path = url.substring(4);
      router.get(path, file[url]);
      console.log(`register GET router: ${path}`);
    } else if (url.startsWith("POST ")) {
      // POST路由
      let path = url.substring(5);
      router.post(path, file[url]);
      console.log(`register POST router: ${path}`);
    } else {
      // 无效路由
      console.log(`invalid router: ${path}`);
    }
  }
}

app.use(router.routes());

app.listen(3000, () => {
  console.log(`app is listening at http://127.0.0.1:3000`);
});
