// const profile = require("../models/profile.model");

const auth = require("./profile/auth"); // authorization
const getAll = require("./profile/getAll");
const getByID = require("./profile/getByID");
const getShortByID = require("./profile/getShortByID");
const create = require("./profile/create");
const update = require("./profile/update");
const remove = require("./profile/remove");

class ProfileController {
  static async auth(req, res) {
    // authorization
    auth(req, res);
  }
  static async getAll(req, res) {
    getAll(req, res);
  }
  static async getByID(req, res) {
    getByID(req, res);
  }
  static async getShortByID(req, res) {
    getShortByID(req, res);
  }
  static async create(req, res) {
    create(req, res);
  }
  static async update(req, res) {
    update(req, res);
  }
  static async remove(req, res) {
    remove(req, res);
  }
}

module.exports = ProfileController;
