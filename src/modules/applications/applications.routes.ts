import { FastifyInstance } from "fastify";
import { createApplicationHandler } from "./applications.controllers";
import { createApplicationJsonSchema } from "./applications.schemas";

export async function applicationRoutes(app: FastifyInstance) {
  app.post(
    "/",
    { schema: createApplicationJsonSchema },
    createApplicationHandler
  );

  app.get("/", () => {});
}
