import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecComponent } from './rec.component';

describe('RecComponent', () => {
  let component: RecComponent;
  let fixture: ComponentFixture<RecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecComponent]
    });
    fixture = TestBed.createComponent(RecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
