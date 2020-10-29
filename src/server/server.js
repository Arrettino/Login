import express from 'express';
import dotenv from 'dotenv';
import renderClient from './utils/renderClient';
import configuration from './utils/configuration';
import routes from './routes/routes';

const app = express();
dotenv.config();
const { NODE_ENV, PORT } = process.env;
configuration(NODE_ENV, app);

routes(app);
app.get('*', renderClient());

app.listen(PORT, (error) => {
  if (error) console.log(error);
  else console.log(`Server running on port ${PORT}`);
});

