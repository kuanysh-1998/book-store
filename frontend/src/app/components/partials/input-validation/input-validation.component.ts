import { Component } from '@angular/core';

const VALIDATORS_MESSAGES: any = {
  required: 'Поле не должно быть пустым!',
  email: 'Неправильный адрес электронной почты!',
};

@Component({
  selector: 'app-input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.scss'],
})
export class InputValidationComponent {}
