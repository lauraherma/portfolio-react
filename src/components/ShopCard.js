import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';
import {observer} from 'mobx-react';
import './ShopCard.css';
import {ShopCardModal} from "./ShopCardModal";
import {AddOrRemoveFromBasketButton} from "./AddOrRemoveFromBasketButton";

export const ShopCard = observer(
    class ShopCard extends Component {

        constructor(props) {
            super(props);
            this.state = {
                isModalOpen: false,
            };
        }

        toggle() {
            this.setState({
                isModalOpen: !this.state.isModalOpen,

            });
        }

        render() {
            const toggleModal = () => {
                this.toggle();
            };

            return <div className="ShopCard">
                <Card>
                    <CardImg onClick={toggleModal} top width="100%" src={this.props.image.src}
                             alt="Card image cap"/>
                    <CardBody>
                        <CardTitle className="ShopCardTitle">{this.props.image.imageTitle}</CardTitle>
                        <CardText className="ShopCardText">{this.props.image.imageText}</CardText>
                        <AddOrRemoveFromBasketButton image={this.props.image}/>
                    </CardBody>
                </Card>

                <ShopCardModal isOpen={this.state.isModalOpen}
                               image={this.props.image}
                               toggle={toggleModal}
                                />

            </div>
        }

    }
);