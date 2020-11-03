import React from 'react';
import Button from './Button';

const ButtonStartIcon = () => {
    return (
        <div>
            <Button 
                btnClass='Default DefaultIcon' 
                btnName='Default' 
                btnType='<Button startIcon=”local_grocery_store” />'
                pClass='Text'
                icon='add_shopping_cart'
                materialIcon='material-icons start'
            />
        </div>
    )
}

export default ButtonStartIcon