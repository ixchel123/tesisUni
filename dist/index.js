"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//configuracion del  archivo .env
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
//crar express APP , app.use pordria ser service.use
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World cris!');
});
app.listen(port, () => {
    console.log(`express server http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map