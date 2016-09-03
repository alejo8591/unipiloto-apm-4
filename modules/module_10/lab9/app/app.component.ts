import {Component} from 'angular2/core';

export class Product{
    id: number;
    name: string;
    type: string;
    quantity: number;
}

@Component({
    selector: 'my-app',
    templateUrl: 'templates/product-detail.html'
})

export class AppComponent {
    title = 'Product';

    product: Product = {
        id: 1,
        name: 'Una noche en el hotel XX',
        type: 'Hotel de lujo 5 estrellas con acomodación doble',
        quantity: 200    
    };
}