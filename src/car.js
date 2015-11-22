class Car {
  engineSize = 1.6;

  constructor(brand) {
    this.brand = brand;
  }

  toString() {
    return `${this.brand} with engine size ${this.engineSize}`;
  }
}

export default Car