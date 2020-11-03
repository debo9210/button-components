import React from 'react'
import './Button.css';

const ButtonVariant = ({btnClass, btnName, pClass, btnType}) => {
    return (
        <div>
            <p className={pClass}>{btnType}</p>
            <button className={btnClass}>{btnName}</button>
        </div>
    )
}

export default ButtonVariant
