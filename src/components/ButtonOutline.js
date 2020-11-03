import React from 'react';
import Button from './Button';

const ButtonOutline = () => {
    return (
        <div>
            <Button 
                btnClass='Outline' 
                btnName='Default' 
                btnType='<Button variant=”outline” />'
                pClass='Text'
            />
        </div>
    )
}

export default ButtonOutline