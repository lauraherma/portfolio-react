import {observable} from 'mobx';

export const basket = observable([]);
export const images = observable([]);

export function getImageBasket(image) {
    return basket.find(img => img.id === image.id);
}

export function removeItemFromBasket(image) {
    basket.remove(getImageBasket(image));
}

export function addItemToBasket(image) {
    basket.push(image);
}

export function hasItemsInBasket() {
    return basket.length > 0;

}