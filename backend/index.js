import express from 'express';
import dotenv from 'dotenv';
import{sequelize} from './src/database/index.js'; // Adjust the path as necessary

dotenv.config();
console.log("process.env.PORT:", process.env.PORT);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

async function connectDB() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await connectDB();
});
