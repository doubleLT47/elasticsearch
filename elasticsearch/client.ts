import { Client, HttpConnection } from "@elastic/elasticsearch";
import config from "../configs/index";
const {
  elastic: { host, password, user, port },
} = config;
const client = new Client({
  node: `https://${user}:${password}@${host}:${port}`,
  Connection: HttpConnection,
});
client
  .ping()
  .then(() => console.log("Connect to elasticsearch successfully!"))
  .catch((error) => console.error(error));
export default client;
