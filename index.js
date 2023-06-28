require("dotenv").config();

console.log(
  Object.fromEntries(
    Object.entries(process.env)
      .filter(([k]) => k.length === 1)
      .sort((a, b) => {
        if (a[0] > b[0]) {
          return 1;
        } else if (a[0] < b[0]) {
          return -1;
        } else {
          return 0;
        }
      })
  )
);
