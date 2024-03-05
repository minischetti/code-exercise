import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";
import Cors from "@koa/cors";

const app = new Koa();
const router = new Router();

const generateRandomProducts = () => {
  const products = [];
  for (let i = 0; i < 30; i++) {
    products.push({
      id: i,
      name: `Product ${i}`,
      price: Math.floor(Math.random() * 1000),
    });
  }
  return products;
};

router.get("/", async (ctx) => {
  ctx.body = {
    products: generateRandomProducts(),
  };
});

app
  .use(Cors())
  .use(logger())
  .use(bodyParser())
  .use(router.routes())
  .listen(3000, "localhost");
