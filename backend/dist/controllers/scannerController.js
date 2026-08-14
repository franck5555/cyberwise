"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Scanner_1 = __importDefault(require("../models/Scanner"));
// Controller for handling scanner-related requests
class ScannerController {
    // Method to create a new scan record
    async createScan(req, res) {
        try {
            const { userId, findings, recommendations, securityScore } = req.body;
            const newScan = new Scanner_1.default({
                userId,
                findings,
                recommendations,
                securityScore,
                timestamp: new Date(),
            });
            await newScan.save();
            res.status(201).json(newScan);
        }
        catch (error) {
            res.status(500).json({ message: 'Error creating scan record', error });
        }
    }
    // Method to get all scans for a user
    async getUserScans(req, res) {
        try {
            const { userId } = req.params;
            const scans = await Scanner_1.default.find({ userId });
            res.status(200).json(scans);
        }
        catch (error) {
            res.status(500).json({ message: 'Error retrieving scans', error });
        }
    }
}
exports.default = new ScannerController();
