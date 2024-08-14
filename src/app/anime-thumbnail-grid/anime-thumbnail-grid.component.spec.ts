import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeThumbnailGridComponent } from './anime-thumbnail-grid.component';

describe('AnimeThumbnailGridComponent', () => {
  let component: AnimeThumbnailGridComponent;
  let fixture: ComponentFixture<AnimeThumbnailGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeThumbnailGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeThumbnailGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
