import styles from './Icon.module.css';
import classNames from 'classnames';

enum IconName {
  "like",
  "dislike",
  "comment",
  "share",
  "vite",
}

interface IIconProps {
  alt: string;
  size?: number;
  name: IconName;
}

export function Icon({ alt, size, name }: IIconProps) {
  const iconSizes = classNames({
    [styles[`${size}`]]: size,
  });

  return (
    <img className={iconSizes} style={{ width: size, height: size }} src={`public/icons/${name}.svg`} alt={alt} />
  );
}
