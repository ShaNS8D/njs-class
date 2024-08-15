import Character from './character';

export class Bowman extends Character {
  constructor(name, health, level) {
    super(name, 'Bowman', health, level, 25, 25);
  }
}

export class Swordsman extends Character {
  constructor(name, health, level) {
    super(name, 'Swordsman', health, level, 40, 10);
  }
}

export class Magician extends Character {
  constructor(name, health, level) {
    super(name, 'Magician', health, level, 10, 40);    
  }
}

export class Daemon extends Character {
  constructor(name, health, level) {
    super(name, 'Daemon', health, level, 10, 40);  
  }
}

export class Undead extends Character {
  constructor(name, health, level) {
    super(name, 'Undead', health, level, 25, 25);
  }
}

export class Zombie extends Character {
  constructor(name, health, level) {
    super(name, 'Zombie', health, level, 40, 10);
  }
}

try {
  const bowman = new Bowman("first");
  console.log(bowman);
  const swordsman = new Swordsman("two");
  console.log(swordsman);
  const magician = new Magician("three");
  console.log(magician);
  const daemon = new Daemon("four");
  console.log(daemon);
  const undead = new Undead("five");
  console.log(undead);
  const zombie = new Zombie("six");
  console.log(zombie);

  zombie.setHealth(75);
  console.log(zombie.getHealth());
  undead.setHealth(-75);
} catch (error) {
  console.error(error.message);
}
