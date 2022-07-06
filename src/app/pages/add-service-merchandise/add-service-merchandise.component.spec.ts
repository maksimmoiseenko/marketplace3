import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceMerchandiseComponent } from './add-service-merchandise.component';

describe('AddServiceMerchandiseComponent', () => {
  let component: AddServiceMerchandiseComponent;
  let fixture: ComponentFixture<AddServiceMerchandiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServiceMerchandiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceMerchandiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
