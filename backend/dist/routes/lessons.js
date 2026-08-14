"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lessonController_1 = require("../controllers/lessonController");
const router = (0, express_1.Router)();
// Route to get all lessons
router.get('/', lessonController_1.getLessons);
// Route to get a specific lesson by ID
router.get('/:id', lessonController_1.getLessonById);
// Route to create a new lesson
router.post('/', lessonController_1.createLesson);
// Route to update an existing lesson
router.put('/:id', lessonController_1.updateLesson);
// Route to delete a lesson
router.delete('/:id', lessonController_1.deleteLesson);
exports.default = router;
