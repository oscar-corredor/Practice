
class Drone {
  // details here
  constructor(id, name) {
    this._id = id;
    this.name = name;
  }

  get id() {
    return this._id+' TEMPORARY';
  }

  set id(value) {
    this._id = value+' setter';
  }

  fly() {
    console.log(`Drone ${this.id} is flying!`);
  }

  static getCompany() {
    console.log('in getCompany');
  }


}
// Static property definition
Drone.maxHeight = 2000;

const drone = new Drone('A123', 'flyer');

// console.log(`id: ${drone.id} name: ${drone.name}`);
// console.log(`NON DOT NOTATION id: ${drone['id']} name: ${drone['name']}`);

const drone2 = new Drone('B456', 'Twirl');

console.log(`the ids: ${drone.id} ${drone2.id}`)
drone.id = 'new droneId'
drone2.id = 'new drone2Id'
console.log(`the new ids: ${drone.id} ${drone2.id}`)
// drone.fly();
// drone2.fly();
