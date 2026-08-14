"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const users_1 = __importDefault(require("./routes/users"));
const lessons_1 = __importDefault(require("./routes/lessons"));
const quiz_1 = __importDefault(require("./routes/quiz"));
const scanner_1 = __importDefault(require("./routes/scanner"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT || 5000);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
});
app.use('/api/v1/auth', auth_1.default);
app.use('/api/v1/users', users_1.default);
app.use('/api/v1/lessons', lessons_1.default);
app.use('/api/v1/quiz', quiz_1.default);
app.use('/api/v1/scanner', scanner_1.default);
app.use(errorHandler_1.default);
const startServer = async () => {
    try {
        if (process.env.MONGODB_URI) {
            await mongoose_1.default.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('Connected to MongoDB');
        }
        else {
            console.log('MONGODB_URI not set, continuing without database connection');
        }
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
    catch (err) {
        console.error('Server startup error:', err);
        process.exit(1);
    }
};
startServer();
