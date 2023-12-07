"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = __importDefault(require("./board"));
let board = new board_1.default(2);
console.log(board.play("X", [0, 0]));
console.log(board.play("X", [0, 1]));
console.log(board.play("X", [0, 2]));
console.log(board.visualize());
console.log(board);
