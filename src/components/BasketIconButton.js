import {basket} from "../data/basketData";
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {InBasketItemsModal} from './InBasketItemsModal';

export const BasketIconButton = observer(
    class BasketItem extends Component {
        state = {
            isModalOpen: false,
        };

        toggle() {
            this.setState({
                isModalOpen: !this.state.isModalOpen,

            });
        }

        hasItemsInBasket() {
            if (basket.length) {
                return <div className="basket-icon-text">{basket.length}</div>
            }
        };

        canOpenModal() {
            if (this.hasItemsInBasket()) {
                return <i onClick={() => this.toggle()}
                          className="material-icons basket-icon">shopping_cart</i>

            }
            else {
                return <i className="material-icons basket-icon-empty">shopping_cart</i>
            }

        }

        render() {
            const toggleModal = () => {
                this.toggle();
            };

            return <div>
                <div>
                    {this.canOpenModal()}
                    {this.hasItemsInBasket()}
                </div>

                <InBasketItemsModal isOpen={this.state.isModalOpen}
                                    image={this.props.image}
                                    toggle={toggleModal}
                />
            </div>
        }

    });