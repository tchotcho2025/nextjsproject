import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    //const { title, image, address, description } = data;
    //MongoClient.connect('mongodb+srv://hugodubled:<db_password>@cluster0.89odw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

    const client = await MongoClient.connect(
      "mongodb+srv://hugodubled:VNuHdvlg1mvABOjy@cluster0.89odw.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
}
export default handler;
