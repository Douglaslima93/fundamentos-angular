import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCustomizadoComponent } from './p-customizado.component';

describe('PCustomizadoComponent', () => {
  let component: PCustomizadoComponent;
  let fixture: ComponentFixture<PCustomizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCustomizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCustomizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
