const Sequelize = require("sequelize");

const test = new Sequelize("test", "root", "songpurong", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

const Members = test.define(
  "member",
  {
    id: {
      type: Sequelize.STRING(20),
      primaryKey: true,
    },
    name: Sequelize.STRING(20),
  },
  {
    timestamps: false,
  }
);

module.exports = {
  members: {
    findAll: async () => {
      let res = await Members.findAll();
      console.log(`find ${res.length} users:`);
      for (let i of res) {
        console.log(JSON.stringify(i));
      }
    },
  },
};
