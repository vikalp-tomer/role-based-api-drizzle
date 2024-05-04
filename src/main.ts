import { env } from "./config/env";
import { buildServer } from "./utils/server";

async function graceFulShutDown({
  app,
}: {
  app: Awaited<ReturnType<typeof buildServer>>;
}) {
  await app.close();
}

async function main() {
  const app = await buildServer();

  app.listen({ port: env.PORT, host: env.HOST });

  const signals = ["SIGINT", "SIGTERM"];

  for (const signal of signals) {
    process.on(signal, async () => {
      await graceFulShutDown({ app });
    });
  }
}

main();
