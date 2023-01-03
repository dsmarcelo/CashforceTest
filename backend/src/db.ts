import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "1",
  database: process.env.DB_NAME || "cashforceTest",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  dialect: "mysql",
});

export default sequelize;
