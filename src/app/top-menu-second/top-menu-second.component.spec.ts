import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuSecondComponent } from './top-menu-second.component';

describe('TopMenuSecondComponent', () => {
  let component: TopMenuSecondComponent;
  let fixture: ComponentFixture<TopMenuSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMenuSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
