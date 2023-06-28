require("dotenv").config();

const envVars = Object.entries(process.env);

const filteredEnvVars = envVars
  .filter(([k]) => k.length === 1)
  .sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else {
      return 0;
    }
  });

console.log(Object.fromEntries(filteredEnvVars));
