import {inject, TestBed} from '@angular/core/testing';

import { NgxGalleryService } from './ngx-gallery.service';
import {HttpClientModule} from '@angular/common/http';

describe('NgxGalleryService', () => {
 beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [NgxGalleryService]
    });
  });

 it('should be created', inject([NgxGalleryService], (service: NgxGalleryService) => {
    expect(service).toBeTruthy();
  }));
});
