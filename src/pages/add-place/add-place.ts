import { Location } from './../../modals/location.model';
import { SetLocationPage } from './../set-location/set-location';
import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {

  location: Location = { lat: 14.469582, lng: 75.919907 }

  constructor(public modalCtrl: ModalController) { }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  onOpenMap() {
    const modal = this.modalCtrl.create(SetLocationPage, { location : this.location});
    modal.present();
  }
}
