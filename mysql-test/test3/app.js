const members = require("./database/test.js").members;

(async () => {
  await members.findAll();
  await members.updateOne("16130110057", "宋浦榕");
  members.findOne("16130110057");
})();
