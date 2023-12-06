import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassagensComponent } from './massagens.component';

describe('MassagensComponent', () => {
  let component: MassagensComponent;
  let fixture: ComponentFixture<MassagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MassagensComponent]
    });
    fixture = TestBed.createComponent(MassagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
