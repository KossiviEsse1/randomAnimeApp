import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeDetail } from './animeDetail'

@Component({
  selector: 'app-anime-thumbnail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="card">
      <section class="image">
        <img class="listing-photo" [src]="" alt="image1" style="width: 100%">
      </section>
      <section class="container">
        <h2 class="listing-heading">{{ thumbnail.title }}</h2>
        <p>{{thumbnail.details}}</p>
      </section>
    </section>
  `,
  styleUrl: './anime-thumbnail.component.css'
})
export class AnimeThumbnailComponent {
  @Input() thumbnail!: AnimeDetail;
}
