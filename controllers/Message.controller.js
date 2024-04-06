// const getUserFromID = require("./message/getUserFromID");
// const getUserToID = require("./message/getUserToID");
const getDialogue = require("./message/getDialogue");
const create = require("./message/create");
const getDialoguePUT = require("./message/getDialoguePUT");

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
  static async getDialoguePUT(req, res) {
    getDialoguePUT(req, res);
  }
}

module.exports = MessageController;
