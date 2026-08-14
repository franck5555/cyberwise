import { Request, Response } from 'express';
import Scanner from '../models/Scanner';

// Controller for handling scanner-related requests
class ScannerController {
    // Method to create a new scan record
    async createScan(req: Request, res: Response) {
        try {
            const { userId, findings, recommendations, securityScore } = req.body;

            const newScan = new Scanner({
                userId,
                findings,
                recommendations,
                securityScore,
                timestamp: new Date(),
            });

            await newScan.save();
            res.status(201).json(newScan);
        } catch (error) {
            res.status(500).json({ message: 'Error creating scan record', error });
        }
    }

    // Method to get all scans for a user
    async getUserScans(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const scans = await Scanner.find({ userId });

            res.status(200).json(scans);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving scans', error });
        }
    }
}

export default new ScannerController();