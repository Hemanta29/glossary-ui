import { Constants } from './config/constants';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = Constants.TitleOfSite;
  constructor(private constants: Constants) {
    console.log(this.constants.API_ENDPOINT)
  }

}
