const fs = require("fs");
const path = require("path");

const addRouter = (router, file) => {
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
};

const mapFile = (router, dir) => {
  const files = fs.readdirSync(path.resolve(__dirname, "../", dir));
  const js_files = files.filter((f) => {
    return f.endsWith(".js");
  });

  for (let f of js_files) {
    const file = require(path.resolve(__dirname, "../", dir, f));
    addRouter(router, file);
  }
};

module.exports = (dir) => {
  const routes_dir = dir || "routes";
  const router = require("koa-router")();
  mapFile(router, routes_dir);
  return router.routes();
};
