// @flow

import React from 'react';
import cx from 'classnames';
import styles from './styles.less';

export type IconProps = {
  name?: string,
  size?: string,
  className?: string,
  src?: string,
  button?: boolean,
  children?: any,
  sizePx?: number,
  style?: {
    [string]: ?string,
  },
  onClick?: (SyntheticEvent<*>) => void,
};

const buildStyle = ({ style, src, name, imageSrc, sizePx }) => {
  return {
    ...style,
    width: sizePx && `${sizePx}px`,
    height: sizePx && `${sizePx}px`,
    backgroundImage: (src || name) && `url(${src || imageSrc})`,
  };
};

const Icon = ({ name, size, className, src, button, children, style, sizePx, onClick, ...props }: IconProps) => {
  let imageSrc;

  try {
    imageSrc = require(`../../assets/images/${name}`);
  } catch (ex) {
    imageSrc = '';
  }
  const cssProps = {};
  cssProps.className = cx(styles.container, styles[size], className, button && styles.button);
  cssProps.style = buildStyle({ style, src, name, imageSrc, sizePx });

  return onClick ? (
    <a
      {...props}
      {...cssProps}
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <div
      {...props}
      {...cssProps}
    >
      {children}
    </div>
  );
};

Icon.defaultProps = {
  size: 'mini',
  name: '',
  className: '',
  src: '',
  button: false,
  children: undefined,
};

export default Icon;
