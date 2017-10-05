import React from 'react';
import { storiesOf } from '@storybook/react';

// eslint-disable-next-line
import 'style-loader!css-loader!./styles.css';
import App from './App';
import {
  ArmoryBadge,
  Gold,
  Icon,
  PieChart,
  BaseTooltip as Tooltip,
  LanguageProvider,
  Gw2Icon,
  Gw2GuildUpgrade,
  Gw2Item,
  Gw2Map,
  Gw2Skin,
  Gw2Title,
  Gw2Skill,
  Gw2Trait,
  Gw2Specialization,
} from '../src';

import itemData from './data/item.json';
import amuletData from './data/amulet.json';
import traitData from './data/trait.json';
import skillData from './data/skill.json';
import achievementData from './data/achievement.json';
import guildUpgradeData from './data/guildUpgrade.json';

storiesOf('ArmoryBadge', module)
  .add('default', () => <ArmoryBadge />);

storiesOf('Gold', module)
  .add('lots of coins', () => <Gold coins={1123123} />)
  .add('some coins', () => <Gold coins={3123} />)
  .add('little coins', () => <Gold coins={23} />)
  .add('no coins', () => <Gold coins={0} />);

storiesOf('Icon', module)
  .add('default', () => <Icon name="pie-blue.png" />)
  .add('nano', () => <Icon name="pie-blue.png" size="nano" />)
  .add('micro', () => <Icon name="pie-blue.png" size="micro" />)
  .add('small', () => <Icon name="pie-blue.png" size="small" />)
  .add('medium', () => <Icon name="pie-blue.png" size="medium" />)
  .add('large', () => <Icon name="pie-blue.png" size="large" />)
  .add('xlarge', () => <Icon name="pie-blue.png" size="xlarge" />)
  .add('custom', () => <Icon name="pie-blue.png" sizePx={128} />);

const dataValues = [{
  color: 'lightgreen',
  name: 'Sylvari',
  value: 5455,
}, {
  color: 'yellow',
  name: 'Human',
  value: 1000,
}];

storiesOf('PieChart', module)
  .add('default', () => <PieChart dataValues={dataValues} />)
  .add('custom size', () => <PieChart dataValues={dataValues} size={128} />);

storiesOf('TooltipBasic', module)
  .add('text', () => <Tooltip tooltip={{ show: true, data: 'This is some text' }} />)
  .add('with badge', () => <Tooltip tooltip={{ show: true, data: 'This is some text' }} showBadge />)
  .add('error', () => <Tooltip tooltip={{ show: true, data: { error: 'An error happened!' } }} />)
  .add('empty', () => <Tooltip />);

storiesOf('TooltipItems', module)
  .add('default', () => <Tooltip tooltip={{ show: true, data: { item: itemData }, type: 'items' }} />)
  .add('equipped', () => <Tooltip tooltip={{ show: true, data: { item: itemData, equipped: true }, type: 'items' }} />)
  .add('with badge', () => <Tooltip tooltip={{ show: true, data: { item: itemData }, type: 'items' }} showBadge />);

storiesOf('TooltipAmulets', module)
  .add('default', () => <Tooltip tooltip={{ show: true, data: { item: amuletData }, type: 'amulets' }} />)
  .add('with badge', () => <Tooltip tooltip={{ show: true, data: { item: amuletData }, type: 'amulets' }} showBadge />);

storiesOf('TooltipTraits', module)
  .add('default', () => <Tooltip tooltip={{ show: true, data: traitData, type: 'trait' }} />)
  .add('with badge', () => <Tooltip tooltip={{ show: true, data: traitData, type: 'trait' }} showBadge />);

storiesOf('TooltipSkills', module)
  .add('default', () => <Tooltip tooltip={{ show: true, data: skillData, type: 'skill' }} />)
  .add('with badge', () => <Tooltip tooltip={{ show: true, data: skillData, type: 'skill' }} showBadge />);

storiesOf('TooltipAchievements', module)
  .add('default', () => <Tooltip tooltip={{ show: true, data: achievementData, type: 'achievement' }} />)
  .add('with badge', () => <Tooltip tooltip={{ show: true, data: achievementData, type: 'achievement' }} showBadge />);

storiesOf('TooltipGuildUpgrades', module)
  .add('default', () => <Tooltip tooltip={{ show: true, data: guildUpgradeData, type: 'guildUpgrade' }} />)
  .add('with badge', () => <Tooltip tooltip={{ show: true, data: guildUpgradeData, type: 'guildUpgrade' }} showBadge />);

storiesOf('Gw2Icon', module)
  .add('default', () =>
    <Gw2Icon applyCount={4} count={2} name="leg-slot-icon.png" />
);

storiesOf('Gw2GuildUpgrade', module)
  .add('default', () => <App><Gw2GuildUpgrade id={38} /></App>)
  .add('loading', () => <App><Gw2GuildUpgrade /></App>);

storiesOf('Gw2Item', module)
  .add('default', () => <App><Gw2Item id={305} /></App>)
  .add('with count', () => <App><Gw2Item id={305} count={10} /></App>)
  .add('inline text', () => <App><Gw2Item inlineText="gw2spidy" id={305} /></App>)
  .add('not found', () => <App><Gw2Item id={112233} /></App>)
  .add('loading', () => <App><Gw2Item /></App>);

storiesOf('Gw2Skill', module)
  .add('default', () => <App><Gw2Skill id={1141} /></App>)
  .add('inline text', () => <App><Gw2Skill inlineText="wiki" id={1141} /></App>)
  .add('not found', () => <App><Gw2Skill id={112233} /></App>)
  .add('loading', () => <App><Gw2Skill /></App>);

storiesOf('Gw2Trait', module)
  .add('default', () => <App><Gw2Trait id={2177} /></App>)
  .add('active', () => <App><Gw2Trait id={2177} active /></App>)
  .add('inline text', () => <App><Gw2Trait inlineText="wiki" id={2177} /></App>)
  .add('not found', () => <App><Gw2Trait id={112233} /></App>)
  .add('loading', () => <App><Gw2Trait /></App>);

storiesOf('Gw2Specialization', module)
  .add('default', () => <App><Gw2Specialization id={57} /></App>)
  .add('active traits', () => <App><Gw2Specialization id={56} activeTraits={[2177, 2061, 2138]} /></App>)
  .add('not found', () => <App><Gw2Specialization id={112233} /></App>)
  .add('loading', () => <App><Gw2Specialization /></App>);

storiesOf('Gw2Title', module)
  .add('default', () => <App><Gw2Title id={270} /></App>)
  .add('not found', () => <App><Gw2Title id={112233} /></App>)
  .add('loading', () => <App><Gw2Title /></App>);

storiesOf('Gw2Skin', module)
  .add('default', () => <App><Gw2Skin id={191} /></App>)
  .add('inline text', () => <App><Gw2Skin inlineText="gw2spidy" id={191} /></App>)
  .add('not found', () => <App><Gw2Skin id={112233} /></App>)
  .add('loading', () => <App><Gw2Skin /></App>);

storiesOf('Gw2Map', module)
  .add('default', () => <App><Gw2Map id={549} /></App>)
  .add('loading', () => <App><Gw2Map /></App>)
  .add('not found', () => <App><Gw2Map id={112233} /></App>)
  .add('no map image', () => <App><Gw2Map id={23} /></App>);

const makeLangApp = (lang) => (
  <LanguageProvider lang={lang} key={lang}>
    <App>
      <Gw2Item id={80923} />
    </App>
  </LanguageProvider>
);

storiesOf('LanguageProvider', module)
  .add('en', () => makeLangApp('en'))
  .add('fr', () => makeLangApp('fr'))
  .add('zh', () => makeLangApp('zh'))
  .add('ru', () => makeLangApp('ru'))
  .add('es', () => makeLangApp('es'))
  .add('de', () => makeLangApp('de'));
