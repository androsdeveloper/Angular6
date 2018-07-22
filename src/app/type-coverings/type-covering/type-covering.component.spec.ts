import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCoveringComponent } from './type-covering.component';

describe('TypeCoveringComponent', () => {
  let component: TypeCoveringComponent;
  let fixture: ComponentFixture<TypeCoveringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCoveringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCoveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
