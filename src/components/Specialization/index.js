// @flow

import type { Specialization as SpecType, Traits } from 'flowTypes';

import React from 'react';
import colours from '../../styles/colours';
import styles from './styles.less';
import Trait from '../Trait';
import SpecializationIcon from './SpecializationIcon';

const getTrait = (id, traits, error) => (traits && traits[id]) || { error };
const isActive = (id, activeTraits) => (activeTraits || []).indexOf(id) >= 0;
const layoutTraits = (ids, traits, activeTraits, error) => ids.map((id, index) =>
  <Trait
    key={id || index}
    data={getTrait(id, traits, error)}
    active={isActive(id, activeTraits)}
  />
);

const getStyle = (spec) => ({
  backgroundImage: `url(${spec.background || ''})`,
  backgroundColor: spec.background && colours._black,
});

const emptyTraits = [0, 0, 0, 0, 0, 0, 0, 0, 0];

type Props = {
  traits: Traits,
  activeTraits?: Array<number>,
  specialization: SpecType,
};

const Specialization = ({ activeTraits, traits, specialization }: Props) => {
  const minorTraits = specialization.minor_traits || emptyTraits;
  const majorTraits = specialization.major_traits || emptyTraits;
  const error = specialization.error && specialization.error;

  return (
    <div className={styles.root}>
      <div
        className={styles.background}
        style={getStyle(specialization)}
      />

      <SpecializationIcon
        data={specialization}
        className={styles.bigIcon}
      />

      <div className={styles.traits}>
        <Trait
          active
          className={styles.minorTraitColumn}
          data={getTrait(minorTraits[0], traits, error)}
        />

        <div className={styles.majorTraitColumn}>
          {layoutTraits(majorTraits.slice(0, 3), traits, activeTraits, error)}
        </div>

        <Trait
          active
          className={styles.minorTraitColumn}
          data={getTrait(minorTraits[1], traits, error)}
        />

        <div className={styles.majorTraitColumn}>
          {layoutTraits(majorTraits.slice(3, 6), traits, activeTraits, error)}
        </div>

        <Trait
          active
          className={styles.minorTraitColumn}
          data={getTrait(minorTraits[2], traits, error)}
        />

        <div className={styles.majorTraitColumn}>
          {layoutTraits(majorTraits.slice(6, 9), traits, activeTraits, error)}
        </div>
      </div>
    </div>
  );
};

Specialization.defaultProps = {
  specialization: {},
};

export default Specialization;
