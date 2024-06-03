import { Hono } from "hono";
import pingApp from "./features/ping";
import { cors } from "hono/cors";

const app = new Hono();

const api = new Hono().use("/api/*", cors()).route("/ping", pingApp);

app.route("/api", api);

export default app;
