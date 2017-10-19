// @flow

import type { Node } from 'react';
import React from 'react';
import cx from 'classnames';

import Icon from '../Icon';
import Placeholder from './Placeholder';
import styles from './styles.less';

export type Props = {
  title: Node,
  subTitle: Node,
  imageSrc?: string,
  imageName?: string,
  imageStyle?: Object,
  className: string,
  appearance: 'small' | 'big',
  children: Node,
};

const ContentCard = ({
  title,
  subTitle,
  className,
  appearance,
  children,
  imageName,
  imageSrc,
  imageStyle,
}: Props) => {
  if (!title) {
    return <Placeholder appearance={appearance} className={className} />;
  }

  return (
    <div className={cx(styles.root, className, styles[appearance])}>
      <Icon
        className={cx(styles.image)}
        name={imageName}
        src={imageSrc}
        style={imageStyle}
      >
        {children}
      </Icon>

      <div className={styles.textContainer}>
        {appearance === 'big'
          ? <h2 className={styles.title}>{title}</h2>
          : <div className={styles.title}>{title}</div>
        }
        <div className={styles.subTitle}>
          {subTitle}
        </div>
      </div>
    </div>
  );
};

ContentCard.defaultProps = {
  title: '',
  subTitle: '',
  className: '',
  appearance: 'big',
  children: undefined,
};

export default ContentCard;
