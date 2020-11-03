import React from 'react';
import Button from './Button';

const ButtonOutlineHover = () => {
    return (
        <div>
            <Button 
                btnClass='Outline OutlineHover' 
                btnName='Default' 
                btnType='&:hover, &:focus'
                pClass='Text Text2'
            />
        </div>
    )
}

export default ButtonOutlineHover