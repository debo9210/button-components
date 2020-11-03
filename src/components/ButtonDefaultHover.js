import React from 'react';
import Button from './Button';

const ButtonDefaultHover = () => {
    return (
        <div>
            <Button 
                btnClass='Default DefaultHover' 
                btnName='Default' 
                btnType='&:hover, &:focus'
                pClass='Text Text2'
            />
        </div>
    )
}

export default ButtonDefaultHover