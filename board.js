"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Board {
    parent;
    children = [];
    winner = "";
    level = 0;
    constructor(n, parent = Object()) {
        this.level = n;
        this.parent = parent;
        if (n == 0) {
            return;
        }
        for (let i = 0; i < 9; i++) {
            this.children.push(new Board(n - 1, this));
        }
    }
    play(player, location) {
        if (this.level == 1) {
            return this.children[location[0]].#playAsCell(player);
        }
        return this.children[location[0]].play(player, location.slice(1));
    }
    visualize(indents = 0, id = 0) {
        let items = [`${"   ".repeat(indents)}${id} | ${(!this.winner) ? "N" : `${this.winner}`} |`];
        if (this.level == 1) {
            items.push(":");
            this.children.forEach((child, i) => {
                items.push(((i % 3 == 0 && i != 0) ? " " : "") + ((!child.winner) ? "N" : child.winner));
                // an empty board should look like so:
                // 0 | N | : N N N  N N N  N N N
            });
            return items.join(" ");
        }
        this.children.forEach((child, i) => {
            items.push(child.visualize(indents + 1, i));
        });
        return items.join("\n");
    }
    #playAsCell(player) {
        if (!this.winner) {
            this.winner = player;
            return true;
        }
        return false;
    }
    #checkWinner() {
        // rows top, middle, bottom
        if (this.children[0].winner && this.children[0].winner == this.children[1].winner && this.children[0].winner == this.children[2].winner) {
            return this.children[0].winner;
        }
        if (this.children[3].winner && this.children[3].winner == this.children[4].winner && this.children[3].winner == this.children[5].winner) {
            return this.children[0].winner;
        }
        if (this.children[6].winner && this.children[6].winner == this.children[7].winner && this.children[6].winner == this.children[8].winner) {
            return this.children[0].winner;
        }
        // columns left, middle, right
        if (this.children[0].winner && this.children[0].winner == this.children[3].winner && this.children[0].winner == this.children[6].winner) {
            return this.children[0].winner;
        }
        if (this.children[1].winner && this.children[1].winner == this.children[4].winner && this.children[1].winner == this.children[7].winner) {
            return this.children[0].winner;
        }
        if (this.children[2].winner && this.children[2].winner == this.children[5].winner && this.children[2].winner == this.children[8].winner) {
            return this.children[0].winner;
        }
        // diagonals main and anti
        if (this.children[0].winner && this.children[0].winner == this.children[4].winner && this.children[0].winner == this.children[8].winner) {
            return this.children[0].winner;
        }
        if (this.children[2].winner && this.children[2].winner == this.children[4].winner && this.children[2].winner == this.children[6].winner) {
            return this.children[0].winner;
        }
        return "";
    }
}
exports.default = Board;
