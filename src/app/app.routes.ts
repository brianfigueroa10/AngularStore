import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component')
  },

  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products.routes')
  },

  {
    path: 'checkout',
    loadComponent: () =>
      import('./features/checkout/checkout.component')
  },


  { path: '**', redirectTo: '', pathMatch: 'full' },
];
