// @flow

import React from 'react';
import { BaseTooltip as Tooltip } from './';

import itemData from '../../../stories/data/item.json';
import amuletData from '../../../stories/data/amulet.json';
import traitData from '../../../stories/data/trait.json';
import skillData from '../../../stories/data/skill.json';
import skinArmorData from '../../../stories/data/skin-armor.json';
import skinWeaponData from '../../../stories/data/skin-weapon.json';
import achievementData from '../../../stories/data/achievement.json';
import guildUpgradeData from '../../../stories/data/guildUpgrade.json';

storiesOf('Tooltip/Basic', module)
  .add('text', () => <Tooltip tooltip={{ show: true, data: 'This is some text' }} />)
  .add('with badge', () => <Tooltip tooltip={{ show: true, data: 'This is some text' }} showBadge />)
  .add('error', () => <Tooltip tooltip={{ show: true, data: { error: 'An error happened!' } }} />)
  .add('empty', () => <Tooltip />);

storiesOf('Tooltip/Skin', module)
  .add('weapon', () => <Tooltip tooltip={{ show: true, data: skinWeaponData, type: 'skins' }} />)
  .add('armor', () => <Tooltip tooltip={{ show: true, data: skinArmorData, type: 'skins' }} />);

storiesOf('Tooltip/Items', module)
  .add('default', () => <Tooltip tooltip={{ show: true, data: { item: itemData }, type: 'items' }} />)
  .add('equipped', () => <Tooltip tooltip={{ show: true, data: { item: itemData, equipped: true }, type: 'items' }} />)
  .add('with infusions', () =>
    <App>
      <Tooltip
        tooltip={{
          show: true,
          data: { item: itemData, equipped: true, infusions: [49426, 49426] },
          type: 'items',
        }}
      />
    </App>
  )
  .add('with upgrades', () =>
    <App>
      <Tooltip
        tooltip={{
          show: true,
          // $FlowFixMe - numbers as keys isn't liked.
          data: { item: itemData, equipped: true, upgrades: [24815], upgradeCounts: { 24815: 2 } },
          type: 'items',
        }}
      />
    </App>
  )
  .add('with empty upgrades', () =>
    <App>
      <Tooltip
        tooltip={{
          show: true,
          data: { item: itemData, equipped: true, upgrades: [undefined] },
          type: 'items',
        }}
      />
    </App>
  )
  .add('with empty infusions', () =>
    <App>
      <Tooltip
        tooltip={{
          show: true,
          data: { item: itemData, equipped: true, infusions: [undefined, undefined] },
          type: 'items',
        }}
      />
    </App>
  )
  .add('with badge', () => <Tooltip tooltip={{ show: true, data: { item: itemData }, type: 'items' }} showBadge />);

storiesOf('Tooltip/Amulets', module)
  .add('default', () => <Tooltip tooltip={{ show: true, data: { item: amuletData }, type: 'amulets' }} />)
  .add('with badge', () => <Tooltip tooltip={{ show: true, data: { item: amuletData }, type: 'amulets' }} showBadge />);

storiesOf('Tooltip/Traits', module)
  .add('default', () => <Tooltip tooltip={{ show: true, data: traitData, type: 'trait' }} />)
  .add('with badge', () => <Tooltip tooltip={{ show: true, data: traitData, type: 'trait' }} showBadge />);

storiesOf('Tooltip/Skills', module)
  .add('default', () => <Tooltip tooltip={{ show: true, data: skillData, type: 'skill' }} />)
  .add('with badge', () => <Tooltip tooltip={{ show: true, data: skillData, type: 'skill' }} showBadge />);

storiesOf('Tooltip/Achievements', module)
  .add('default', () => <Tooltip tooltip={{ show: true, data: achievementData, type: 'achievement' }} />)
  .add('with badge', () => <Tooltip tooltip={{ show: true, data: achievementData, type: 'achievement' }} showBadge />);

storiesOf('Tooltip/GuildUpgrades', module)
  .add('default', () => <Tooltip tooltip={{ show: true, data: guildUpgradeData, type: 'guildUpgrade' }} />)
  .add('with badge', () => <Tooltip tooltip={{ show: true, data: guildUpgradeData, type: 'guildUpgrade' }} showBadge />);
