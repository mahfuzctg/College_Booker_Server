const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
College - Booker;
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // client.connect();

    // Colleges
    const CollegeCollection = client.db("CollegeDb").collection("colleges");
    const cartsCollection = client.db("CollegeDb").collection("carts");

    //
    app.get("/college", async (req, res) => {
      const result = await classCollection.find().toArray();
      res.send(result);
    });

    // carts post
    app.post("/carts", async (req, res) => {
      const item = req.body;
      console.log(item);
      const result = await cartsCollection.insertOne(item);
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await
    // client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("college booker is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
