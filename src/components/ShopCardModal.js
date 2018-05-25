import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './ShopCardModal.css';
import {AddOrRemoveFromBasketButton} from "./AddOrRemoveFromBasketButton";

export function ShopCardModal(props) {
    const divStyle = {
        backgroundImage: `url(${props.image.src})`,
    };

    const toggle = () => {
        props.toggle();
    };

    return <div>
        <Modal isOpen={props.isOpen} toggle={toggle}>
            <ModalHeader>
                {props.image.imageTitle}
                <button onClick={toggle} type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </ModalHeader>
            <ModalBody>
                <div className="cardModalImage" style={divStyle}></div>
            </ModalBody>
            <ModalFooter>
                <AddOrRemoveFromBasketButton image={props.image}
                                             itemRemovedFromBasket={toggle}
                                             itemAddedToBasket={toggle}/>
                {' '}
                <Button color="primary" onClick={toggle}>Cancel</Button>
            </ModalFooter>

        </Modal>
    </div>;
}

