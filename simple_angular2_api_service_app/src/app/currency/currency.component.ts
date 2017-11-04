import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styles: []
})
export class CurrencyComponent implements OnInit {

  base_currency: string = '';
  my_result: any = [];
 

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }

  callCurrencyService(){
    this._sharedService.getCurrencyExchRate(this.base_currency.toUpperCase())
        .subscribe(
          lstresult => {
         
        
              this.my_result = JSON.stringify(lstresult['rates']);
              this.my_result = this.my_result.replace(/,/g , '\n \n');
              this.my_result = this.my_result.replace(/"/g , '');
              this.my_result = this.my_result.replace(/:/g , '=');
              
          },
          error => {
            console.log("Error. The callCurrencyService result JSON value is as follows:");
            console.log(error);
          }
        );
  }

}
