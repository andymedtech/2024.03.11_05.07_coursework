const profile = require("../models/profile.model");

class ProfileController {
  static async getAll(req, res) {
    try {
      const profileList = await profile.find();
      res.json(profileList);
    } catch (e) {
      console.log(e);
      res.json("ERROR");
    }
  }
  static async getByID(req, res) {
    try {
      const { id } = req.params;
      const profileData = await profile.findOne({
        _id: id,
      });
      res.json(profileData);
    } catch (e) {
      console.log(e);
      res.json("ERROR");
    }
  }
  static async getShortByID(req, res) {}
  static async create(req, res) {
    try {
      const { name, surname, email, login, password, avatar } = req.body;
      const profileData = await profile.create({
        name,
        surname,
        email,
        login,
        password,
        avatar,
      });
      res.json(profileData);
    } catch (e) {
      console.log(e);
      res.json("ERROR");
    }
  }
  static async update(req, res) {
    try {
      const { id } = req.body;
      const profileData = await profile.findOneAndUpdate(
        {
          _id: id,
        },
        {
          ...req.body,
        },
        {
          new: true,
        }
      );
      res.json(profileData);
    } catch (e) {
      console.log(e);
      res.json("ERROR");
    }
  }
  static async delete(req, res) {
    try {
      const { id } = req.body;
      const profileData = await profile.deleteOne({
        _id: id,
      });
      res.json(profileData);
    } catch (e) {
      console.log(e);
      res.json("ERROR");
    }
  }
}

module.exports = ProfileController;
