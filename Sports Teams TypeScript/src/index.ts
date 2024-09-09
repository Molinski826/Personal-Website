
import Player from "./Player";
import {Team} from "./Team";


let team:Team = new Team(`Hackers`);

let player1: Player =  {name: "Jimmy", jersey: 10, active: true};
let player2: Player =  {name: "Johnny", jersey: 11, active: true};
let player3: Player =  {name: "Jerry", jersey: 12, active: true};
let player4: Player =  {name: "Joey", jersey: 13, active: true};
let player5: Player =  {name: "Rick", jersey: 14, active: false};
let player6: Player =  {name: "Reggie", jersey: 15, active: false};
let player7: Player =  {name: "Ron", jersey: 16, active: true};
let player8: Player =  {name: "Randal", jersey: 17, active: true};

team.addPlayer(player1);
team.addPlayer(player2);
team.addPlayer(player3);
team.addPlayer(player4);
team.addPlayer(player5);
team.addPlayer(player6);
team.addPlayer(player7);
team.addPlayer(player8);

console.log(team.players);
console.log(`Player count: ${team.getPlayerCount}`);
team.logActivePlayers();

console.log(`Active players: ${team.getActivePlayers}`);
team.removePlayerByName('Joey');
console.log(`Player count after removal: ${team.getPlayerCount()}`);
