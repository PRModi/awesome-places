import { Location } from './../../modals/location.model';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage {

  location: Location;
  marker: Location;

  constructor(public navParams: NavParams,
    public viewCtrl: ViewController) {
    this.location = this.navParams.get('location');

    if (this.navParams.get('isSet')) {
      this.marker = this.location;
    }

  }

  onMapClick(event: any) {
    this.marker = new Location(event.coords.lat, event.coords.lng);

  }

  onAbort() {
    this.viewCtrl.dismiss();
  }

  onConfirm() {
    this.viewCtrl.dismiss({ location: this.marker });
  }
}
