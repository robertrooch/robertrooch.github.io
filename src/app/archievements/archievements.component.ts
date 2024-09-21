import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archievements.component.html',
  styleUrl: './archievements.component.css'
})
export class ArchievementsComponent {
  logros: Array<any> = [];

  ngOnInit(): void {
    let logro1 = {
      nombre: "Premio empleado del mes en Bodybuiling Factory",
      fecha: "Marzo 2020",
      descripcion: "Reconocimiento por el excelente desempeño y dedicación."
    };

    let logro2 = {
      nombre: "Ascenso a BarTender",
      fecha: "Julio 2021",
      descripcion: "Ascendido por mostrar habilidades excepcionales en atención al cliente."
    };

    let logro3 = {
      nombre: "Implementación de sistema de huella digital",
      fecha: "Octubre 2022",
      descripcion: "Creación e implementación de un sistema de inscripción mediante huella digital."
    };

    this.logros.push(logro1);
    this.logros.push(logro2);
    this.logros.push(logro3);

    console.log(this.logros);
  }
}
