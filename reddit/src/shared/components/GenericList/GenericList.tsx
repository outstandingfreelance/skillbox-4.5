import React from 'react';
import styles from './GenericList.module.css';

interface IGenericListProps {
  someShitHere: [];
  onClick: (id: string) => void;
}

interface IItem {
  id: string;
  text: string;
  ManuallySetLayoutTagHere: string;
  onClick: (id: string) => void;
  className?: string;
  href?: string;
  bndImg?: string;
  listClass?: string;
  itemClass?: string;
}

export function GenericList({ someShitHere, onClick, listClass, itemClass }: IGenericListProps) {
  return (
    <>
      {someShitHere.map(({ ManuallySetLayoutTagHere = 'div', text, className, id, href, bndImg }) => {
        const Tag = ManuallySetLayoutTagHere as keyof React.JSX.IntrinsicElements;

        return (
          <Tag key={id} className={className} onClick={() => onClick(id)} href={href}>
            {Tag === 'ul' ? <li className={itemClass}>{text}</li> : '' }
            {/* {text} */}
          </Tag>
        )
      }
      )}
    </>
  );
}
