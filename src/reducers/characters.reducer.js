import get from 'lodash/get';
import lowerFirst from 'lodash/lowerFirst';
import flow from 'lodash/flow';
import T from 'i18n-react';

import {
  FETCH_CHARACTER_RESULT,
  FETCHING_CHARACTER,
} from '../actions/characters';

const eliteSpecMap = {
  // This map exists because professions aren't static.
  // When you assign a elite spec in game, all it does is
  // set a specialization. We extract out if there is an elite
  // spec assigned, and then set it accordingly.
  5: 'classes.druid',
  7: 'classes.daredevil',
  18: 'classes.berserker',
  27: 'classes.dragonhunter',
  34: 'classes.reaper',
  40: 'classes.chronomancer',
  43: 'classes.scrapper',
  48: 'classes.tempest',
  52: 'classes.herald',
  55: 'classes.soulbeast',
  56: 'classes.weaver',
  57: 'classes.holosmith',
  58: 'classes.deadeye',
  59: 'classes.mirage',
  60: 'classes.scourge',
  61: 'classes.spellbreaker',
  62: 'classes.firebrand',
  63: 'classes.renegade',
};

function parseWeaponSwap (character) {
  const char = {
    ...character,
  };

  switch (char.profession) {
    case 'Warrior':
    case 'Guardian':
      char.hasWeaponSwap = true;
      break;
    default:
      char.hasWeaponSwap = false;
      break;
  }

  return char;
}

function parseCharacterUpgrades (character) {
  if (!character.equipment) {
    return character;
  }

  const char = {
    ...character,
  };

  const characterUpgrades = {};

  char.equipment.forEach((equip) => {
    equip.upgrades && equip.upgrades.forEach((upgrade) => {
      characterUpgrades[upgrade] = (characterUpgrades[upgrade] || 0) + 1;
    });
  });

  char.equipment = char.equipment.map((equip) => {
    if (!equip.upgrades) {
      return equip;
    }

    const equipWithUpgradeCounts = {
      ...equip,
    };

    equip.upgrades.forEach((upgrade) => {
      equipWithUpgradeCounts.upgradeCounts = {
        ...equipWithUpgradeCounts.upgradeCounts,
        [upgrade]: characterUpgrades[upgrade],
      };
    });

    return equipWithUpgradeCounts;
  });

  return char;
}

function parseEquipment (character) {
  return {
    ...character,
    equipment: (character.equipment || []).reduce((obj, equip) => ({
      ...obj,
      [lowerFirst(equip.slot)]: equip,
    }), {}),
    equipmentRaw: character.equipment || [],
  };
}

function parseCharacter (character) {
  const parse = flow([
    parseCharacterUpgrades,
    parseEquipment,
    parseWeaponSwap,
  ]);

  return parse(character);
}

function extractEliteSpecialization (character, mode) {
  return get(character, `specializations[${mode}]`, [])
    .reduce((acc, spec) => {
      if (spec) {
        const key = eliteSpecMap[spec.id];
        if (key) {
          return T.translate(key);
        }
      }

      return acc;
    }, character.profession);
}

const defaultCharacter = {
  race: '',
  alias: '',
  name: '',
  guild: '',
  guild_tag: '',
  guild_name: '',
  profession: '',
  eliteSpecialization: '',
  level: 0,
  privacy: [],
};

export const mergeEliteSpec = (character, mode = 'pve') => (character && {
  ...defaultCharacter,
  ...character,
  // This is set because we still need to use profession for icons.
  eliteSpecialization: extractEliteSpecialization(character, mode),
});

export const defaultState = {
  data: {},
  selected: '',
  fetching: false,
};

export default function reducer (state, action) {
  switch (action.type) {
    case FETCH_CHARACTER_RESULT: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.name]: parseCharacter(action.payload.data),
        },
      };
    }

    case FETCHING_CHARACTER:
      return {
        ...state,
        fetching: action.payload,
      };

    default:
      return undefined;
  }
}
