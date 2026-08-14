import { Schema, model } from 'mongoose';

const scannerSchema = new Schema({
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

const Scanner = model('Scanner', scannerSchema);

export default Scanner;