import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperience : Array<any> = [];
  ngOnInit(): void {
    let work1 = {
      fecha: "2020-2022",
      ubicacion: "Puebla.",
      puesto: "Recepcionista",
      empresa: "Hotel Holiday inn",
      logros: [
        {descripcion : "Premio empleado del mes Marzo"},
        {descripcion : "Ascendido a BarTender"}
      ]
    };

    let work2 = {
      fecha: "2022-2023",
      ubicacion: "Orizaba Ver.",
      puesto: "Desarrollador",
      empresa: "BodyBuilding Factory",
      logros: [
        {descripcion : "Creacion de sistema de inscripción de mensual de manera digital"},
        {descripcion : "Creacion de sistema de inscripcón con huella dactilar"}
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    //console.log(this.workExperience);
  }
}
