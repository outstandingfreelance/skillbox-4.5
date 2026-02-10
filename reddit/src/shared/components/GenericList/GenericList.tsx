import React from 'react';
import styles from './GenericList.module.css';
import type { TOurListChildrenProps } from 'src/shared/components/OurList/OurList.tsx';

interface IGenericListProps {
  someShitHere: TOurListChildrenProps[];
  onClick: (id: string) => void;
}

interface IItem {
  id: string;
  text: string;
  ManuallySetLayoutTagHere: string;
  onClick: (id: string) => void;
  className?: string;
  href?: string;
}



export function GenericList({ someShitHere, onClick }: IGenericListProps) {
  return (
    <>
      {someShitHere.map(({ ManuallySetLayoutTagHere = 'div', text, className, id, href }) => {
        const Tag = ManuallySetLayoutTagHere as keyof React.JSX.IntrinsicElements;

        return (
          <Tag key={id} className={className} onClick={() => onClick(id)} href={href}>
            {text}
          </Tag>
        )
      }


      )}
    </>
  );
}
