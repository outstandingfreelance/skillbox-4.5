import React from 'react';
import styles from './GenericList.module.css';
import { Icon } from '../Icon/Icon';

interface IGenericListProps {
  PList: [];
  onClick: (id: string) => void;
  className?: string;
  ManuallySetLayoutTagHere?: string;
  textFromParent: string;
  text: string;
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

export function GenericList({ PList, onClick, listClass, itemClass, text }: IGenericListProps) {
  return (
    <>
      {PList.map(({ ManuallySetLayoutTagHere = 'div', text: textFromParent, className, id, href, onClick = { noop } }) => {
        const Tag = ManuallySetLayoutTagHere as keyof React.JSX.IntrinsicElements;

        return (
          <Tag key={id} className={className} href={href}>
            {Tag === 'ul' ? <li className={itemClass}>{textFromParent}
              <Icon src="/icon.svg" alt="dropdown list item icon" />
            </li> : ''}
          </Tag>
        )
      }
      )}
    </>
  );
}
