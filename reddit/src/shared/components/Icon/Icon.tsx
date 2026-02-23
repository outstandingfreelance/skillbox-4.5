import React from 'react';
import styles from './Icon.module.css';


export function Icon({ src, alt }: { src: string; alt: string }) {
  return (
    <img className={styles.icon} src={src} alt={alt} />
  );
}
