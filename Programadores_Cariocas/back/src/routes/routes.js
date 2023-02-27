const express = require("express");
const router = express.Router();

const indexController = require("../controllers/indexController");
const addUserController = require("../controllers/addUserController");
const editUserController = require("../controllers/editUserController");
const deleteUserController = require("../controllers/deleteUserController");
const findUserByIdController = require("../controllers/findUserByIdController");

//index ou busca todos os users
router.get("/", indexController.renderPage);

//busca por id
router.get("/user/:userId", findUserByIdController.renderUserById);

//adiciona user
router.post("/adduser", addUserController.addUser);

//edita user
router.put("/edituser/:userId", editUserController.editUser);

//deleta user
router.delete("/deleteuser/:userId", deleteUserController.deleteUser);


module.exports = router;
