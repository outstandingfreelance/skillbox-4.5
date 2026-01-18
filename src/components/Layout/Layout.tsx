import React from 'react';
import styles from './layout.css?url';

interface LayoutType {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutType) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
