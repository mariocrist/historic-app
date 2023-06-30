import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricTramosComponent } from './historic-tramos.component';

describe('HistoricTramosTableComponent', () => {
  let component: HistoricTramosComponent;
  let fixture: ComponentFixture<HistoricTramosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricTramosComponent]
    });
    fixture = TestBed.createComponent(HistoricTramosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
