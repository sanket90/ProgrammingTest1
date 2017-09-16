import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarTriangleComponent } from './star-triangle.component';

describe('StarTriangleComponent', () => {
  let component: StarTriangleComponent;
  let fixture: ComponentFixture<StarTriangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarTriangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
