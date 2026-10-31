export function getPort(env: NodeJS.ProcessEnv = process.env): number {
  const raw = env.PORT ?? '3000';
  const port = Number(raw);

  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error(`PORT inválida: ${raw}`);
  }

  return port;
}
