import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BackendService} from '../../_services/backend.service';

@Component({
  selector: 'app-add-suggestion',
  templateUrl: './add-suggestion.component.html',
  styleUrls: ['./add-suggestion.component.css']
})
export class AddSuggestionComponent implements OnInit {
  availableIsSelected = true;
  onOrderIsSelected = false;
  avatar: any;

  form: any = {
    price: null,
    currency: 'rub',
    unit: 'piece',
    presence: 'yes',
    amountOfDays: null,
    left: null,
    category: null
  };
  units = [
    {
      name: 'Количество',
      types: [
        {value: 'piece', viewValue: 'Штука'},
        {value: 'box', viewValue: 'Коробка'},
        {value: 'bag', viewValue: 'Мешок'},
        {value: 'pack', viewValue: 'Пачка'},
        {value: '100pieces', viewValue: 'Сто штук'},
        {value: '1000pieces', viewValue: 'Тыс. штук'},
        {value: 'package', viewValue: 'Упаковка'},
        {value: 'service', viewValue: 'Услуга'}]
    },
    {
      name: 'Масса',
      types: [
        {value : '100gram', viewValue: '100 грамм'},
        {value : 'gram', viewValue: 'Грамм'},
        {value : 'kilogram', viewValue: 'Килограмм'},
        {value : 'ton', viewValue: 'Тонна'},
        {value : 'centner', viewValue: 'Центнер'}]
    },
    {
      name: 'Объем',
      types: [
        {value : 'liter', viewValue: 'Литр'},
        {value : 'cubic-meter', viewValue: 'Метр кубический'},
        {value : 'milliliter', viewValue: 'Миллилитр'}]
    },
    {
      name: 'Площадь',
      types: [
        {value : 'Hectare', viewValue: 'Гектар'},
        {value : 'square-decimeter', viewValue: 'Дециметр квадратный'},
        {value : 'square-meter', viewValue: 'Метр квадратный'},
        {value : 'square-centimeter', viewValue: 'Сантиметр квадратный'},
        {value : '100-square-kilometer', viewValue: 'Сотка'},
        {value : 'foot-square', viewValue: 'Фут квадратный'}]
    },
    {
      name: 'Длина',
      types: [
        {value : 'kilometer', viewValue: 'Километр'},
        {value : 'meter', viewValue: 'Метр'},
        {value : 'linear-meter', viewValue: 'Метр погонный'},
        {value : 'millimeter', viewValue: 'Миллиметр'},
        {value : 'centimeter', viewValue: 'Сантиметр'}]
    },
    {
      name: 'Время',
      types: [
        {value : 'year', viewValue: 'Год'},
        {value : '12hour', viewValue: 'День'},
        {value : 'romania', viewValue: 'За смену(8 рабочих часов)'},
        {value : 'quarter', viewValue: 'Квартал'},
        {value : 'month', viewValue: 'Месяц'},
        {value : 'minute', viewValue: 'Минута'},
        {value : 'week', viewValue: 'Неделя'},
        {value : 'halfyear', viewValue: 'Полгода'},
        {value : '24hour', viewValue: 'Сутки'},
        {value : 'hour', viewValue: 'Час'}]
    },
    {
      name: 'Прочее',
      types: [
        {value : 'session', viewValue: 'Сеанс'},
        {value : 'balloon', viewValue: 'Балон'},
        {value : 'jar', viewValue: 'Банка'},
        {value : 'Spool', viewValue: 'Бобина'},
        {value : 'barrel', viewValue: 'Бочка'},
        {value : 'bight', viewValue: 'Бухта'},
        {value : 'watt', viewValue: 'Ватт'},
        {value : 'bucket', viewValue: 'Ведро'},
        {value : 'gram-per-square-meter', viewValue: 'Грамм на квадратный метр'},
        {value : '1000symbols', viewValue: 'За 1000 символов'},
        {value : 'canister', viewValue: 'Канистра'},
        {value : 'kilogram-per-square-meter', viewValue: 'Килограмм на квадратный метр'},
        {value : 'estonia', viewValue: 'Комплект'},
        {value : 'sheet', viewValue: 'Лист'},
        {value : 'square-meter-per-24-hour', viewValue: 'Метр квадратный в сутки'},
        {value : 'canister', viewValue: 'Моток'},
        {value : 'set', viewValue: 'Набор'},
        {value : 'object', viewValue: 'Объект'},
        {value : 'packet', viewValue: 'Пакет'},
        {value : 'pallet-place', viewValue: 'Паллетоместо'},
        {value : 'pair', viewValue: 'Пара'},
        {value : 'sowing-unit', viewValue: 'Посевная единица'},
        {value : 'Roll', viewValue: 'Рулон'},
        {value : 'section', viewValue: 'Секция'},
        {value : 'edition', viewValue: 'Тираж'},
        {value : 'ton-per-kilometer', viewValue: 'Тонна/километр'},
        {value : 'point', viewValue: 'Точка'},
        {value : 'person', viewValue: 'Человек'},
      ]
    }];
  private objectId: any;
  constructor(private router: Router, private backendService: BackendService) { }

  ngOnInit(): void {
    this.objectId = this.router.url.substring(15);
    console.log(this.objectId);
  }
  onSubmit(): void{
    this.backendService.addSuggestion(this.form, this.objectId).subscribe();
  }
  selectAvailable(): void {
    this.availableIsSelected = true;
    this.onOrderIsSelected = false;
    this.form.amountOfDays = null;
  }

  selectNotAvailable(): void {
    this.availableIsSelected = false;
    this.onOrderIsSelected = false;
    this.form.amountOfDays = null;
    this.form.left = null;
  }

  selectOnOrder(): void {
    this.availableIsSelected = false;
    this.onOrderIsSelected = true;
    this.form.left = null;

  }
}
