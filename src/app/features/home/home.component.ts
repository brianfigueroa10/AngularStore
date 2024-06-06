import { Component} from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CurrencyPipe} from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyPipe,RouterLink, ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './home.component.html',

})
export default class HomeComponent {


  submitForm() {
    console.log();
  }

}
