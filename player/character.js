import { HUMAN } from './races/human.js';

//This was made just as an exemple
function character() {
  let character = {
    name: 'Wulfgar',
    class: 'Barbarian',
    level: 1,
    race: 'Human',
    background: 'Gladiator',
    hp: 12,
    abilityScore: {
      strength: 16,
      dexterity: 14,
      constituition: 14,
      wisdon: 10,
      inteligence: 8,
      charisma: 12,
    },
    proficiencies: {
      savingThrows: ['strength', 'constitution'],
      skills: ['Animal Handling', 'Athletics'],
      weapons: ['Simple Weapons', 'Martial Weapons'],
      tools: [],
      armor: {
        light: true,
        medium: true,
        heavy: false,
        shields: true,
      },
    },
    equipament: {
      pack: 'Explorer',
      weapon: ['Greataxe', 'Handaxe'],
      money: {
        copper: 0,
        silver: 0,
        electrum: 0,
        gold: 0,
        platinum: 0,
      },
    },
  };
  return character;
}

console.log(HUMAN);
console.log(character());
