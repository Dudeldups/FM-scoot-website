import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";

const envFilePath = resolve(process.cwd(), ".env.production");
const homepage = process.env.APP_HOME_PAGE;

if (homepage) {
  const packageJsonPath = resolve(process.cwd(), "package.json");
  const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));

  packageJson.homepage = homepage;

  await writeFile(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2),
    "utf8"
  );
  console.log(`Set homepage to ${homepage}`);
}
