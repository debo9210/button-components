import React from 'react';
import Button from './Button';

const ButtonDefaultSmall = () => {
    return (
        <div>
            <Button 
                btnClass='Default DefaultSmall' 
                btnName='Default' 
                btnType='<Button size=”sm” />'
                pClass='Text'
            />
        </div>
    )
}

export default ButtonDefaultSmall