import fs from "fs";

export function writeThemeFile(path: string, stringfiedThemeJSON: string) {
  console.log(`Writing JSON file to ${path}`);

  fs.writeFile(path, stringfiedThemeJSON, "utf8", function (error) {
    if (error) {
      console.log("An error occured while writing JSON Object to File.");
      console.error(9821, error);
    }
  });
}
