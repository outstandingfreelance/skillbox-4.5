import React from 'react';
import styles from './Header.module.css';
import { SearchBar } from './SearchBar/SearchBar';
import { Message } from './Message/Message';
import { HeaderNav } from './HeaderNav/HeaderNav';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerControlsContainer}>
        <a href="#" className={styles.headerAvatarLink}>
          <img src="https://cdn.dribbble.com/userupload/46512611/file/ad8a7f0ef1030221b7ba67a86854caf6.jpg?resize=752x&vertical=center" alt="OUR AVATAR" className={styles.headerAvatar} />
        </a>
      <SearchBar />
      <Message />
      </div>

      <HeaderNav />
    </header>
  );
}
