import React from 'react';
import Button from './Button';
import '../App.css';

const ButtonStartIcon = () => {
    return (
        <div>
            <Button 
                btnClass='Default DefaultIcon starting' 
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