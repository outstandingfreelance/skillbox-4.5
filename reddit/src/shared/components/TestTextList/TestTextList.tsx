import React from 'react';
import styles from './TestTextList.module.css';
import { TestTextItem } from '../TestTextItem/TestTextItem';


export function TestTextList({text}: {text: string}) {
  return (
    <div>
      <TestTextItem textFromParent={text} />
    </div>
  );
}
