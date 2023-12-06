//obselete

export default class Cell {
    state: string = "";

    constructor(){}

    play(player: string): boolean{
        if(!this.state){
            this.state = player;
            return true;
        }

        return false;
    }

    get winner(): string{
        return this.state;
    }
}
