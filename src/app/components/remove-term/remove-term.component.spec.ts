import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTermComponent } from './remove-term.component';

describe('RemoveTermComponent', () => {
  let component: RemoveTermComponent;
  let fixture: ComponentFixture<RemoveTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveTermComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
