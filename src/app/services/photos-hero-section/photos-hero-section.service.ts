import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosHeroSectionService {
  constructor() {}

  getImages(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve([
        {
          itemImageSrc: '../../assets/shopping online 2 - Copie - Copie.jpg',
          thumbnailImageSrc:
            'https://primeng.org/images/galleria/galleria1s.jpg',
          alt: 'Description for Image 1',
          title: 'Title 1',
        },
        {
          itemImageSrc: '../../assets/ecommerce hero 2 edited copy .jpg',
          thumbnailImageSrc:
            'https://primeng.org/images/galleria/galleria1s.jpg',
          alt: 'Description for Image 1',
          title: 'Title 1',
        },
        {
          itemImageSrc: '../../assets/ecommerce hero 3 edited copy.jpg',
          thumbnailImageSrc:
            'https://primeng.org/images/galleria/galleria1s.jpg',
          alt: 'Description for Image 1',
          title: 'Title 1',
        },
      ]),
        reject(new Error('Photos Not found!'));
    });
  }
  /* function reject(): (resolve: (value: unknown) => void, reject: (reason?: any) => void) => void {
  throw new Error('Function not implemented.');
} */
}

/* function resolve(arg0: {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}): (resolve: (value: any) => void, reject: (reason?: any) => void) => void {
  throw new Error('Function not implemented.');
}

function reject(arg0: string): any {
  throw new Error('Function not implemented.');
} */
