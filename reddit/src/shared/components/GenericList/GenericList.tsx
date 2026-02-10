import React from 'react';
import styles from './GenericList.module.css';
import type { TOurListChildrenProps } from 'src/shared/components/OurList/OurList.tsx';

interface IGenericListProps {
  someShitHere: TOurListChildrenProps[];
  onClick: (id: string) => void;
  ManuallySetLayoutTagHere: string;
  As?: 'a' | 'li' | 'button' | 'div';
}

interface IItem{

}



export function GenericList( {someShitHere, onClick} : IGenericListProps ) {
  return (
    <>
      { someShitHere.map(({ ManuallySetLayoutTagHere = 'div', text, className, id, href }) => {
        const Tag = ManuallySetLayoutTagHere as keyof React.JSX.IntrinsicElements;

        return(
          <Tag key={id} className={className} onClick={() => onClick(id)} href={href}>

            {text}
          </Tag>
        )
      }
    
    
    ) }
    </>
  );
}
