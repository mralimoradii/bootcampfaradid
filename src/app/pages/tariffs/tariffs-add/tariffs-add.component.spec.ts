import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffsAddComponent } from './tariffs-add.component';

describe('TariffsAddComponent', () => {
  let component: TariffsAddComponent;
  let fixture: ComponentFixture<TariffsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TariffsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
