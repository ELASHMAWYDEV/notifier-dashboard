const express = require("express");
const router = express.Router();
const AppModel = require("../models/App");

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    //Validate token
    if (!name) {
      return res.json({
        status: false,
        errors: ["يجب كتابة اسم التطبيق لكي تتمكن من اضافته"],
      });
    }

    //Validate appId
    if (!(await AppModel.findById(appId))) {
      return res
        .status(406)
        .send("Sorry, the app is not registerd on server !");
    }

    //check if token already exist
    if (
      await AppModel.findOne({ _id: appId, pushTokens: { $elemMatch: token } })
    ) {
      return res.sendStatus(200);
    }
    //Add the token to DB
    const saveToken = await AppModel.updateOne(
      { _id: appId },
      {
        $push: {
          pushTokens: token,
        },
      }
    );

    if (saveToken) {
      return res.sendStatus(200);
    } else {
      return res
        .status(406)
        .send("Sorry, something happend while saving your push token");
    }
  } catch (e) {
    console.log(`Error in /addToken, error: ${e.message}`, e);
    res.sendStatus(500);
  }
});

module.exports = router;
