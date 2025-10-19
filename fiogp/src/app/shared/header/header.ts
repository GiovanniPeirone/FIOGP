import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Languaje } from '../languaje/languaje';

@Component({
  selector: 'app-header',
  imports: [CommonModule, Languaje],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
