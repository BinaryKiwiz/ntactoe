export default class Board{
    children: Board[] = [];
    winner: string = "";
    level: number = 0;

    constructor(n: number){
        this.level = n;

        if(n == 0){ return; }

        for(let i: number = 0; i < 9; i++){
            this.children.push(new Board(n - 1));
        }
    }

    play(player: string, location: number[]): boolean{
        if(this.level == 1){
            return this.children[location[0]].#playAsCell(player);
        }

        return this.children[location[0]].play(player, location.slice(1));
    }

    visualize(indents: number = 0, id: number = 0): string{
        let items: string[] = [`${"   ".repeat(indents)}${id} | ${(!this.winner) ? "N" : `${this.winner}`} |`];

        if(this.level == 1){
            items.push(":");

            this.children.forEach((child, i) => {
                items.push(((i % 3 == 0 && i != 0) ? " " : "") + ((!child.winner) ? "N" : child.winner));
                // an empty board should look like so:
                // 0 | N | : N N N  N N N  N N N
            })

            return items.join(" ");
        }

        this.children.forEach((child, i) => {
            items.push(child.visualize(indents + 1, i));
        })

        return items.join("\n");
    }
    
    #playAsCell(player: string) : boolean{ // hashtag means private
        if(!this.winner){
            this.winner = player;
            return true;
        }

        return false;
    }
}