import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimeThumbnailGridComponent } from "./anime-thumbnail-grid/anime-thumbnail-grid.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimeThumbnailGridComponent],
  template: '<h1>Hello<h1><app-anime-thumbnail-grid></app-anime-thumbnail-grid>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'randomAnimeApp';
}
