import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JikanAPIService {

  public baseURL:string = "https://api.jikan.moe/v4/";
  constructor(private http: HttpClient) { }

  getListOfAnimes(){
    //Getting
    let animeList = [];
    for(let i=1; i<10; i++) {
      //Getting random number
      let randomInt = Math.floor(Math.random()*1000);
      this.getAnime(randomInt).subscribe(res=> {
        console.log(res);
      });
    }
  }

  getAnime(randomInt: number){
    return this.http.get(this.baseURL+`anime/${randomInt}/full`);
  }
}
