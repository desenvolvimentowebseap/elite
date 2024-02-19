import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhantesComponent } from './acompanhantes.component';

describe('AcompanhantesComponent', () => {
  let component: AcompanhantesComponent;
  let fixture: ComponentFixture<AcompanhantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcompanhantesComponent]
    });
    fixture = TestBed.createComponent(AcompanhantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
