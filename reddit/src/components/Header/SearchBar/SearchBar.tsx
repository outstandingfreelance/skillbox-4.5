import React from 'react';
import styles from './SearchBar.module.css';


export function SearchBar() {
  return (
    <input type='search' placeholder='Поиск' className={styles.searchBar} />
  );
}
