import { Bowman, Swordsman, Magician, Daemon, Undead, Zombie} from '../app';
import Character from '../character';

describe('создание классов', () => {
  test('проверка создания экземпляра класса Bowman', () => {
    const bowman = new Bowman('miya');
    const result = {
      name: 'miya',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(bowman).toEqual(result);
  });

  test('проверка создания экземпляра класса Swordsman', () => {
    const swordsman = new Swordsman('maya');
    const res = {
      name: 'maya',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };
    expect(swordsman).toEqual(res);
  });

  test('проверка создания экземпляра класса Magician', () => {
    const magician = new Magician('miya');
    const result = {
      name: 'miya',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };
    expect(magician).toEqual(result);
  });

  test('проверка создания экземпляра класса Daemon', () => {
    const daemon = new Daemon('maya');
    const res = {
      name: 'maya',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };
    expect(daemon).toEqual(res);
  });

  test('проверка создания экземпляра класса Undead', () => {
    const undead = new Undead('miya');
    const result = {
      name: 'miya',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(undead).toEqual(result);
  });

  test('проверка создания экземпляра класса Zombie', () => {
    const zombie = new Zombie('maya');
    const res = {
      name: 'maya',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };
    expect(zombie).toEqual(res);
  });
  
  test('проверка неправильного имени', () => {  
    expect(() => new Bowman('a', 'Bowman')).toThrow('Имя персонажа должно быть от 2 до 10 символов');
  });
  
  test('проверка типа персонажа', () => {  
    expect(() => new Character('John', 'Warrior')).toThrow(`Неверный тип персонажа: 'Warrior'`);
  });

  test('проверка здоровья', () => {  
    const zom = new Character('maya', 'Bowman');
    expect(() => zom.setHealth(-75)).toThrow();
  });

  test('проверка уровня', () => {  
    const zom = new Character('maya', 'Bowman');
    zom.setHealth(0);
    expect(() => zom.levelUp()).toThrow();
  });

  test('проверка повышения уровня1', () => {
    const character = new Bowman('John', 'Bowman');
    character.levelUp();
    expect(character.level).toBe(2);
  });

  test('проверка повышения уровня2', () => {
    const character = new Bowman('John', 'Bowman');
    const old = character.attack;
    character.levelUp();
    expect(character.attack).toBeCloseTo(1.2 * old);
  });
  
  test('проверка повышения уровня3', () => {
    const character = new Bowman('John', 'Bowman');
    const old = character.defence;
    character.levelUp();
    expect(character.defence).toBeCloseTo(1.2 * old);
  });

  test('проверка повышения уровня4', () => {
    const character = new Bowman('John', 'Bowman');
    character.setHealth(10);
    character.levelUp();
    expect(character.health).toBe(100);
  });

  test('проверка отрицательного урона', () => { 
    const zoom = new Character('John', 'Bowman'); 
    expect(() => zoom.damage(-1)).toThrow();
  });

  test('проверка урона', () => {
    const zombie = new Zombie('John', 'Zombie');
    zombie.setHealth(100);
    zombie.damage(20);
    expect(zombie.getHealth()).toBeCloseTo(82);
  });
});
