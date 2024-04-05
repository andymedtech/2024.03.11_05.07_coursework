const getByID = require("./post/getByID");
const getByProfileID = require("./post/getByProfileID");
const create = require("./post/create");

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
  static async update(req, res) {}
  static async delete(req, res) {}
}

module.exports = PostController;
