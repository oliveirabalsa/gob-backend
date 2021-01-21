import express from 'express';
import 'express-async-errors';

import uploadConfig from '@config/upload';
import routes from './routes/index';

import GlobalError from '../../errors/GlobalError';

import '../typeorm';

const app = express();
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));

app.use(routes);
app.use(GlobalError);
app.listen(3030, () => {
  console.log('Server is running');
});
