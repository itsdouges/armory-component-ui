// @flow

import type { Node } from 'react';
import React from 'react';
import cx from 'classnames';
import config from '../../config';
import styles from './styles.less';

type Props = {
  name: string,
  alias: string,
  race: string,
  className: string,
  appearance: 'compact' | 'default',
  children?: Node,
};

const buildBackgroundImage = (alias, name) => encodeURI(`url(${config.imageEndpoint}/${alias}/characters/${name})`);

const CharacterPortrait = ({
  name,
  alias,
  race,
  children,
  className,
  appearance,
}: Props) => (
  <div
    className={cx(
      styles.root,
      className,
      styles.portraitBgDefault,
      race && styles[race.toLowerCase()],
      { [styles.compact]: appearance === 'compact' },
    )}
  >
    <div className={cx(styles.portraitTopIn, styles.borderStrip1)} />

    <div
      className={cx(styles.portrait)}
      style={{
        backgroundImage: alias && name && buildBackgroundImage(alias, name),
      }}
    />

    <div className={cx(styles.portraitBottomIn, styles.borderStrip2)} />

    {children}
  </div>
);

CharacterPortrait.defaultProps = {
  name: '',
  alias: '',
  race: '',
  className: '',
  appearance: 'default',
};

export default CharacterPortrait;
