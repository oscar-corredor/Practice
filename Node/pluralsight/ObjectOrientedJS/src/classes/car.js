import { Vehicle } from './vehicle.js';

export class Car extends Vehicle {
  constructor(licenseNumber, model, latLong) {
    super(licenseNumber, model, latLong);
    this.gpsEnabled = false;
    this.make = null;
    this.miles = null;
  }
}