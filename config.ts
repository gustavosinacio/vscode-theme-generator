import { join } from "path";
import dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env" });

console.log(982100, process.env.HOME);

export default {
  themePath: [
    join(
      `${process.env.HOME}`,
      "github",
      "vscode-theme-oled-neon",
      "themes",
      "oled-neon-dark.json"
    ),
  ],
};
