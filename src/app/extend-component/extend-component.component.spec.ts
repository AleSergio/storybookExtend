import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendComponentComponent } from './extend-component.component';

describe('ExtendComponentComponent', () => {
  let component: ExtendComponentComponent;
  let fixture: ComponentFixture<ExtendComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
