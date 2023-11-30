import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeploServicos1Component } from './exeplo-servicos1.component';

describe('ExeploServicos1Component', () => {
  let component: ExeploServicos1Component;
  let fixture: ComponentFixture<ExeploServicos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExeploServicos1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExeploServicos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
