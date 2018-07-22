import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCoveringsComponent } from './type-coverings.component';

describe('TypeCoveringsComponent', () => {
  let component: TypeCoveringsComponent;
  let fixture: ComponentFixture<TypeCoveringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCoveringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCoveringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
