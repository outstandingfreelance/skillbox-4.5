import React from 'react';
import styles from './TestTextItem.module.css';


export function TestTextItem({textFromParent}:{textFromParent: string}) {
  return (
    <div>
      {textFromParent}
    </div>
  );
}
