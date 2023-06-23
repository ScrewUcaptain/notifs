const Mongoose = require("mongoose");

const notifSchema = new Mongoose.Schema(
  {
    actionUserId: { type: String, required: true },
    receiverUserId: { type: String, required: true },
    action: { type: String, required: true },
    creationDateTime: { type: Date, required: true },
    view: { type: Boolean, required: true },
    message: { type: String, required: true },
  },
  { collection: "notif" }
);

const NotifModel = Mongoose.model("Notif", notifSchema);

module.exports = NotifModel;
