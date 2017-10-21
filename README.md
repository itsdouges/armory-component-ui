# [armory-component-ui](https://github.com/madou/armory-component-ui)

[![NPM version](http://img.shields.io/npm/v/armory-component-ui.svg?style=flat-square)](https://www.npmjs.com/package/armory-component-ui)
[![NPM downloads](http://img.shields.io/npm/dm/armory-component-ui.svg?style=flat-square)](https://www.npmjs.com/package/armory-component-ui)
[![Build Status](http://img.shields.io/travis/madou/armory-component-ui/master.svg?style=flat-square)](https://travis-ci.org/madou/armory-component-ui)
[![codecov](https://codecov.io/gh/madou/armory-component-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/madou/armory-component-ui)
[![Dependency Status](http://img.shields.io/david/madou/armory-component-ui.svg?style=flat-square)](https://david-dm.org/madou/armory-component-ui)
[![Discord](https://img.shields.io/badge/discord-GW2Armory-blue.svg)](https://discord.gg/3BRbV7b)


Common components and features for GW2Armory.com and GW2AEmbeds. With data fetching, persistence, error handling, and a plethora of components for use, all out-of-the-box.

## Installation

```bash
npm install armory-component-ui --save
```

### State Management

Redux and redux-thunk are used for state management.
Here is an example integration of `armory-component-ui`
with its redux state management. Note the use of `reducers`.

```javascript
import { Provider } from 'react-redux';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers, Tooltip } from 'armory-component-ui';

const store = createStore(
  // Create the root reducer.
  combineReducers(reducers),

  // Set the thunk middleware.
  applyMiddleware(thunk),
);

const App = () => (
  <Provider store={store}>
    <span>
      <div>My Other Components Here</div>
      <Tooltip />
    </span>
  </Provider>
);
```

### Styles

Make sure to import the component styles to your application.

If you're using webpack, simply do:

```javascript
import '!!style-loader!css-loader!armory-component-ui/styles.css';
```

This resets all loaders on this import, then applies the style and css loader.

### Fonts

The `menomonia` and `opensans` fonts are used across these components.
Look inside [`/stories/styles.css`](https://github.com/madou/armory-embeds/blob/master/src/styles.less) for an example font definition.
All the fonts are included in the package for you to use.

### Images

Copy `node_modules/armory-coponent-ui/images` to `{WHEREYOUWANT}/images`.
If you are storing the images in a subdirectory (e.g: `/assets/images`) or on another server altogether,
make sure to set `document.__publicPath` to the that path.

So for example if we're in a subdirectory as above, set it to `document.__publicPath = '/assets';`.

If rendering on the server you'll have to fake the `document` global variable.

### Components

#### `<CharacterPreview />`

```javascript
import { CharacterPreview } from 'armory-component-ui';

() => <CharacterPreview name="Quatermile" />
```

| prop | type | description | required |
|-|-|-|-|
| name | `string` | n/a | yes |
| className | `string` | n/a | no |

#### `<Gw2Skin />`

```javascript
import { Gw2Skin } from 'armory-component-ui';

() => <Gw2Skin id={23} />
```

| prop | type | description | required |
|-|-|-|-|
| id | `number` | n/a | yes |
| count | `number` | Sets the count which affects the name for both the `<Tooltip />` and `inlineText`. | no |
| size | `number` | Custom size of the icon, e.g: `40` will result in a 40x40 icon. | no |
| tooltipTextOverride | `string` | Overrides the tooltip with custom text | no |
| inlineText | `'gw2Spidy'`, `'wiki'`, `string` | Will show text next to the icon that links to somewhere. Passing in any string will result in linking to that string. | no |
| className | `string` | n/a | no |

#### `<Gw2Title />`

```javascript
import { Gw2Title } from 'armory-component-ui';

() => <Gw2Title id={44} />
```

| prop | type | description | required |
|-|-|-|-|
| id | `number` | n/a | yes |

#### `<Gw2GuildUpgrade />`

```javascript
import { Gw2GuildUpgrade } from 'armory-component-ui';

() => <Gw2GuildUpgrade id={44} />
```

| prop | type | description | required |
|-|-|-|-|
| id | `number` | n/a | yes |

#### `<Gw2Item />`

```javascript
import { Gw2Item } from 'armory-component-ui';

() =>
  <Gw2Item
    equipped
    id={23}
    count={4}
    size={64}
    inlineText="wiki"
    upgrades={[24815]}
    infusions={[49426]}
  />
```

| prop | type | description | required |
|-|-|-|-|
| id | `number` | n/a | yes |
| statsId | `number` | Id of the stats the item should be assigned. | no |
| count | `number` | Sets the count which affects the name for both the `<Tooltip />` and `inlineText`. | no |
| tooltipTextOverride | `string` | Overrides the tooltip with custom text | no |
| size | `number` | Custom size of the icon, e.g: `40` will result in a 40x40 icon. | no |
| inlineText | `'gw2Spidy'`, `'wiki'`, `string` | Will show text next to the icon that links to somewhere. Passing in any string will result in linking to that string. | no |
| className | `string` | n/a | no |
| equipped | `boolean` | Shows 'Equipped' text at the top of the `<Tooltip />`. | no |
| upgrades | `Array<number>` | Array of upgrade ids (`v2/items`). | no |
| infusions | `Array<number>` | Array of infusion ids (`v2/items`). | no |
| stats | `{ attributes: Array<{ [attribute]: string }> }` | Static stats usually passed from `v2/characters`. See: https://wiki.guildwars2.com/wiki/API:2/characters. Generally better to just use `statsId`. | no |
| upgradeCounts | `{ [upgradeId]: number }` | Consolidation of total upgrade counts. | no |
| onClick | Function | n/a | no |

#### `<Gw2Map />`

```javascript
import { Gw2Map } from 'armory-component-ui';

() => <Gw2Map id={549} />
```

| prop | type | description | required |
|-|-|-|-|
| id | `number` | n/a | yes |
| className | `string` | n/a | no |

#### `<Gw2Infusion />`

```javascript
import { Gw2Infusion } from 'armory-component-ui';

() => <Gw2Infusion id={49426} />
```

| prop | type | description | required |
|-|-|-|-|
| id | `number` | n/a | yes |

#### `<Gw2Upgrade />`

```javascript
import { Gw2Upgrade } from 'armory-component-ui';

() => <Gw2Upgrade id={24615} />
```

| prop | type | description | required |
|-|-|-|-|
| id | `number` | n/a | yes |

#### `<Gw2Skill />`

```javascript
import { Gw2Skill } from 'armory-component-ui';

() => <Gw2Skill id={5493} />
```

| prop | type | description | required |
|-|-|-|-|
| id | `number` | n/a | yes |
| className | `string` | n/a | no |
| tooltipTextOverride | `string` | Overrides the tooltip with custom text | no |
| size | `number` | Custom size of the icon, e.g: `40` will result in a 40x40 icon. | no |
| inlineText | `'gw2Spidy'`, `'wiki'`, `string` | Will show text next to the icon that links to somewhere. Passing in any string

#### `<Gw2Specialization />`

```javascript
import { Gw2Specialization } from 'armory-component-ui';

() => <Gw2Specialization id={56} activeTraits={[2177, 2061, 2138]} />
```

| prop | type | description | required |
|-|-|-|-|
| id | `number` | n/a | yes |
| activeTraits | `Array<number>` | Major traits that are active. | no |

#### `<Gw2Trait />`

```javascript
import { Gw2Trait } from 'armory-component-ui';

() => <Gw2Trait id={229} />
```

| prop | type | description | required |
|-|-|-|-|
| id | `number` | n/a | yes |
| active | `boolean` | Sets the trait to active (100% opacity). | no |
| className | `string` | n/a | no |
| tooltipTextOverride | `string` | Overrides the tooltip with custom text | no |
| size | `number` | Custom size of the icon, e.g: `40` will result in a 40x40 icon. | no |
| inlineText | `'gw2Spidy'`, `'wiki'`, `string` | Will show text next to the icon that links to somewhere. Passing in any string

#### `<ArmoryBadge />`

```javascript
import { ArmoryBadge } from 'armory-component-ui';

() => <ArmoryBadge hotlink />
```

| prop | type | description | required |
|-|-|-|-|
| className | `string` | n/a | no |
| hotlink | `boolean` | Enables the badge to have a link back to the armory. | no |

#### `<Gold />`

```javascript
import { Gold } from 'armory-component-ui';

() => <Gold coins={12345} />
```

| prop | type | description | required |
|-|-|-|-|
| className | `string` | n/a | no |

#### `<LanguageProvider />`

```javascript
import { LanguageProvider } from 'armory-component-ui';
<LanguageProvider lang="de">
  <div>other components here</div>
</LanguageProvider>
```

| prop | type | description | required |
|-|-|-|-|
| lang | 'en', 'de', 'fr', 'zh', 'ru', 'es' | Sets the language for all child (armory) components | yes |
| children | `Node` | n/a | yes |

#### `<PieChart />`

```javascript
import { PieChart } from 'armory-component-ui';

() =>
  <PieChart
    dataValues={[{
      color: 'lightgreen',
      name: 'Sylvari',
      value: 5455,
    }, {
      color: 'yellow',
      name: 'Human',
      value: 1000,
    }]}
  />
```

| prop | type | description | required |
|-|-|-|-|
| dataValues | `DataValues` | The data for the chart, see the example above. | yes |
| size | `number` | The custom size of the chart. E.g: `128` will result in a chart 128x128. | no |
| className | `string` | n/a | no |

#### `<Tooltip />`

Make sure to put this as high as you can in the component tree.
This will show the tooltip when appropriate for other components.

```javascript
import { Tooltip } from 'armory-component-ui';

() => <Tooltip />
```

#### `<TooltipTrigger />`

Shows the tooltip when mouse over/touch start.
Hides the tooltip when mouse leave/touch end.

```javascript
import { TooltipTrigger } from 'armory-component-ui';

() =>
  <TooltipTrigger
    data="Cool Tooltip"
    type="items"
  >
    <span>Hover Over Me</span>
  </TooltipTrigger>
```

| prop | type | description | required |
|-|-|-|-|
| children | `Node` | n/a | yes |
| type | `'items'`, `'amulets'`, `'trait'`, `'skill'`, `'achievement'`, `'guildUpgrade'` | Type of tooltip to show. Only affects the tooltip if the data sent is an `Object`. | no |
| data | `string`, `Object` | Data to send to the `<Tooltip />`. | no |
| onMouseEnter | `Function` | n/a | no |
| onMouseLeave | `Function` | n/a | no |

### Helpers

#### `reducers: { [string]: Function }`

Object of reducer functions, pass this into your combineReducers function.

```javascript
import { reducers } from 'armory-component-ui';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

const store = createStore(
  combineReducers(reducers),
);

const App = () => (
  <Provider store={store}>
    <div />
  </Provider>
);
```

#### `actions: Object`

Standard redux actions that fetch gw2 data.

```javascript
import { connect } from 'react-redux';
import { actions } from 'armory-component-ui';

const mapStateToProps = (state) => ({
  skills: state.skills,
});

const mapDispatchToProps = {
  fetch: actions.fetchSkills,
};

connect(mapStateToProps, mapDispatchToProps)(
  class SomeSkill extends React.Component {
    componentDidMount () {
      this.props.fetch([1139, 5490, 5495]);
    }

    render () {
      const skill = this.props.skills[1139];

      return (
        <div>
          {skill.name}
        </div>
      );
    }
  }
);
```

| actionName | arguments |
|-|-|
| fetchSkills | `Array<number>` |
| fetchAchievementCategories | `Array<number>` | `'all'` |
| fetchAchievementGroups | `Array<number>` | `'all'` |
| fetchAchievements | `Array<number>` |
| fetchAmulets | `Array<number>` |
| fetchCurrencies | `Array<number>` |
| fetchGuildUpgrades | `Array<number>` |
| fetchItemStats | `Array<number>` |
| fetchMaps | `Array<number>` |
| fetchMaterials | `Array<number>` |
| fetchPets | `Array<number>` |
| fetchProfessions | `Array<number>` |
| fetchPvpSeasons | `Array<number>` |
| fetchAmulets | `Array<number>` |
| fetchSkills | `Array<number>` |
| fetchSkins | `Array<number>` |
| fetchSpecializations | `Array<number>` |
| fetchTitles | `Array<number>` |
| fetchTraits | `Array<number>` |
| fetchWorlds | `Array<number>` |
| fetchCalculatedItemStats | `Array<{ id: number, itemId: number, type: string, rarity: string, level: number }>` |

#### `markup(text: string, useTagName: boolean)`

By default the class will be a class inside the `armory-component-ui/styles.css`:

```javascript
import { markup } from 'armory-component-ui';

const text = 'Gain a boon upon casting a <c=@abilitytype>glyph</c> based on your attunement. <c=@abilitytype>Glyphs</c> gain reduced recharge.';

markup(text);
// <span dangerouslySetInnerHTML={{ __html: 'Gain a boon upon casting a <span class="abilitytype">glyph</span> based on your attunement. <span class="DxsxS">Glyphs</span> gain reduced recharge.' }}>
```

If you pass `useTagName` as true, the class on the element will be the `@colourname` text, for example:

```javascript
import { markup } from 'armory-component-ui';

const text = 'Gain a boon upon casting a <c=@abilitytype>glyph</c> based on your attunement. <c=@abilitytype>Glyphs</c> gain reduced recharge.';

markup(text, true);
// <span dangerouslySetInnerHTML={{ __html: 'Gain a boon upon casting a <span class="abilitytype">glyph</span> based on your attunement. <span class="abilitytype">Glyphs</span> gain reduced recharge.' }}>
```

#### `persistToLocalStorage(boolean)`

By default data will be persisted to local storage.
You can turn this off by doing the following:

```javascript
import { persistToLocalStorage } from 'armory-component-ui';

persistToLocalStorage(false);
// Local storage data persistence is now turned off.
```

## Local Development

```bash
git clone git@github.com:madou/armory-component-ui.git
cd armory-component-ui
yarn # See https://yarnpkg.com/lang/en/docs/install/
npm start # Runs react-storybook
npm run tdd # Runs tests in watch mode
```

### Building Docs

```bash
npm run build-storybook
```

### Releasing

```bash
# Make sure the changelog has your changes under Unreleased
# Be on master branch
npm version major|minor|patch
```

© 2015-present gw2armory.com
