import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment-timezone';

const cityTimezones = new Map<string, string>([
  ['Астана', 'Asia/Astana'],
  ['Уральск', 'Asia/Oral'],
  ['Алматы', 'Asia/Almaty'],
]);

@Component({
  selector: 'city-selection-modal',
  templateUrl: './city-selection-modal-component.component.html',
  styleUrls: ['./city-selection-modal-component.component.scss'],
})
export class CitySelectionModalComponent {
  cities: string[] = ['Астана', 'Уральск', 'Алматы'];
  selectedCity: string | undefined;

  @Output() citySelected = new EventEmitter<string>();

  constructor(public activeModal: NgbActiveModal) {}

  selectCity(city: string) {
    this.selectedCity = city;

    // Отправьте выбранный город обратно в HomeComponent
    this.citySelected.emit(this.selectedCity);
    this.closeModal();

    console.log(`Выбран город: ${city}`);
  }

  dismiss() {
    this.activeModal.dismiss();
  }

  closeModal() {
    if (this.selectedCity) {
      this.activeModal.close(this.selectedCity);
    } else {
      this.dismiss();
    }
  }
}
