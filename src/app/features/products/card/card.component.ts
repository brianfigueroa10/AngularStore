import { Component, EventEmitter, Output, input} from '@angular/core';
import { Product } from '../../../shared/models/product.interface';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './card.component.html',

})
export class CardComponent {
  product = input.required<Product>()

  @Output() addToCartEvent = new EventEmitter<Product>()

  onAddToCart(): void {
    this.addToCartEvent.emit(this.product())
  }

}
