import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRiskListComponent } from './type-risk-list.component';

describe('TypeRiskListComponent', () => {
  let component: TypeRiskListComponent;
  let fixture: ComponentFixture<TypeRiskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeRiskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeRiskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
