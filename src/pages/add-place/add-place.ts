import { Location } from './../../modals/location.model';
import { SetLocationPage } from './../set-location/set-location';
import { Component } from '@angular/core';
import { IonicPage, ModalController, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Geolocation } from "@ionic-native/geolocation";

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {

  location: Location = { lat: 14.469582, lng: 75.919907 };
  locationIsSet: boolean = false;

  constructor(public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    private geoLocation: Geolocation,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) { }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  onOpenMap() {
    const modal = this.modalCtrl.create(SetLocationPage, { location: this.location, isSet: this.locationIsSet });
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        this.location = data.location;
        console.log(this.location);
        this.locationIsSet = true;
      }

    })
  }

  locateMe() {
    const loader = this.loadingCtrl.create({
      content: 'Plaese wait...'
    });

    loader.present();
    this.geoLocation.getCurrentPosition()
      .then(location => {
        loader.dismiss();
        this.location.lat = location.coords.latitude;
        this.location.lng = location.coords.longitude;
        this.locationIsSet = true;

      }
      )
      .catch(error => {
        console.log(error);
      })
  }
}
