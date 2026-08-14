"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quizController_1 = require("../controllers/quizController");
const router = express_1.default.Router();
// Get all quizzes
router.get('/', quizController_1.getQuizzes);
// Create a new quiz
router.post('/', quizController_1.createQuiz);
// Get a quiz by ID
router.get('/:id', quizController_1.getQuizById);
// Update a quiz by ID
router.put('/:id', quizController_1.updateQuiz);
// Delete a quiz by ID
router.delete('/:id', quizController_1.deleteQuiz);
exports.default = router;
