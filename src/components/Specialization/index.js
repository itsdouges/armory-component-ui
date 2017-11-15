// @flow

import type { Specialization as SpecType, Traits, TraitClickCallback } from 'flowTypes';

import React from 'react';
import cx from 'classnames';
import colours from '../../styles/colours';
import styles from './styles.less';
import Trait from '../Trait';
import SpecializationIcon from './SpecializationIcon';

const getTrait = (id, traits, error) => traits[id] || { error };
const isActive = (id, activeTraits) => activeTraits.indexOf(id) >= 0;
const getTraitClickCallback = (id, callback) => (id && callback ? () => { callback(id); } : undefined);
const layoutTraits = (ids, traits, activeTraits, error, onTraitClick, majorTraitClass) => ids.map((id, index) =>
  <Trait
    key={id || index}
    className={cx(styles.minorTraitColumn, majorTraitClass)}
    data={getTrait(id, traits, error)}
    active={isActive(id, activeTraits)}
    onClick={getTraitClickCallback(id, onTraitClick)}
  />
);

const getStyle = (spec) => ({
  backgroundImage: `url(${spec.background || ''})`,
  backgroundColor: spec.background && colours._black,
});

const emptyTraits = [0, 0, 0, 0, 0, 0, 0, 0, 0];

type Props = {
  traits: Traits,
  activeTraits: Array<number>,
  specialization: SpecType,
  onTraitClick: TraitClickCallback,
  minorTraitClass: string,
  majorTraitClass: string,
};

const Specialization = ({
  activeTraits,
  traits,
  specialization,
  onTraitClick,
  minorTraitClass,
  majorTraitClass,
}: Props) => {
  const minorTraits = specialization.minor_traits || emptyTraits;
  const majorTraits = specialization.major_traits || emptyTraits;
  const error = specialization.error;

  return (
    <div className={styles.root}>
      <div
        className={styles.background}
        style={getStyle(specialization)}
      />

      <SpecializationIcon
        {...specialization}
        className={styles.bigIcon}
      />

      <div className={styles.traits}>
        <Trait
          active
          className={cx(styles.minorTraitColumn, minorTraitClass)}
          data={getTrait(minorTraits[0], traits, error)}
          onClick={getTraitClickCallback(minorTraits[0], onTraitClick)}
        />

        <div className={styles.majorTraitColumn}>
          {layoutTraits(majorTraits.slice(0, 3), traits, activeTraits, error, onTraitClick, majorTraitClass)}
        </div>

        <Trait
          active
          className={cx(styles.minorTraitColumn, minorTraitClass)}
          data={getTrait(minorTraits[1], traits, error)}
          onClick={getTraitClickCallback(minorTraits[1], onTraitClick)}
        />

        <div className={styles.majorTraitColumn}>
          {layoutTraits(majorTraits.slice(3, 6), traits, activeTraits, error, onTraitClick, majorTraitClass)}
        </div>

        <Trait
          active
          className={cx(styles.minorTraitColumn, minorTraitClass)}
          data={getTrait(minorTraits[2], traits, error)}
          onClick={getTraitClickCallback(minorTraits[2], onTraitClick)}
        />

        <div className={styles.majorTraitColumn}>
          {layoutTraits(majorTraits.slice(6, 9), traits, activeTraits, error, onTraitClick, majorTraitClass)}
        </div>
      </div>
    </div>
  );
};

Specialization.defaultProps = {
  specialization: {
    name: '',
    background: '',
    minor_traits: emptyTraits,
    major_traits: emptyTraits,
  },
  traits: {},
  activeTraits: [],
};

export default Specialization;
