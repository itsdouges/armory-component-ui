// @flow

import type { Specialization as SpecType } from 'flowTypes';

import React from 'react';
import Dot from 'react-connect-the-dots';
import cx from 'classnames';
import colours from '../../styles/colours';
import styles from './styles.less';
import Gw2Trait from '../Gw2Trait';
import SpecializationIcon from './SpecializationIcon';

const TraitDots = ({ children, pairs = [] }) => {
  if (!pairs.length) {
    return children();
  }

  return pairs.reduce((component, pair) => {
    return (
      <Dot
        height={10}
        connector={(props) => <div {...props} className={styles.connector} />}
        pair={pair}
      >
        {component}
      </Dot>
    );
  }, children);
};

const getStyle = (spec) => ({
  backgroundImage: `url(${spec.background || ''})`,
  backgroundColor: spec.background && colours._black,
});

const emptyTraits = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const pairs = (activeIndex, ...joiningPairs) => (majorIndex) => {
  if (activeIndex !== majorIndex) {
    return [];
  }

  return joiningPairs.filter((val) => val !== undefined);
};

type Props = {
  activeTraits: Array<number>,
  specialization: SpecType,
};

const Specialization = ({ activeTraits, specialization }: Props) => {
  const minorTraits = specialization.minor_traits || emptyTraits;
  const majorTraits = specialization.major_traits || emptyTraits;

  let firstActiveMajor;
  let secondActiveMajor;
  let thirdActiveMajor;

  if (activeTraits.length) {
    firstActiveMajor = majorTraits.slice(0, 3).findIndex((id) => activeTraits.includes(id));

    const tempSecond = majorTraits.slice(3, 6).findIndex((id) => activeTraits.includes(id));
    if (tempSecond > 0) {
      secondActiveMajor = tempSecond + 3;
    }

    const tempThird = majorTraits.slice(6, 9).findIndex((id) => activeTraits.includes(id));
    if (tempThird) {
      thirdActiveMajor = tempThird + 6;
    }
  }

  const buildFirstMajorPair = pairs(firstActiveMajor, 'minor-1', 'minor-2');
  const buildSecondMajorPair = pairs(secondActiveMajor, 'minor-2', 'minor-3');
  const buildThirdMajorPair = pairs(thirdActiveMajor, 'minor-3');

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
        <TraitDots pairs={['minor-1']}>
          {(setRef) => (
            <Gw2Trait
              active
              setRef={setRef}
              id={minorTraits[0]}
              className={cx(styles.minorTraitColumn, styles.trait)}
            />
          )}
        </TraitDots>

        <div className={styles.majorTraitColumn}>
          <TraitDots pairs={buildFirstMajorPair(0)}>
            {(setRef) => (
              <Gw2Trait
                setRef={setRef}
                id={majorTraits[0]}
                active={activeTraits.includes(majorTraits[0])}
                className={styles.trait}
              />
            )}
          </TraitDots>

          <TraitDots pairs={buildFirstMajorPair(1)}>
            {(setRef) => (
              <Gw2Trait
                setRef={setRef}
                id={majorTraits[1]}
                active={activeTraits.includes(majorTraits[1])}
                className={styles.trait}
              />
            )}
          </TraitDots>

          <TraitDots pairs={buildFirstMajorPair(2)}>
            {(setRef) => (
              <Gw2Trait
                setRef={setRef}
                id={minorTraits[2]}
                active={activeTraits.includes(majorTraits[2])}
                className={styles.trait}
              />
            )}
          </TraitDots>
        </div>

        <TraitDots pairs={['minor-2']}>
          {(setRef) => (
            <Gw2Trait
              active
              setRef={setRef}
              id={minorTraits[1]}
              className={cx(styles.minorTraitColumn, styles.trait)}
            />
          )}
        </TraitDots>

        <div className={styles.majorTraitColumn}>
          <TraitDots pairs={buildSecondMajorPair(3)}>
            {(setRef) => (
              <Gw2Trait
                setRef={setRef}
                id={majorTraits[3]}
                active={activeTraits.includes(majorTraits[3])}
                className={styles.trait}
              />
            )}
          </TraitDots>

          <TraitDots pairs={buildSecondMajorPair(4)}>
            {(setRef) => (
              <Gw2Trait
                setRef={setRef}
                id={majorTraits[4]}
                active={activeTraits.includes(majorTraits[4])}
                className={styles.trait}
              />
            )}
          </TraitDots>

          <TraitDots pairs={buildSecondMajorPair(5)}>
            {(setRef) => (
              <Gw2Trait
                setRef={setRef}
                id={majorTraits[5]}
                active={activeTraits.includes(majorTraits[5])}
                className={styles.trait}
              />
            )}
          </TraitDots>
        </div>

        <TraitDots pairs={['minor-3']}>
          {(setRef) => (
            <Gw2Trait
              active
              setRef={setRef}
              id={minorTraits[2]}
              className={cx(styles.minorTraitColumn, styles.trait)}
            />
          )}
        </TraitDots>

        <div className={styles.majorTraitColumn}>
          <TraitDots pairs={buildThirdMajorPair(6)}>
            {(setRef) => (
              <Gw2Trait
                setRef={setRef}
                id={majorTraits[6]}
                active={activeTraits.includes(majorTraits[6])}
                className={styles.trait}
              />
            )}
          </TraitDots>

          <TraitDots pairs={buildThirdMajorPair(7)}>
            {(setRef) => (
              <Gw2Trait
                setRef={setRef}
                id={majorTraits[7]}
                active={activeTraits.includes(majorTraits[7])}
                className={styles.trait}
              />
            )}
          </TraitDots>

          <TraitDots pairs={buildThirdMajorPair(8)}>
            {(setRef) => (
              <Gw2Trait
                setRef={setRef}
                id={majorTraits[8]}
                active={activeTraits.includes(majorTraits[8])}
                className={styles.trait}
              />
            )}
          </TraitDots>
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
