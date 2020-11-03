import React from 'react';

const Button = ({btnClass, btnName, btnType, pClass, icon, materialIcon}) => {
    return (
        <div>
            <p className={pClass}>{btnType}</p>
           <button className={btnClass}>
            <span className={materialIcon}>
            {icon}
            </span>
            {btnName}
           </button> 
        </div>
    )
}

export default Button
