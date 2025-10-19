import { Component } from '@angular/core';
import { Languaje } from '../../shared/languaje/languaje';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  Languaje = Languaje;
}
