import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import './ShopCards.css';
import {ShopCard} from "./ShopCard";
import axios from 'axios';
import {observer} from 'mobx-react';
import {images} from "../data/basketData";

export const ShopCards = observer(
    class ShopCards extends Component {

        componentDidMount() {
            axios.get(`/images`)
                .then(res => {
                    images.replace(res.data);
                })
        }

        getShopCards() {
            return images.map(image => {
                    return <Col key={image.id} sm="6" md="4" lg="3">
                        <ShopCard image={image} src={image}/>
                    </Col>
                }
            )
        }

        render() {

            return (
                <Container className="ShopCards">
                    <Row>
                        {this.getShopCards()}
                    </Row>
                </Container>

            );
        }
    });

