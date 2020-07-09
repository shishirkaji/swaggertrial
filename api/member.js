const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Member = require("../Models/Member");

router.get("/", (req, res) => {
  return res.send("there are no members currently");
});

router.post(
  "/",
  [
    check("firstName", "firstName field is required").not().isEmpty(),
    check("phoneNumber", "phoneNumber field is required").not().isEmpty(),
    check("email", "email field is empty").not().isEmpty(),
  ],
  async (req, res) => {
    // req validation using express validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(400).json({ errors: errors.array() });
    }
    // extracting req body and making new object
    const { firstName, lastName, phoneNumber, email } = req.body;
    var newMember = {};
    newMember.firstName = firstName;
    newMember.lastName = lastName;
    newMember.phoneNumber = phoneNumber;
    newMember.email = email;
    try {
      member = new Member(newMember);
      await member.save();
      res.setHeader("Content-Type", "application/json");
      return res.status(200).send(JSON.stringify(member));
    } catch (error) {
      // console.log(error)
      return res.status(500).send("server error");
    }
  }
);
module.exports = router;
