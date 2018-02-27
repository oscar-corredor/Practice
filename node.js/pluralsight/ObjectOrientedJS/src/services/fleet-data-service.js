import {Car} from '../classes/car.js'
import {Drone} from '../classes/drone.js'
import {DataError} from './data-error.js'

export class FleetDataService {
  constructor() {
    this.cars = [];
    this.drones = [];
    this.errors = [];
  }

  loadData(fleet) {
    for(let data of fleet) {
      switch(data.type) {
        case 'car':
          let car = this.loadCar(data);
          this.cars.push(car);
          break;
        case 'drone':
          let drone = this.loadDrone(data);          
          this.drones.push(drone);
          break;
        default:
          let e = new DataError('Invalid vehicle type', data);
          this.errors.push(e);
          break;
      }
    }
  }

  loadCar(data) {
    try {
      const nCar = new Car(data.license,data.model,data.latLong);
      nCar.miles = data.miles;
      nCar.make = data.make;
      return nCar;
      
    } catch (error) {
      this.errors.push(new DataError('Invalid car', data));
    }
    return null;
  }

  loadDrone(data) {
    try {
      const nDrone = new Drone(data.license,data.model,data.latLong);
      nDrone.airTimeHours = data.airTimeHours;
      nDrone.base = data.base;
      return nDrone;      
    } catch (error) {
      this.errors.push(new DataError('Invalid drone', data));
    }
    return null;
  }
}