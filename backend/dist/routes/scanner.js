"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticate_1 = require("../middleware/authenticate");
const scannerController_1 = __importDefault(require("../controllers/scannerController"));
const router = (0, express_1.Router)();
router.get('/:userId', authenticate_1.checkAuth, scannerController_1.default.getUserScans);
router.post('/:userId', authenticate_1.checkAuth, scannerController_1.default.createScan);
exports.default = router;
