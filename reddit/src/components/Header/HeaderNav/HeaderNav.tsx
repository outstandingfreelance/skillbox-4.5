import React from 'react';
import styles from './HeaderNav.module.css';


export function HeaderNav() {
  return (
    <nav className={styles.headerNav}>
      <ul className={styles.headerNavList}>
        <li className={styles.headerNavItem}>
          <a href="#" className={styles.headerNavLink}>Прокомментированное</a>
        </li>
        <li className={styles.headerNavItem}>
          <a href="#" className={styles.headerNavLink}>Просмотренное</a>
        </li>
        <li className={styles.headerNavItem}>
          <a href="#" className={styles.headerNavLink}>Мои посты</a>
        </li>
        <li className={styles.headerNavItem}>
          <a href="#" className={styles.headerNavLink}>Сохранённое</a>
        </li>
      </ul>
      <div className={styles.headerNavClose}>
        закрыть
      </div>
    </nav>
  );
}
