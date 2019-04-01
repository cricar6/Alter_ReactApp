import {observable } from 'mobx';
import { ProductStore } from './ProductStore';

class Store {
    products = new ProductStore();
}

const store = new Store();