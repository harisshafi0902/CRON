const cron = require("node-cron");
// ...

// Schedule tasks to be run on the server.
cron.schedule("* * * * *", function () {
  console.log("Executing comment after 1 minute");
});
