import {Component} from '@angular/core';

/**
 * @title Table with sticky header
 */
@Component({
  selector: 'real-estate-table',
  styleUrls: ['real-estate-table.component.css'],
  templateUrl: 'real-estate-table.component.html',
})
export class RealEstateTableComponent {
  displayedColumns = ['ID', 'caption', 'adres', 'geopos', 'price'];
  dataSource = RealEstateData;

  selectRow(row: any) {
    console.log(row);
    console.log(typeof row);
  }

  highlight(element: RealEstateObject) {
    element.highlighted = !element.highlighted;
  }

}

export interface RealEstateObject {
  ID: number;
  caption: string;
  adres: string;
  geopos: string;
  price: number;
  highlighted?: boolean;
  hovered?: boolean;
}

const RealEstateData: RealEstateObject[] = [
  {ID: 1, caption: '1 комнатная квартира на Автозаводе ', adres: 'Проспект автозаводцев 32', geopos: '000,000', price: 17000},
  {ID: 2, caption: '2 комнатная квартира на Автозаводе ', adres: '8 Марта 142', geopos: '000,000', price: 12000},
  {ID: 3, caption: '3 комнатная квартира на Автозаводе ', adres: 'Победы 7', geopos: '000,000', price: 45000},
  {ID: 4, caption: '4 комнатная квартира на Автозаводе ', adres: 'МЖК 4', geopos: '000,000', price: 23200},
  {ID: 5, caption: '1 комнатная квартира на Машгородке ', adres: 'Вернадского 19', geopos: '000,000', price: 11800},
  {ID: 6, caption: '2 комнатная квартира на Машгородке ', adres: 'Октября 16', geopos: '000,000', price: 10600},
  {ID: 7, caption: '3 комнатная квартира на Машгородке ', adres: 'Ильментау 12а', geopos: '000,000', price: 47000},
  {ID: 8, caption: '4 комнатная квартира на Машгородке ', adres: 'Богдана Хмельницкого 32', geopos: '000,000', price: 190000},
  {ID: 9, caption: '1 комнатная квартира на Динамо ', adres: 'Готвальда 16', geopos: '000,000', price: 244000},
  {ID: 10, caption: '2 комнатная квартира на Строительном ', adres: 'Севастопольская 7', geopos: '000,000', price: 95200},
];


