
import styles from './break.module.css'
import classNames from 'classnames'

interface IBreakProps {
    size: 's4' | 's8' | 's12' | 's16' | 's20';
    top?: boolean;
    inline?: boolean;
}

export function Break({ size, top=false, inline=false }: IBreakProps) {
    const breakClasses = classNames({
        [styles.top]: top,
        [styles[`s${size}`]]: size,
        [styles.inline]: inline,
    })

    return (
        <div className={breakClasses}></div>
    )
}