function Traveler (name, food, isHealthy) {
this.name = name;
this.food = 1;
this.isHealthy = true;
}

Traveler.prototype = {
constructor: Traveler,
hunt: function () {
    this.food += 2
},

eat: function () {
if (this.food >= 1){
    this.food -= 1
}else{
    this.isHealthy = false
}
}
}
function Wagon (capacity, wagon) {
this.capacity = capacity;
this.passengers = [];
}

Wagon.prototype = {
constructor: Wagon,
getAvailableSeatCount: function () {
let seatCount = this.capacity - this.passengers.length
if (seatCount > 0) {
    return seatCount
} else {
    return 0
}
},


join: function (traveler) {
    if (this.getAvailableSeatCount() >= 1) {
        this.passengers.push(traveler)
    }

},


shouldQuarantine: function() {
for (let travelers of this.passengers) {
    if (travelers.isHealthy === false) {
        return true;
    }
    
}return false;

},

totalFood: function() {
     let results = 0;
for (let travelers of this.passengers){
results += travelers.food
}
return results;
}
}

// Create a wagon that can hold 2 people
let wagon = new Wagon(2);
// Create three travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
wagon.join(juan);
wagon.join(maude); // There isn't room for her!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
henrietta.hunt(); // get more food
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);



