const fs = require("fs");
const path = require("path");

const configFile = path.join(__dirname, "configColors.json");

fs.writeFileSync(
  configFile,
  JSON.stringify({
    foo: "bar",
  })
);
