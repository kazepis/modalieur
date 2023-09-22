import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxModalieurComponent } from './ngx-modalieur.component';

describe('NgxModalieurComponent', () => {
  let component: NgxModalieurComponent;
  let fixture: ComponentFixture<NgxModalieurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxModalieurComponent]
    });
    fixture = TestBed.createComponent(NgxModalieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
