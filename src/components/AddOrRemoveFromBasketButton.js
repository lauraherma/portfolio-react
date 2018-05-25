import {addItemToBasket, getImageBasket, removeItemFromBasket} from "../data/basketData";
import React from 'react';
import {Button} from 'reactstrap';
import {observer} from 'mobx-react';
import './AddOrRemoveFromBasketButton.css';


export const AddOrRemoveFromBasketButton = observer((props) => {

    const removeItem = () => {
        removeItemFromBasket(props.image);

        if (props.itemRemovedFromBasket) {
            props.itemRemovedFromBasket();
        }

    };

    const addItem = () => {
        addItemToBasket(props.image);
        if (props.itemAddedToBasket) {
            props.itemAddedToBasket();
        }
    };


    if (getImageBasket(props.image)) {
        return <Button className="shop-card-remove-button" onClick={removeItem}>
            Remove from basket
        </Button>
    }
    else {
        return <Button className="shop-card-add-button" onClick={addItem}>Add to
            basket</Button>

    }

});
