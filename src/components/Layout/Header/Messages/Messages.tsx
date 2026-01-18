import React from 'react';
import styles from './messages.module.css';
import styleA from '../../../../assets/styleA.module.css';

export default function Messages() {
  return (
    <div className={styles.messagesContainer}>
      <div className={styles.notification}></div>
      <img src='/src/img/messages-icon.svg' alt='message-icon' className={styles.messages}></img>
    </div>
  );
}
