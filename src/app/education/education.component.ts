import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  Education : Array<any> = [];
  ngOnInit(): void {
    let school1 = {
      fecha: "2016-2019",
      escuela: "Telesecundaria Jose Vasconcelos",
      especialidad: "Sin especialidad"
    };

    let school2 = {
      fecha: "2019-2022",
      escuela: "CBTis 142",
      especialidad: "Programacion"
    };

    let school3 = {
      fecha: "2022-2026",
      escuela: "Universidad Veracruzana",
      especialidad: "Ing. Software"
    };

    this.Education.push(school1);
    this.Education.push(school2);
    this.Education.push(school3);
    console.log(this.Education);
  }
}
