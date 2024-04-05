const getByPostID = require("./like/getByPostID");
const create = require("./like/create");
const remove = require("./like/remove");

class LikeController {
  static async getByPostID(req, res) {
    getByPostID(req, res);
  }
  static async create(req, res) {
    create(req, res);
  }
  static async remove(req, res) {
    remove(req, res);
  }
}

module.exports = LikeController;
