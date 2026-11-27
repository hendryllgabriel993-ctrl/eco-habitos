import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitoItem } from './habito-item';

describe('HabitoItem', () => {
  let component: HabitoItem;
  let fixture: ComponentFixture<HabitoItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitoItem],
    }).compileComponents();

    fixture = TestBed.createComponent(HabitoItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
