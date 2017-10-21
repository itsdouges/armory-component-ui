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
  5: T.translate('classes.druid'),
  7: T.translate('classes.daredevil'),
  18: T.translate('classes.berserker'),
  27: T.translate('classes.dragonhunter'),
  34: T.translate('classes.reaper'),
  40: T.translate('classes.chronomancer'),
  43: T.translate('classes.scrapper'),
  48: T.translate('classes.tempest'),
  52: T.translate('classes.herald'),
  55: T.translate('classes.soulbeast'),
  56: T.translate('classes.weaver'),
  57: T.translate('classes.holosmith'),
  58: T.translate('classes.deadeye'),
  59: T.translate('classes.mirage'),
  60: T.translate('classes.scourge'),
  61: T.translate('classes.spellbreaker'),
  62: T.translate('classes.firebrand'),
  63: T.translate('classes.renegade'),
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
    .reduce((acc, spec) => (spec && (eliteSpecMap[spec.id] || acc)), character.profession);
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
