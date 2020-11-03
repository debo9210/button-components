import React from 'react';
import Button from './Button';

const ButtonDisableShadow = () => {
    return (
        <div>
            <Button 
                btnClass='Default DefaultDisableShadow' 
                btnName='Default' 
                btnType='<Button disableShadow />'
                pClass='Text'
            />
        </div>
    )
}

export default ButtonDisableShadow