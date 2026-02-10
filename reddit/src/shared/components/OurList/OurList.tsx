import React from 'react';
import styles from './OurList.module.css';


export interface IOurListProps {
  someShitHere: TOurListChildrenProps[];
  onClick?: (id: string) => void;
}


export type TOurListChildrenProps = {
  id: string;
  text: string;
  ManuallySetLayoutTagHere: string;
  onClick: (id: string) => void;
  className?: string;
  href?: string;
}

export function OurList({ someShitHere, onClick }: IOurListProps) {
  return (
    <>
      <ul>
        {someShitHere.map((item: TOurListChildrenProps) => {
          return <li key={item.id} onClick={() => onClick?.(item.id)}>{item.text}</li>
        })}
      </ul>
    </>
  );
}
