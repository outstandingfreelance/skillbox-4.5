import React from 'react';
import styles from './Text.module.css';
import classNames from 'classnames';
import { Break } from 'src/shared/Break/Break';

// тип пишут в интерфейс, а не наоборот
export type TSizes = 28 | 20 | 16 | 14 | 12 | 10;


interface ITextProps {
  // это - напоминание о том, что атйпскрит любит точность. если тебе наперёд измесетн не только тип, но и значения, то - бомби!
  As?: 'span' | 'p' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColors;
  bold?: boolean;
  inline?: boolean;
}


// надо выносить в отельный файл (не под компонент, а голоббальный) с enum'ами и констатами
export enum EColors {
  black = 'black',
  white = 'white',
  orange = 'orange',
  secondary = 'secondary',
  grayF1 = 'grayF1',
  grayF2 = 'grayF2',
  grayF3 = 'grayF3',
  grayF4 = 'grayF4',
  grayF5 = 'grayF5',
  grayF6 = 'grayF6',
}


export function Text(props: ITextProps) {
  const {
    As = 'p',
    children,
    size,
    mobileSize,
    tabletSize,
    desktopSize,
    color = EColors.black,
    bold = false,
    inline = false,
  } = props;


  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    // здесь он, поскольку вызывает не переменную, а частное значение (один из элементов массива который в переменной. типа того), то можно записать через точку, а не через квадратные скобки, как в примерах наверху. вспоминаем статью из learnJs
    { [styles.bold]: bold },
  )

  
  return (
    <As className={classes}>
      {children}
    </As>
  );
}
