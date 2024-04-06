// const getUserFromID = require("./message/getUserFromID");
// const getUserToID = require("./message/getUserToID");
const getDialogue = require("./message/getDialogue");
const create = require("./message/create");

class MessageController {
  // static async getUserFromID(req, res) {
  //   // getUserFromID(req, res);
  // }
  // static async getUserToID(req, res) {
  //   // getUserToID(req, res);
  // }
  static async getDialogue(req, res) {
    getDialogue(req, res);
  }
  static async create(req, res) {
    create(req, res);
  }
}

module.exports = MessageController;
