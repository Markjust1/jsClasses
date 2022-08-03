class Human {
  constructor() {
    this.gender = 'female';
    this.intelligence = 'high';
  }
  printGender() {
    console.log(this.gender, this.intelligence);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = 'Artem';
    this.gender = 'male';
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();