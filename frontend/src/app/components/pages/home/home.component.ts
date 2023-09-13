import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/shared/models/Book';
import { Observable } from 'rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment-timezone';
import { CitySelectionModalComponent } from '../../partials/city-selection-modal-component/city-selection-modal-component.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  tasks = [
    {
      task1: 'test',
      localTime: moment.utc('14:00', 'HH:mm').format('HH:mm'),
    },
    {
      task1: 'test2',
      localTime: moment.utc('16:00', 'HH:mm').format('HH:mm'),
    },
    {
      task1: 'test3',
      localTime: moment.utc('18:00', 'HH:mm').format('HH:mm'),
    },
  ];

  selectedCity: string | undefined;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    // Открываем модальное окно при первом рендере страницы
    this.openCitySelectionModal();
  }

  openCitySelectionModal() {
    const modalRef = this.modalService.open(CitySelectionModalComponent, {
      centered: true,
    });

    modalRef.componentInstance.citySelected.subscribe(
      (selectedCity: string) => {
        if (selectedCity) {
          console.log(`Выбран город: ${selectedCity}`);
          this.updateTasksLocalTime(selectedCity); // Обновите время в tasks
        }
      }
    );

    modalRef.result
      .then((selectedCity) => {
        if (selectedCity) {
          console.log(`Выбран город: ${selectedCity}`);
        }
      })
      .catch(() => {
        console.log('Модальное окно закрыто без выбора города');
      });
  }

  updateTasksLocalTime(selectedCity: string) {
    // Получите временную зону для выбранного города
    const userTimezone = this.getTimezoneForCity(selectedCity);

    // Пройдитесь по всем задачам и обновите их локальное время
    this.tasks.forEach((task) => {
      task.localTime = moment
        .utc(task.localTime, 'HH:mm')
        .tz(userTimezone)
        .format('HH:mm');
    });
  }

  getTimezoneForCity(city: string): string {
    const timezoneMap: { [key: string]: string } = {
      Астана: 'Asia/Almaty',
      Уральск: 'Asia/Oral',
      Алматы: 'Asia/Almaty',
    };

    return timezoneMap[city] || 'Asia/Astana';
  }
}
