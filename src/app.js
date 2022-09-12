import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

import { createRoles } from './libs/initialSetup'

import documentosRoutes from './routes/documentos.routes'
import authRoutes from './routes/auth.routes'
import usersRoutes from './routes/user.routes'
import cors from './middlewares/cors'

const app = express()
//const cors = require('./middleware/cors');

createRoles();
app.use(cors);
app.set('pkg', pkg);

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) =>{
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  })
})

app.use('/api/documentos', documentosRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)

export default app;