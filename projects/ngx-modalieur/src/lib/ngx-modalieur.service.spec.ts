import { TestBed } from '@angular/core/testing';

import { NgxModalieurService } from './ngx-modalieur.service';

describe('NgxModalieurService', () => {
  let service: NgxModalieurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxModalieurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
