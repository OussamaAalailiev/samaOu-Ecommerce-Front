import { Component, OnInit } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [SearchInputComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  inputPlaceholder: string = 'Chercher un produit, marque ou une catégorie';

  ngOnInit(): void {}
}
