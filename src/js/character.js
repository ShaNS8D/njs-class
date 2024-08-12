export default class Character {
  constructor(name, type, health = 100, level = 1, attack, defence) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа должно быть от 2 до 10 символов');
    }

    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validTypes.includes(type)) {
        throw new Error(`Неверный тип персонажа: '${type}'`);
    }

    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
 
  getHealth() {
    return this.health;
  }

  setHealth(newHealth) {
    if (newHealth >= 0 && newHealth <= 100) {
      this.health = newHealth;
    } else {
      throw new Error('Здоровье должно быть в диапазоне от 0 до 100');
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить уровень умершего');
    }
  
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (points < 0) {
      throw new Error('Урон не может быть отрицательным');
    }

    this.setHealth(this.health - (points * (1 - this.defence / 100)));
  }
}
