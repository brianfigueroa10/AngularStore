import { Component, inject } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../shared/models/product.interface';
import { CartStore } from '../../shared/store/shopping-cart.store';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent, CommonModule ],
  templateUrl: './products.component.html',

})
export default class ProductsComponent {
    private readonly productSvc = inject(ApiService);
  products = this.productSvc.products;
  cartStore = inject(CartStore)

  onAddToCart(product: Product): void {
    this.cartStore.addToCart(product);
    
  }

}
