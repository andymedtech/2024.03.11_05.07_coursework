// const getByPostID = require("./comment/getByPostID");
const create = require("./comment/create");
// const update = require("./comment/update");
// const remove = require("./comment/remove");

class CommentController {
  static async getByPostID(req, res) {
    // getByPostID(req, res);
  }
  static async create(req, res) {
    create(req, res);
  }
  static async update(req, res) {
    // update(req, res);
  }
  static async remove(req, res) {
    // remove(req, res);
  }
}

module.exports = CommentController;
