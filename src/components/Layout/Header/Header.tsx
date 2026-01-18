import React from 'react';
import styles from './header.css?url';
import Avatar from './Avatar/Avatar';
import Messages from './Messages/Messages';
import Searchbar from './Searchbar/Searchbar';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Avatar />
      <Messages />
      <Searchbar />
    </header>
  );
};

