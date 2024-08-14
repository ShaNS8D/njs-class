import Character from './character';

export class Bowman extends Character {
  constructor(name, health, level, attack = 25, defence = 25) {
    super(name, health, level);
    this.type = 'Bowman';
    this.attack = attack;
    this.defence = defence;
  }
}

export class Swordsman extends Character {
  constructor(name, health, level, attack = 40, defence = 10) {
    super(name, health, level);
    this.type = 'Swordsman';
    this.attack = attack;
    this.defence = defence;
  }
}

export class Magician extends Character {
  constructor(name, health, level, attack = 10, defence = 40) {
    super(name, health, level);
    this.type = 'Magician';
    this.attack = attack;
    this.defence = defence;
  }
}

export class Daemon extends Character {
  constructor(name, health, level, attack = 10, defence = 40) {
    super(name, health, level);
    this.type = 'Daemon';
    this.attack = attack;
    this.defence = defence;
  }
}

export class Undead extends Character {
  constructor(name, health, level, attack = 25, defence = 25) {
    super(name, health, level);
    this.type = 'Undead';
    this.attack = attack;
    this.defence = defence;
  }
}

export class Zombie extends Character {
  constructor(name, health, level, attack = 40, defence = 10) {
    super(name, health, level);
    this.type = 'Zombie';
    this.attack = attack;
    this.defence = defence;
  }
}


try {
  const bowman = new Bowman("first");
  console.log(bowman);
  const swordsman = new Swordsman("two", undefined, 50);
  console.log(swordsman);
  const magician = new Magician("three",undefined, undefined, 5);
  console.log(magician);
  const daemon = new Daemon("four");
  console.log(daemon);
  const undead = new Undead("five");
  console.log(undead);
  const zombie = new Zombie("six");
  console.log(zombie);

  const zara = new Zombie("mara", "Zombie", 38, 2, 150, 300);
  console.log(zara);

  zombie.setHealth(75);
  console.log(zombie.getHealth());
  zara.setHealth(-75);
} catch (error) {
  console.error(error.message);
}
