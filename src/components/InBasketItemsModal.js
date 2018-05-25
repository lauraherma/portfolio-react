import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row} from 'reactstrap';
import {AddOrRemoveFromBasketButton} from "./AddOrRemoveFromBasketButton";
import {basket, hasItemsInBasket} from "../data/basketData";
import "./InBasketItemsModal.css";


export function InBasketItemsModal(props) {
    const toggle = () => {
        props.toggle();
    };

    const itemRemovedFromBasket = () => {
        if (!hasItemsInBasket()) {
            toggle();
        }
    };

    const shopItems = basket.map(image =>
        <div className="basket-item">
            <div>
                <img src={image.src}/>
                {image.imageTitle}
            </div>

            <AddOrRemoveFromBasketButton itemRemovedFromBasket={itemRemovedFromBasket}
                                         image={image}/>
        </div>
    );

    return <div>
        <Modal isOpen={props.isOpen} toggle={toggle}>
            <ModalHeader>
                <button onClick={toggle} type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </ModalHeader>

            <ModalBody>
                <Container className="ShopCards">
                    <Row>
                        {shopItems}
                    </Row>
                </Container>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    </div>;


}
