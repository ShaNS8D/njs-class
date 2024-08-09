import Character from './character';

class Bowerman extends Character {
  constructor(name, type, health, level, attack = 25, defence = 25) {
    super(name, 'Bowerman', health, level, attack, defence);
  }
}

class Swordsman extends Character {
  constructor(name, type, health, level, attack = 40, defence = 10) {
    super(name, 'Swordsman', health, level, attack, defence);
  }
}

class Magician extends Character {
  constructor(name, type, health, level, attack = 10, defence = 40) {
    super(name, 'Magician', health, level, attack, defence);
  }
}

class Daemon extends Character {
  constructor(name, type, health, level, attack = 10, defence = 40) {
    super(name, 'Daemon', health, level, attack, defence);
  }
}

class Undead extends Character {
  constructor(name, type, health, level, attack = 25, defence = 25) {
    super(name, 'Undead', health, level, attack, defence);
  }
}

class Zombie extends Character {
  constructor(name, type, health, level, attack = 40, defence = 10) {
    super(name, 'Zombie', health, level, attack, defence);
  }
}


try {
  const bowerman = new Bowerman("first");
  console.log(bowerman);
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
  console.log(zara.getHealth());
} catch (error) {
  console.error(error.message);
}
