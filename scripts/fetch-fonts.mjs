// Downloads Satoshi (variable) from Fontshare into src/app/fonts/.
// The font file is NOT committed: the ITF Free Font License allows self-hosting it on our own
// site but forbids redistributing it through a public repository.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "src/app/fonts/Satoshi-Variable.woff2");

if (existsSync(out)) process.exit(0);

const css = await (await fetch("https://api.fontshare.com/v2/css?f[]=satoshi@1&display=swap")).text();
const match = css.match(/url\('([^']+\.woff2)'\)/);
if (!match) throw new Error("fetch-fonts: no woff2 URL in Fontshare CSS response");

const url = match[1].startsWith("//") ? `https:${match[1]}` : match[1];
const res = await fetch(url);
if (!res.ok) throw new Error(`fetch-fonts: ${res.status} downloading ${url}`);

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, Buffer.from(await res.arrayBuffer()));
console.log("fetch-fonts: saved Satoshi to src/app/fonts/");
