import { promises as fs } from "fs";

export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void> {
  const line = `${statusMessage} ${new Date().toISOString()}\n`;
  await fs.appendFile(filePath, line);
}