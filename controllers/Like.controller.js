const create = require("./like/create");

class LikeController {
  static async getByPostID(req, res) {}
  static async create(req, res) {
    create(req, res);
  }
  static async remove(req, res) {}
}

module.exports = LikeController;
