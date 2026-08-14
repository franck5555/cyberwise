"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const scannerSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    securityScore: {
        type: Number,
        required: true,
    },
    findings: {
        type: [String],
        default: [],
    },
    recommendations: {
        type: [String],
        default: [],
    },
});
const Scanner = (0, mongoose_1.model)('Scanner', scannerSchema);
exports.default = Scanner;
