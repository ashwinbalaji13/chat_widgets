const express = require("express");
const cors = require("cors");
const app = express();
const dialogflow = require("dialogflow");

const connecter = require("./dialogflow-connecter");
app.use(cors());
// app.use(express.json());
app.get("/", (req, res) => {
  console.log("get successful");

  res.send({ response: "hello" });
});
app.post("/smalltalk", express.json(), async (req, res) => {
  console.log(req.body);
  res.send(await connecter.sendTextMessageToDialogFlow(req.body.query, "1234"));
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
