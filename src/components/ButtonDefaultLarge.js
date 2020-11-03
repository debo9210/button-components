import React from 'react';
import Button from './Button';

const ButtonDefaultLarge = () => {
    return (
        <div>
            <Button 
                btnClass='Default DefaultLarge' 
                btnName='Default' 
                btnType='<Button size=”lg” />'
                pClass='Text'
            />
        </div>
    )
}

export default ButtonDefaultLarge