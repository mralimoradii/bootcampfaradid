import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffsDetailComponent } from './tariffs-detail.component';

describe('TariffsDetailComponent', () => {
  let component: TariffsDetailComponent;
  let fixture: ComponentFixture<TariffsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TariffsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
