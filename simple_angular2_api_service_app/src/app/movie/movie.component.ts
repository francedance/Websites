import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [`
 
      p i{
        font-weight: bold;
      } 

      li, span, a {
        font-weight: bold;
        font-size: 2vw;
      }

      
  
  `]
})
export class MovieComponent implements OnInit {

  id_movie: string = "";
  mv_Genre: string = "";
  mv_Title: string = "";
  mv_Poster: string = "";
  mv_Rated: string = "";
  mv_Released: string = "";
  mv_Director: string = "";
  mv_Actors: string = "";
  mv_Plot: string = "";
  mv_Link: string = "";

  constructor(private _sharedService: SharedService) { }



  ngOnInit() {
  }

  callMovieService(){

    this._sharedService.findMovie(this.mv_Title)
        .subscribe(
          lstresult => {
             this.mv_Title = lstresult[0]["title"];
             this.mv_Genre = lstresult[0]["genre"];
             this.mv_Poster = lstresult[0]["poster"]["thumb"]
             this.mv_Rated = lstresult[0]["rating"];
             this.mv_Released = lstresult[0]["release_date"];
             this.mv_Director = lstresult[0]["director"];
             this.mv_Actors = lstresult[0]["cast"];
             this.mv_Plot = lstresult[0]["storyline"]; 
             this.mv_Link = lstresult[0]["url"]["url"];
             console.log(lstresult);
         
          },
          error => {
            console.log("Error. The findMovie result JSON value is as follows:");
            console.log(error);
          }
        );
  }

}
