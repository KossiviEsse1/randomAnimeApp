import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeThumbnailComponent} from '../anime-thumbnail/anime-thumbnail.component';
import { AnimeDetail } from '../anime-thumbnail/animeDetail';
import { JikanAPIService } from '../jikan-api.service';

@Component({
  selector: 'app-anime-thumbnail-grid',
  standalone: true,
  imports: [CommonModule, AnimeThumbnailComponent],
  template: `
    <section class = "grid-container">
      <app-anime-thumbnail *ngFor="let animedetail of animeDetailsList"
      [thumbnail] = "animedetail"></app-anime-thumbnail>
    </section>
  `,
  styleUrl: './anime-thumbnail-grid.component.css'
})
export class AnimeThumbnailGridComponent {

  constructor(private jikanAPIService: JikanAPIService){}

  ngOnInit(){
    this.jikanAPIService.getListOfAnimes();
  }

  //Need to make 10 random api calls to the Jikan anime API
  animeDetailsList:AnimeDetail[] = [
    {
      title: 1,
      photo: 'image1',
      details: 'FirstAnime',
    },
    {
      title: 2,
      photo: 'image2',
      details: 'SecondAnime',
    },
    {
      title: 3,
      photo: 'image3',
      details: 'ThirdAnime',
    },
    {
      title: 4,
      photo: 'image1',
      details: 'FirstAnime',
    },
    {
      title: 5,
      photo: 'image2',
      details: 'SecondAnime',
    },
    {
      title: 6,
      photo: 'image3',
      details: 'ThirdAnime',
    },
    {
      title: 7,
      photo: 'image1',
      details: 'FirstAnime',
    },
    {
      title: 8,
      photo: 'image2',
      details: 'SecondAnime',
    },
    {
      title: 9,
      photo: 'image3',
      details: 'ThirdAnime',
    }
  ]
}
