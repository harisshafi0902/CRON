const cron = require("node-cron");
const fs = require("fs");

// ...

// Remove the error.log file every twenty-first day of the month.
cron.schedule("* * * * *", function () {
  // place for executing code anysort of you want
  console.log("---------------------");
  console.log("Running Cron Job");
  fs.unlink("./error.log", (err) => {
    if (err) throw err;
    console.log("Error file successfully deleted");
  });
});
