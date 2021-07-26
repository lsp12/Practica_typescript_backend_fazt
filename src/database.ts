import { createPool } from "mysql2/promise";

export const connect = async () => {
  const connection = await createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_mysql_ts",
    charset: "utf8",
    connectionLimit: 10,
  });
  return connection;
};
