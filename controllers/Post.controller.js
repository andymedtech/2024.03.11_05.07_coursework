const getByID = require("./post/getByID");
const getByProfileID = require("./post/getByProfileID");
const create = require("./post/create");
const update = require("./post/update");
const remove = require("./post/remove");

class PostController {
  static async getByID(req, res) {
    getByID(req, res);
  }
  static async getByProfileID(req, res) {
    getByProfileID(req, res);
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

module.exports = PostController;
