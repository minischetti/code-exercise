import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";
import Cors from "@koa/cors";

const app = new Koa();
const router = new Router();

router.get("/", async (ctx) => {
  ctx.body = {
    products: [],
  };
});

app
  .use(Cors())
  .use(logger())
  .use(bodyParser())
  .use(router.routes())
  .listen(3000, "localhost");
