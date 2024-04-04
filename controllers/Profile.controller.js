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
    //     // postman POST http://localhost:8080/api/user
    //     // Body JSON
    //     // {
    //     //  "name": "Choygan",
    //     //  "lastname": "Usov",
    //     //   "login": "andrey",
    //     //   "password": "qwerty",
    //     //   "email": "liza@mail.ru",
    //     //   "avatar": "http://url.com",
    //     // }
    //     try {
    //       const { name, lastname, login, password, email, avatar } = req.body;
    //       const userData = await user.create({
    //         name,
    //         lastname,
    //         login,
    //         password,
    //         email,
    //         avatar,
    //       });
    //       res.json(userData);
    //     } catch (e) {
    //       console.log(e);
    //       res.json("ERROR");
    //     }
  }
  static async update(req, res) {
    //     // postman PUT http://localhost:8080/api/user
    //     // Body JSON
    //     // {
    //     //   "id": "660d3c2c44a3371b37dd0c7a",
    //     //   "avatar": "http://url123.com",
    //     // }
    //     try {
    //       // PUT - используем тело запроса, но можно и через require
    //       const { id } = req.body;
    //       // const userData = await user.updateOne( // лучше подойдёт findOneAndUpdate
    //       const userData = await user.findOneAndUpdate(
    //         // тогда придёт ответ user (предыдущее состояние), которого меняем, а не системный ответ
    //         // новое состояние user - нужен 3 параметр new: true
    //         {
    //           // что передали (фильтр)
    //           _id: id,
    //         },
    //         {
    //           // что меняем
    //           ...req.body,
    //           // передали всё body, но можно и через req.body
    //           // mongedb лишние атрибуты проигнорирует
    //           // поменяются только те поля, которые передали
    //         },
    //         {
    //           new: true,
    //         }
    //       );
    //       res.json(userData);
    //     } catch (e) {
    //       console.log(e);
    //       res.json("ERROR");
    //     }
  }
  static async delete(req, res) {
    //     // postman DELETE http://localhost:8080/api/user
    //     // Body JSON
    //     // {
    //     //   "id": "660d3c2c44a3371b37dd0c7a"
    //     // }
    //     try {
    //       const { id } = req.body;
    //       const userData = await user.deleteOne({
    //         _id: id,
    //       });
    //       res.json(userData); // это ответ клиенту
    //     } catch (e) {
    //       console.log(e);
    //       res.json("ERROR");
    //     }
  }
}

module.exports = ProfileController;
