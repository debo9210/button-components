import React from 'react';
import Button from './Button';

const ButtonDefaultTextHover = () => {
    return (
        <div>
            <Button 
                btnClass='Outline DefaultTextHover' 
                btnName='Default' 
                btnType='&:hover, &:focus'
                pClass='Text Text2'
            />
        </div>
    )
}

export default ButtonDefaultTextHover