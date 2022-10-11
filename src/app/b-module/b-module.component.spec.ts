import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BModuleComponent } from './b-module.component';

describe('BModuleComponent', () => {
  let component: BModuleComponent;
  let fixture: ComponentFixture<BModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
