class Car {
  engineSize = 1.6;

  constructor(brand) {
    this.brand = brand;
  }

  set brand(val) {
    this._brand = val;
  }

  get brand() {
    return this._brand;
  }

  toString() {
    return `${this.brand} with engine size ${this.engineSize}`;
  }
}

export default Car
