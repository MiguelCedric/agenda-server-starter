# agenda-server-starter
How to schedule functions in Node.js/Express using Agenda.js with MongoDB
https://www.codementor.io/@miguelkouam/how-to-schedule-tasks-in-node-js-express-using-agenda-h8sdo6b9p

If you are like me and don't want deal with cron jobs and want to keep everything in js, agenda.js is the best solution I found for that.

You can schedule functions to run at a specific time in the future or now on a different thread, not blocking the request request cycle.

For example:
If you have a rideshare application and want to change the status of a ride from active to archived at the departure date, you can schedule a function called archiveRideJob to run at the departure date.

Once you have agenda set up and doing this become very simple. 

This is a starter file of a minimal express server with agenda.js set up so you can model it for your application.

Read the article above for a step by step guide.