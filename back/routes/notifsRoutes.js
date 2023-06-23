const Notif = require("../models/notif");
// const withAuth = require("../withAuth");

function notifsRoutes(app) {
  app.get("/notif/all/:receiverId", async (req, res) => {
    const receiverId = req.params.receiverId;
    const notifs = await Notif.find({
      receiverUserId: receiverId,
      view: false,
    });
    res.status(200).json({ msg: "notif all ok", notifs: notifs });
  });

  app.put("/notif/:notif_id", async (req, res) => {
    const updatednotif = await Notif.updateOne({
      _id: req.params.notif_id,
      view: true,
    });
    res.status(201).json({ updatednotif });
  });
}

module.exports = notifsRoutes;
