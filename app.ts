import Board from "./board";

let board = new Board(2);

console.log(board.play("X", [0, 0]));
console.log(board.play("X", [0, 1]));
console.log(board.play("X", [0, 2]));
console.log(board.visualize());