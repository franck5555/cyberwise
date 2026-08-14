"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = __importDefault(require("../controllers/authController"));
const router = express_1.default.Router();
router.post('/signup', authController_1.default.signUp);
router.post('/login', authController_1.default.login);
router.post('/verify-email', authController_1.default.verifyEmail);
router.post('/forgot-password', authController_1.default.forgotPassword);
exports.default = router;
