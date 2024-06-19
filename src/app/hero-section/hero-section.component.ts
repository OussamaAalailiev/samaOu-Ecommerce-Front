import { Component, OnInit } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { CategoriesContainerComponent } from '../categories-container/categories-container.component';
import { PhotosHeroSectionService } from '../services/photos-hero-section/photos-hero-section.service';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [SearchInputComponent, CategoriesContainerComponent, GalleriaModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent implements OnInit {
  //windowScreenSize: boolean | undefined;

  images: any[] | undefined;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor(private photoHeroService: PhotosHeroSectionService) {}

  ngOnInit(): void {
    // this.windowScreenSize = window.screen.width < 992 ? true : false;
    this.photoHeroService
      .getImages()
      .then((images) => {
        this.images = images;
      })
      .catch((err) => alert(err.message));
  }
  inputPlaceholder: string = 'Chercher un produit, marque ou une catégorie';
}
