import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/user.route.js'
import exploreRoutes from './routes/explore.route.js'
const app = express();

dotenv.config()

app.use(cors('*'))

app.get('/', (req, res) => {
  res.send('Server ready');
});

app.use("/api/users", userRoutes)
app.use("/api/explore", exploreRoutes)

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
