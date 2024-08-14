import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeThumbnailComponent } from './anime-thumbnail.component';

describe('AnimeThumbnailComponent', () => {
  let component: AnimeThumbnailComponent;
  let fixture: ComponentFixture<AnimeThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeThumbnailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
