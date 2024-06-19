import { TestBed } from '@angular/core/testing';

import { PhotosHeroSectionService } from '../photos-hero-section/photos-hero-section.service';

describe('PhotosHeroSectionService', () => {
  let service: PhotosHeroSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotosHeroSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
