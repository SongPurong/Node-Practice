const Sequelize = require("sequelize");
const config = require("./config.js");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: "mysql",
    pool: {
      max: 5, // 连接池最大连接数
      min: 0, // 最小连接数
      idle: 30000, // 如果一个线程3秒内没有被使用过，就释放
    },
  }
);

const Members = sequelize.define(
  "member",
  {
    id: {
      type: Sequelize.STRING(20),
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(20),
    },
  },
  {
    timestamps: false,
  }
);

Members.create({
  id: "16130110057",
  name: "宋浦榕",
})
  .then((res) => {
    console.log(JSON.stringify(res));
  })
  .catch((err) => {
    console.log(err);
  });
