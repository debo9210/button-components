import React from 'react';
import Button from './Button';

const ButtonEndIcon = () => {
    return (
        <div>
            <Button 
                btnClass='Default DefaultIcon' 
                btnName='Default' 
                btnType='<Button endIcon=”local_grocery_store” />'
                pClass='Text'
                icon='add_shopping_cart'
                materialIcon='material-icons end'
            />
        </div>
    )
}

export default ButtonEndIcon