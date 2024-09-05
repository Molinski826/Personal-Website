
let planets = [
    {name: "Mercury", inner: true, diamater: 3031.9, color: "#696969" },
    { name: "Venus", inner: true, diameter: 7520.8, color: "#b89165" },
    { name: "Earth", inner: true, diameter: 7917.5, color: "#5a5b86" },
    { name: "Mars", inner: true, diameter: 4212.3, color: "#df8c4e" },
    { name: "Jupiter", inner: false, diameter: 86881, color: "#f6a049" },
    { name: "Saturn", inner: false, diameter: 72367, color: "#dcd3a1" },
    { name: "Uranus", inner: false, diameter: 31518, color: "#b4d9df" },
    { name: "Neptune", inner: false, diameter: 30599, color: "#456eff" }
]

planets.forEach(planet => console.log(planet.name));

// function averageDiamater(planets){
//     let totalDiamater = planets.reducs((sum, planet) => sum + planet.diamater, 0)
// }



let index =0;

function prevPlanet() {
    if (index > 0) {
        index--;
        updatePlanetDisplay();
    }
}

function nextPlanet() {
    if (index < planets.length - 1) {
        index++;
        updatePlanetDisplay();
    }
}
function updatePlanetDisplay() {

let planet = planets[index];
let planetNameNode = document.querySelector("#name");
let planetTypeNode = document.querySelector("#type");
let planetVisualNode = document.querySelector("#visual");
let indexDisplayNode = document.querySelector("#index");
let prevBtnNode = document.querySelector("#prev");
let nextBtnNode = document.querySelector("#next");

    



    planetNameNode.innerHTML = '';
    planetNameNode.appendChild(document.createTextNode(planet.name));

    
    planetTypeNode.innerHTML = '';
    planetTypeNode.appendChild(document.createTextNode(planet.inner ? "Inner planet" : "Outer planet"));

    
    planetVisualNode.style.backgroundColor = planet.color;
    planetVisualNode.style.width = planet.diameter / 100 + "px";
    planetVisualNode.style.height = planet.diameter / 100 + "px";


    indexDisplayNode.innerHTML = '';
    indexDisplayNode.appendChild(document.createTextNode(index));

    
    prevBtnNode.disabled = index === 0;
    nextBtnNode.disabled = index === planets.length - 1;
}

updatePlanetDisplay();