import React from 'react';
import Button from './Button';

const ButtonDisabledText = () => {
    return (
        <div>
            <Button 
                btnClass='Default DefaultDisabledText' 
                btnName='Default' 
                btnType='<Button variant=”text” disabled />'
                pClass='Text'
                
            />
        </div>
    )
}

export default ButtonDisabledText