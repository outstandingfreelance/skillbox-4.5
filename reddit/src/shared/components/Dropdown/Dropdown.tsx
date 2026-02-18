import styles from './dropdown.module.css';
import { useState, useEffect } from 'react';
import { noop } from '../../../utils/js/noop.ts'
import { GenericList } from '../GenericList/GenericList.tsx';

interface IDropdownProps {
  isOpenManuallySetValue?: boolean;
  onOpen: () => void;
  onClose: () => void;
}


// там по факту, на useEffect всего да при первом рендере 
// всегда будет выполнять (лишний) onClose, но это не всегода оюязательно имправлятль
// делается это с помощью isMounted

// хуки это больше про фп, они заменяют очеь много кода для создания самописных lifeCycle-хуков


export function Dropdown({ isOpenManuallySetValue, onOpen = noop, onClose = noop, postId, listClass, itemClass }: IDropdownProps) {
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
        <button className={styles.dropdownButton}></button>
      </div>

      {/* 1) сперва чилсдрен примет на себя нажатие */}
      {isDropDownOpen && (
        <div className={styles.listContainer}>
          <ul onClick={({postId}: React.MouseEvent<HTMLUListElement, MouseEvent>) => noop()} className={{`styles.${listClass}`}}>
            <li onClick={()=>(console.log(postId))} className={`${styles.dropdownItem} ${styles.dropdownItemHide} ${styles.${itemClass}}`}>Скрыть</li>
            <li onClick={()=>(console.log(postId))} className={`${styles.dropdownItem} ${styles.dropdownItemComplain} ${styles.${itemClass}}`}>Пожаловаться</li>
          </ul>

          <GenericList someShitHere={[]} onClick={handleOpen} />

          <div onClick={() => setIsDropDownOpen(false)}>
            <button className={styles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
