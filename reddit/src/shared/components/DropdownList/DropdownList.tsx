import React from 'react';
import styles from './DropdownList.module.css';
import { generateRandomString } from 'src/utils/react/generateRandomIndex.tsx';

interface IDropdownListProps{
  iconSrc: string;
}


export function DropdownList(iconSrc, list) {
  return (
    <ul>
      {list.map(
        (item)=>{
          return(
            <li key={generateRandomString()}>{item.text}</li>
          )
        }
      )}
    </ul>
  );
}
