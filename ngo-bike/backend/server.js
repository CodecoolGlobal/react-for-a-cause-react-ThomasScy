const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { fileReaderAsync, fileWriterAsync } = require("./fileReader");
const app = express();
const port = 3000;
const path = require("path");
let messageId = 0;

const messages = JSON.parse(fs.readFileSync(__dirname + "/messages.json"));

// const messages = __dirname + "/messages.json";

app.use(cors());
app.use(express.json());

// app.get("/api/pizza", (req, res) => {
//   res.send(messages);
// });

// app.get("/api/allergens", (req, res) => {
//   res.send(allergeneList);
// });

app
  .route("/ngo-fabio/messages")
  .get(async (req, res) => {
    const messageList = await fileReaderAsync(messages);
    res.status(201).send(JSON.parse(messageList));
  })
  .post(async (req, res) => {
    const incomingMessage = req.body;
    console.log(incomingMessage.length);
    messageId += messageId + 1; // doesn't work!!!
    incomingMessage.id = messageId;
    console.log(incomingMessage)

    let messageList = await fileReaderAsync(messages);
    messageList = JSON.parse(messageList);
    messageList.messages.push(incomingMessage);
    await fileWriterAsync(messages, JSON.stringify(messageList));
    res.send(messageList);
  });

app.use(express.static(path.join(__dirname + "/../frontend/public")));

app.listen(port, () => console.log(`http://127.0.0.1:${port}`));
