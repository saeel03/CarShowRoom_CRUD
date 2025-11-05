const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');

const app = express();
const port = 5000;
const MongoClient = mongodb.MongoClient;
const connectionURL = 'mongodb://localhost:27017';
const databaseName = 'CarShowRoom';

app.use(express.json());
app.use(cors());

let db;

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log("Connected to MongoDB");
    db = client.db(databaseName);
  })
  .catch(error => console.log("Database connection error:", error));

app.get('/api/getCars', async (req, res) => {
  try {
    const cars = await db.collection('Cars').find().toArray();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving data" });
  }
});

app.get('/api/getCarByName/:name', async (req, res) => {
  try {
    const car = await db.collection('Cars').findOne({ carName: req.params.name });
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.json(car);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving data" });
  }
});

app.post('/insert', async (req, res) => {
  try {
    await db.collection('Cars').insertOne({
      carName: req.body.carName,
      price: Number(req.body.price)
    });
    res.json({ posted: 'yes' });
  } catch (err) {
    res.status(500).json({ error: "Failed to add car" });
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}!!`));
