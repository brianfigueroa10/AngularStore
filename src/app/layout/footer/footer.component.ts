import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartStore } from '../../shared/store/shopping-cart.store';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgClass,CurrencyPipe],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
 
})
export class FooterComponent {
  showCart = signal<boolean>(false!)
  cartStore = inject(CartStore)


}
