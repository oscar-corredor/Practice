export class Vehicle {
  constructor(licenseNumber, model, latLong) {
    
    this.licenseNumber = licenseNumber;
    this.gpsEnabled = true;
    this.model = model;
    this.latLong = latLong;
  }
  start() {
    console.log('starting vehicle');
  }
}
