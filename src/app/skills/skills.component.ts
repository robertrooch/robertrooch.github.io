import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
    skills: Array<string> = [];

    ngOnInit(): void {
      this.skills = [
        "Entusiasta",
        "Paciencia",
        "Mentalidad ganadora",
        "Facil adaptabilidad",
        "Trabajo en equipo",
        "Liderazgo",
        "Creatividad",
        "Trabajo bajo presion",
        "Persistencia"
      ];
    }
}
