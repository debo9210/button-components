import React from 'react';
import Button from './Button';

const ButtonDisabled = () => {
    return (
        <div>
            <Button 
                btnClass='Default DefaultDisabled' 
                btnName='Default' 
                btnType='<Button disabled />'
                pClass='Text'
                
            />
        </div>
    )
}

export default ButtonDisabled