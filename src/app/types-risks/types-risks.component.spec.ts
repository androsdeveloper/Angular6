import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesRisksComponent } from './types-risks.component';

describe('TypesRisksComponent', () => {
  let component: TypesRisksComponent;
  let fixture: ComponentFixture<TypesRisksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesRisksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesRisksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
