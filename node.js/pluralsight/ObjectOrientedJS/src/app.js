import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';

const dataService = new FleetDataService();
dataService.loadData(fleet);

console.log(dataService.cars);
console.log(dataService.drones);
console.log(dataService.errors);

// console.log(c instanceof Car);
// console.log(c instanceof Vehicle);
// console.log(c instanceof Object);

