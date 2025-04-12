import { app } from './app.js';
import { env } from './config/env.js';

app.listen(Number(env.PORT), "0.0.0.0", () => {
  console.log(`Server is running on port ${env.PORT} \nTime : ${new Date()}`);
});