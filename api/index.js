import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();
const str="mongodb+srv://Tarun_kandra_7:kandra123@cluster0.uispxff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose
  .connect(str)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

  const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cookieParser());
// Enable CORS for the updated frontend URL
app.use(cors({
  origin: 'https://super-biscotti-c43f7f.netlify.app',
  optionsSuccessStatus: 200
}));

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.post('/updateRating', (req, res) => {
  const { name, rating } = req.body;
  House.findOneAndUpdate({ name: name }, { rating: rating }, (err, house) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(house);
    }
  });
});
app.post('/search', (req, res) => {
  const { location } = req.body;
  House.find({ location: location }, (err, houses) => {
    if (err) {
      res.status(500).send(err);
    } else {
      Rating.find({ name: { $in: houses.map(house => house.name) } }, (err, ratings) => {
        if (err) {
          res.status(500).send(err);
        } else {
          houses = houses.map(house => {
            const rating = ratings.find(rating => rating.name === house.name);
            return { ...house._doc, rating: rating ? rating.rating : 0 };
          });
          res.status(200).send(houses);
        }
      });
    }
  });
});
