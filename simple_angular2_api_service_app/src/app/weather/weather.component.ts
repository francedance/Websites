import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styles: [`

  p {
    font-weight: bold;
  }
  
  `]
})
export class WeatherComponent implements OnInit {

  id_city: string = '';
  id_state: string = '';
  op_city: string = '';
  op_region: string = '';
  op_country: string = '';
  op_date: string = '';
  op_text: string = '';
  op_temp: string = '';
  op_forecast_date = [] ;
  op_forecast_day = [] ;
  op_forecast_high = [] ;
  op_forecast_low = [] ;
  op_forecast_text = [] ;
  op_forecasts = [];
  

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }

  callWeatherService(){
    this._sharedService.findWeather(this.id_city, this.id_state)
        .subscribe(
          lstresult => {
            this.op_city = lstresult["query"]["results"]["channel"]["location"]["city"];
            this.op_region = lstresult["query"]["results"]["channel"]["location"]["region"];
            this.op_country = lstresult["query"]["results"]["channel"]["location"]["country"];
            this.op_text = lstresult["query"]["results"]["channel"]["item"]["condition"]["text"];
            this.op_temp = lstresult["query"]["results"]["channel"]["item"]["condition"]["temp"] + ' F';

              this.op_forecasts = [
                  
                  lstresult["query"]["results"]["channel"]["item"]["forecast"][0],
                  lstresult["query"]["results"]["channel"]["item"]["forecast"][1],
                  lstresult["query"]["results"]["channel"]["item"]["forecast"][2],
                  lstresult["query"]["results"]["channel"]["item"]["forecast"][3], 
                  lstresult["query"]["results"]["channel"]["item"]["forecast"][4],
                  lstresult["query"]["results"]["channel"]["item"]["forecast"][5],
                  lstresult["query"]["results"]["channel"]["item"]["forecast"][6],
                  lstresult["query"]["results"]["channel"]["item"]["forecast"][7],
                  lstresult["query"]["results"]["channel"]["item"]["forecast"][8],
                  lstresult["query"]["results"]["channel"]["item"]["forecast"][9]
                  
              ]

                  
          },
          error => {
            console.log('Error. The findWeather result JSON value is as follows:');
            console.log(error);
          }
        );
  }

}
