import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReservComponent } from './profile-reserv.component';

describe('ProfileReservComponent', () => {
  let component: ProfileReservComponent;
  let fixture: ComponentFixture<ProfileReservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileReservComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
