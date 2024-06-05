import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsrComponentComponent } from './tsr-component.component';

describe('TsrComponentComponent', () => {
  let component: TsrComponentComponent;
  let fixture: ComponentFixture<TsrComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TsrComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TsrComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
