import React from 'react';
import Button from './Button';

const ButtonDefaultMedium = () => {
    return (
        <div>
            <Button 
                btnClass='Default DefaultMedium' 
                btnName='Default' 
                btnType='<Button size=”md” />'
                pClass='Text'
            />
        </div>
    )
}

export default ButtonDefaultMedium