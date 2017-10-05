// @flow

// Fonts to include in package. Optionally required.
import './styles/fonts/menomonia.woff';
import './styles/fonts/menomonia.ttf';
import './styles/fonts/OpenSans-Light.ttf';
import './styles/fonts/OpenSans-Regular.ttf';
import './styles/fonts/OpenSans-SemiBold.ttf';

// Connected GW2 Components
export { default as Gw2Skin } from './components/Gw2Skin';
export { default as Gw2Title } from './components/Gw2Title';
export { default as Gw2GuildUpgrade } from './components/Gw2GuildUpgrade';
export { default as Gw2Icon } from './components/Gw2Icon';
export { default as Gw2Item } from './components/Gw2Item';
export { default as Gw2Map } from './components/Gw2Map';
export { default as Gw2Skill } from './components/Gw2Skill';
export { default as Gw2Specialization } from './components/Gw2Specialization';
export { default as Gw2Trait } from './components/Gw2Trait';

// Stateless GW2 Components
export { default as Item } from './components/Item';
export { default as Map } from './components/Map';
export { default as Skill } from './components/Skill';
export { default as Specialization } from './components/Specialization';
export { default as Trait } from './components/Trait';

// Utility Components
export { default as ArmoryBadge } from './components/ArmoryBadge';
export { default as Gold } from './components/Gold';
export { default as LanguageProvider } from './components/LanguageProvider';
export { default as PieChart } from './components/PieChart';
export { default as Tooltip } from './components/Tooltip';
export { default as TooltipTrigger } from './components/TooltipTrigger';

// Utility Functions
export { default as gw2Reducer } from './reducers/index';
export { default as gw2Actions } from './reducers/actions';
export { markup as parseMarkup } from './lib/gw2/parse';
