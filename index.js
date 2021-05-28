require("dotenv").config();

const FCM = require("fcm-node");
const serverKey = process.env.SERVER_KEY;
const fcm = new FCM(serverKey);

const message = {
  to: process.env.CLIENT_KEY,
  collapse_key: "test_collapse_key",

  notification: {
    title: "Test",
    body: "Notification",
  },

  data: {
    my_key: "hmm..",
    my_another_key: "mmm...",
  },
};

fcm.send(message, function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
