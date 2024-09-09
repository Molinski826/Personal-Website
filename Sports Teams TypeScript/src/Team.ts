import Player from "./Player";


let name: Player

export class Team {
    players: Player[] = [];
    teamName: string;
    constructor(teamName: string) {
        this.teamName = teamName;
    }

    addPlayer(newPlayer: Player): void {
        this.players.push(newPlayer);
    }

    removePlayer(index: number): void {
        if (index >= 0 && index < this.players.length) {
            this.players.splice(index, 1);
        }
    }
    setActive(index: number, active: boolean) {
        if (index >= 0 && index < this.players.length) {
            this.players[index].active = active;
        }
    }
    getPlayerCount() {
        return this.players.length;
    }
    getActivePlayers(): Player[] {
        return this.players.filter(player => player.active);
    }


    logActivePlayers(): void {
        this.players.forEach(player => {
            if (player.active) {
                console.log(player);
            }
        });

    }
    removePlayerByName(name:string):void{
        let index:number = this.players.findIndex(player => player.name === name);
         this.players.splice(index,1);
        
    }

}
