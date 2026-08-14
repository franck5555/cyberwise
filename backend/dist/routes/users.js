"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authenticate_1 = require("../middleware/authenticate");
const router = express_1.default.Router();
router.get('/', authenticate_1.authenticate, userController_1.getAllUsers);
router.get('/:id', authenticate_1.authenticate, userController_1.getUserById);
router.post('/', userController_1.createUser);
router.put('/:id', authenticate_1.authenticate, userController_1.updateUser);
router.delete('/:id', authenticate_1.authenticate, userController_1.deleteUser);
exports.default = router;
