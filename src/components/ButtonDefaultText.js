import React from 'react';
import Button from './Button';

const ButtonDefaultText = () => {
    return (
        <div>
            <Button 
                btnClass='Default DefaultText' 
                btnName='Default' 
                btnType='<Button variant=”text” />'
                pClass='Text'
            />
        </div>
    )
}

export default ButtonDefaultText