// @flow

// Ghetto public path setting for consumers.
import './publicPath';

// Fonts to include in package. Optionally required.
import './styles/fonts/menomonia.woff';
import './styles/fonts/menomonia.ttf';
import './styles/fonts/opensans.ttf';
import './styles/fonts/opensans-light.ttf';
import './styles/fonts/opensans-semibold.ttf';

// Utility Functions
// NOTE: Reducers have to be imported first as
// they dynamically create the action creators.
import { initialise as initialiseLs } from './lib/localStorage';

export { default as reducers } from './reducers/index';
export { default as actions } from './actions/gw2';
export { persistToLocalStorage } from './reducers/reducerFactory';
export { markup } from './lib/gw2/parse';

// Connected Components
export { default as Gw2Skin } from './components/Gw2Skin';
export { default as Gw2Title } from './components/Gw2Title';
export { default as Gw2GuildUpgrade } from './components/Gw2GuildUpgrade';
export { default as Gw2Icon } from './components/Gw2Icon';
export { default as Gw2Item } from './components/Gw2Item';
export { default as Gw2Map } from './components/Gw2Map';
export { default as Gw2Skill } from './components/Gw2Skill';
export { default as Gw2Specialization } from './components/Gw2Specialization';
export { default as Gw2Trait } from './components/Gw2Trait';

// Stateless Components
export { default as Item } from './components/Item';
export { default as Map } from './components/Map';
export { default as Skill } from './components/Skill';
export { default as Specialization } from './components/Specialization';
export { default as Trait } from './components/Trait';
export { default as ResourceCard } from './components/ResourceCard';
export { default as CharacterPortrait } from './components/CharacterPortrait';

// Utility Components
export { default as ArmoryBadge } from './components/ArmoryBadge';
export { default as Gold } from './components/Gold';
export { default as LanguageProvider } from './components/LanguageProvider';
export { default as PieChart } from './components/PieChart';
export { default as Tooltip, BaseTooltip } from './components/Tooltip';
export { default as TooltipTrigger } from './components/TooltipTrigger';
export { default as Icon } from './components/Icon';

initialiseLs();
