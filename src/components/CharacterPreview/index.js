// @flow

import type { Character, Items, Skins } from 'flowTypes';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import includes from 'lodash/includes';
import get from 'lodash/get';
import { createSelector } from 'reselect';
import cx from 'classnames';

import { leftItems, rightItems } from '../../lib/gw2/equipment';
import ResourceCard from '../ResourceCard';

import ArmoryBadge from '../ArmoryBadge';
import CharacterPortrait from '../CharacterPortrait';
import Gw2Item from '../Gw2Item';

import styles from './styles.less';
import { fetchCharacter } from '../../actions/characters';
import { mergeEliteSpec } from '../../reducers/characters.reducer';

type Props = {
  name: string,
  character?: Character,
  fetchCharacter: (name: string, any) => void,
  items?: Items,
  skins?: Skins,
  className?: string,
};

const selector = createSelector(
  (state, props) => state.characters.data[props.name],
  (state) => state.items,
  (state) => state.skins,
  (character, items, skins) => ({
    character: mergeEliteSpec(character),
    items,
    skins,
  })
);

export default connect(selector, {
  fetchCharacter,
})(
class CharacterPreview extends Component<Props> {
  props: Props;

  componentWillMount () {
    const name = this.props.name;
    if (!name) {
      return;
    }

    this.loadCharacter(name);
  }

  componentWillReceiveProps (nextProps: Props) {
    if (this.props.name === nextProps.name) {
      return;
    }

    this.loadCharacter(nextProps.name);
  }

  getItems (ids: Array<number> = []) {
    return ids.map((id) => (this.props.items || [])[id]);
  }

  loadCharacter (name: string) {
    this.props.fetchCharacter(name, {
      redirect404: false,
      basicLoad: true,
    });
  }

  render () {
    const {
      character,
      items,
      skins,
      className,
    } = this.props;

    const equipment = get(character, 'equipment', {});
    const profession = get(character, 'profession');
    const safeCharacter = get(this.props, 'character', {});

    return (
      <div className={cx(styles.root, className)}>
        <ArmoryBadge className={styles.badge} hotlink />

        <div className={styles.cover}>
          <CharacterPortrait character={character} className={styles.litePortrait} />
        </div>

        <a
          href={`https://gw2armory.com/${safeCharacter.alias}/c/${safeCharacter.name}`}
          className={styles.header}
        >
          <ResourceCard content={character} />
        </a>

        <div className={styles.equips}>
          {leftItems.map((item) => {
            const equip = equipment[item.key] || {};

            return (
              <Gw2Item
                {...item}
                small
                hide={includes(item.hideForClasses, profession)}
                key={item.key}
                upgradeCounts={equip.upgradeCounts}
                upgrades={this.getItems(equip.upgrades)}
                infusions={this.getItems(equip.infusions)}
                item={(items || [])[equip.id]}
                skin={(skins || [])[equip.skin]}
                stats={equip.stats}
                equipped
              />
            );
          })}

          {rightItems.map((item) => {
            const equip = equipment[item.key] || {};

            return (
              <Gw2Item
                {...item}
                small
                hide={includes(item.hideForClasses, profession)}
                key={item.key}
                upgradeCounts={equip.upgradeCounts}
                upgrades={this.getItems(equip.upgrades)}
                infusions={this.getItems(equip.infusions)}
                item={(items || [])[equip.id]}
                skin={(skins || [])[equip.skin]}
                stats={equip.stats}
                equipped
              />
            );
          })}
        </div>
      </div>
    );
  }
}
);
