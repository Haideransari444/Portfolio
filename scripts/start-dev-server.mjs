import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = fs.openSync(path.join(root, "dev-server.out.log"), "w");
const err = fs.openSync(path.join(root, "dev-server.err.log"), "w");
const env = { ...process.env };
const pathValue = env.Path || env.PATH || "";

delete env.PATH;
env.Path = pathValue;

const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");
const child = spawn(process.execPath, [nextCli, "dev", "--hostname", "127.0.0.1", "--port", "3000"], {
  cwd: root,
  detached: true,
  env,
  stdio: ["ignore", out, err],
  windowsHide: true
});

child.unref();
console.log(child.pid);
