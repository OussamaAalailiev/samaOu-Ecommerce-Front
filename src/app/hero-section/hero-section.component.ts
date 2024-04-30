import { Component, OnInit } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [SearchInputComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent implements OnInit {
  windowScreenSize: boolean | undefined;
  ngOnInit(): void {
    this.windowScreenSize = window.screen.width < 992 ? true : false;
  }
  inputPlaceholder: string = 'Chercher un produit, marque ou une catégorie';
}
