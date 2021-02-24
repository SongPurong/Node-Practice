const members = require("./database/test.js").members;

(async () => {
  await members.findAll();
})();
