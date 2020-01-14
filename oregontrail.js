function Traveler (name, food, healthy) {
this.name = name
this.food = food
this.isHealthy = true
}
Traveler.prototype = {
constructor: Traveler,
hunt: functiion () {
    this.food += 2
    this.isHealthy = true
}
}
eat: function () {
if (this.food > 0){
    this.eat -= 1
}else{
    this.isHealthy = false
}
}

function Wagon (capacity, passengers) {
this.capacity = capacity
this.passengers= []
}

Wagon.prototype = {
constructor: Wagon,
getAvailableSeatCount: function () {
this.capacity >= this.passengers
}
return {
    this.capacity -= this.passengers
}
}

join(traveler) {
    if (this.getAvailableSeatCount >= 1)

}
this.passengers.push(traveler);

shouldQurantine: function() {
for (let travelers of this.passengers) {
    if (travelers.isHealthy === false) {
        return true
    }
}
return false

totalFood: function() {
     let resultsTotal = 0
for (let travelers of this.passengers){
results += travelers.food
}
return resultsTotal
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



