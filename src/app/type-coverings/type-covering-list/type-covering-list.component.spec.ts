import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCoveringListComponent } from './type-covering-list.component';

describe('TypeCoveringListComponent', () => {
  let component: TypeCoveringListComponent;
  let fixture: ComponentFixture<TypeCoveringListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCoveringListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCoveringListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
