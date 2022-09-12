"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//Routes
app.get('/', (request, response) => {
    return response.json([
        { 'id': 1, 'name': 'Algo' },
        { 'id': 1, 'name': 'Algo' },
        { 'id': 1, 'name': 'Algo' }
    ]);
});
app.listen(3333);
