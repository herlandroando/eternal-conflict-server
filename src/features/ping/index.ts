import { Hono } from "hono";
const timestamp = new Date().getTime();

const pingApp = new Hono().get("/", (c) => {
  return c.json({
    status: "waiting_for_player",
    message: "Pong!",
    time: timestamp,
  });
});

export default pingApp;
