import React from 'react';
import styles from './Message.module.css';


export function Message() {
  return (
    <div>
      <a href="#" className={styles.messageLink} >
        <div className={styles.messageCount}></div>
        <img className={styles.messageIcon} src="/src/assets/messages-icon.svg" alt="Сообщения" />
      </a>
    </div>
  );
}
