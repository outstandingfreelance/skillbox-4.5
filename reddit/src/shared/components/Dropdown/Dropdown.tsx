import styles from './dropdown.module.css';
import { useState, useEffect } from 'react';
import { noop } from '../../../utils/js/noop.ts'


interface IDropdownProps {
  children: React.ReactNode;
  button: React.ReactNode;
  isOpenManuallySetValue?: boolean;
  onOpen: () => void;
  onClose: () => void;
}


// там по факту, на useEffect всего да при первом рендере 
// всегда будет выполнять (лишний) onClose, но это не всегода оюязательно имправлятль
// делается это с помощью isMounted

// хуки это больше про фп, они заменяют очеь много кода для создания самописных lifeCycle-хуков


export function Dropdown({ button, children, isOpenManuallySetValue, onOpen = noop, onClose = noop }: IDropdownProps) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(isOpenManuallySetValue);
  // в то время: как useState задаёт только начальное состояние
  //  (задает начальное состояние , затем компонент рендерится.
  //  теперь когда компонет зарендерился, усилиями этой штуки его больше не изменить)
  // в это же время useEffect позволяет менять состояние после рендера!!!
  const handleOpen = () => {
    if (isOpenManuallySetValue !== undefined) {
      setIsDropDownOpen(!isDropDownOpen);
    }
  }
  // его не надо коментить, он нужен для того, чтобы при изменении isOpenManuallySetValue
  // компонент перерендерился
  useEffect(() => setIsDropDownOpen(isOpenManuallySetValue), [isOpenManuallySetValue])
  useEffect(() => isDropDownOpen ? onOpen : onClose, [isDropDownOpen]);


  return (
    <div className={styles.container}>
      {/* 2) Затем отреагирует уже сам список (примет во внимание изменившееc состояние и свернётся ) */}
      <div onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
        {button}
      </div>

      {/* 1) сперва чилсдрен примет на себя нажатие */}
      {isDropDownOpen && (
        <div className={styles.listContainer}>
          <div onClick={() => setIsDropDownOpen(false)}>
            {children}
          </div>
        </div>
      )

      }
    </div>
  );
}
