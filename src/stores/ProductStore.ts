import {observable, action, computed} from 'mobx';

interface Product {
    name: string,
    id: number,
    color: string,
    size: string,
    material: string,
    img: string,
    price: number,
    productLine: string
}
export class ProductStore {

    @observable product: Product = {
        name: '',
        id: 0,
        color: '',
        size: '',
        material: '',
        img: '',
        price: 0,
        productLine: ''
    }
    
    @observable products: any[] = [];
    
}