// @flow

import type { Gw2Map as MapType } from 'flowTypes';

import React from 'react';
import cx from 'classnames';
import includes from 'lodash/includes';

import { get as getLang } from '../../lib/i18n';
import styles from './styles.less';

const UNSUPPORTED = ['zh', 'ru'];

const getWikiSupportedLanguage = (language) => {
  if (includes(UNSUPPORTED, language)) {
    return 'en';
  }

  return language;
};

const LANGUAGE = getWikiSupportedLanguage(getLang());

const cleanName = (name) => name && name.replace('Beta ', '').replace(' BETA', '');

function getStyle (id = 0) {
  try {
    const image = require(`./images/${id}.jpg`);
    return {
      backgroundImage: `url(${image})`,
    };
  } catch (e) {
    return {};
  }
}

type MapProps = {
  data: MapType,
  className?: string,
};

const Map = ({ data, className }: MapProps) => (
  <div className={cx(styles.root, className)} style={getStyle(data.id)}>
    <a
      href={`https://wiki-${LANGUAGE}.guildwars2.com/wiki/${cleanName(data.name)}`}
      // eslint-disable-next-line react/jsx-no-target-blank
      target="_blank"
      className={styles.name}
    >
      {data.name && <span title={data.name}>{data.name}</span>}
    </a>
  </div>
);

Map.defaultProps = {
  data: {
    name: '',
    id: 0,
  },
  className: '',
};

export default Map;
