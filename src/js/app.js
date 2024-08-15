import Character from './character';

export class Bowman extends Character {
<<<<<<< HEAD
  constructor(name, health, level) {
    super(name, 'Bowman', health, level, 25, 25);
=======
  constructor(name, health, level, attack = 25, defence = 25) {
    super(name, health, level);
    this.type = 'Bowman';
    this.attack = attack;
    this.defence = defence;
>>>>>>> 12574c8c46e468298d17e8a2b48f919319adf47d
  }
}

export class Swordsman extends Character {
<<<<<<< HEAD
  constructor(name, health, level) {
    super(name, 'Swordsman', health, level, 40, 10);
=======
  constructor(name, health, level, attack = 40, defence = 10) {
    super(name, health, level);
    this.type = 'Swordsman';
    this.attack = attack;
    this.defence = defence;
>>>>>>> 12574c8c46e468298d17e8a2b48f919319adf47d
  }
}

export class Magician extends Character {
<<<<<<< HEAD
  constructor(name, health, level) {
    super(name, 'Magician', health, level, 10, 40);    
=======
  constructor(name, health, level, attack = 10, defence = 40) {
    super(name, health, level);
    this.type = 'Magician';
    this.attack = attack;
    this.defence = defence;
>>>>>>> 12574c8c46e468298d17e8a2b48f919319adf47d
  }
}

export class Daemon extends Character {
<<<<<<< HEAD
  constructor(name, health, level) {
    super(name, 'Daemon', health, level, 10, 40);  
=======
  constructor(name, health, level, attack = 10, defence = 40) {
    super(name, health, level);
    this.type = 'Daemon';
    this.attack = attack;
    this.defence = defence;
>>>>>>> 12574c8c46e468298d17e8a2b48f919319adf47d
  }
}

export class Undead extends Character {
<<<<<<< HEAD
  constructor(name, health, level) {
    super(name, 'Undead', health, level, 25, 25);
=======
  constructor(name, health, level, attack = 25, defence = 25) {
    super(name, health, level);
    this.type = 'Undead';
    this.attack = attack;
    this.defence = defence;
>>>>>>> 12574c8c46e468298d17e8a2b48f919319adf47d
  }
}

export class Zombie extends Character {
<<<<<<< HEAD
  constructor(name, health, level) {
    super(name, 'Zombie', health, level, 40, 10);
=======
  constructor(name, health, level, attack = 40, defence = 10) {
    super(name, health, level);
    this.type = 'Zombie';
    this.attack = attack;
    this.defence = defence;
>>>>>>> 12574c8c46e468298d17e8a2b48f919319adf47d
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
