require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Ensure MONGO_URI is defined
if (!MONGO_URI) {
  throw new Error("❌ MONGO_URI is missing! Check your .env file.");
}

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// MongoDB Configuration
const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    console.log("✅ Successfully connected to MongoDB!");

    // Create a collection reference
    const booksCollection = client.db("BookInventory").collection("books");

    // Insert a book into the database
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await booksCollection.insertOne(data);
      res.send(result);
    });

    // Get all books (with optional category filter)
    app.get("/all-books", async (req, res) => {
      const query = req.query?.category ? { category: req.query.category } : {};
      const result = await booksCollection.find(query).toArray();
      res.send(result);
    });

    // Get a single book by ID
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await booksCollection.findOne(filter);
      res.send(result);
    });

    // Update a book by ID
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = { $set: { ...updateBookData } };
      const options = { upsert: true };
      const result = await booksCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // Delete a book by ID
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await booksCollection.deleteOne(filter);
      res.send(result);
    });

  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
  }
}

// Run MongoDB connection
run().catch(console.dir);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
