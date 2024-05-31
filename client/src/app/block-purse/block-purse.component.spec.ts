import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockPurseComponent } from './block-purse.component';

describe('BlockPurseComponent', () => {
  let component: BlockPurseComponent;
  let fixture: ComponentFixture<BlockPurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockPurseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockPurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
