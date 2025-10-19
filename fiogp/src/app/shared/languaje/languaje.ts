import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-languaje',
  imports: [CommonModule, FormsModule],
  templateUrl: './languaje.html',
  styleUrl: './languaje.css',
})
export class Languaje {
  selectedLanguage = 'es';

  constructor() {
    this.selectedLanguage = 'es';
  }
}
