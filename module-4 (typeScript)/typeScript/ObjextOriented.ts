class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("german shepard", "dog", "ghew ghew");
const cat = new Animal("Persians", "Cat", "meaw meaw");
dog.makeSound();
cat.makeSound();
