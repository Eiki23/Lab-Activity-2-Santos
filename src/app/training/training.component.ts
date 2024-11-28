import { Component } from '@angular/core';
import { SkillsCertificationsComponent } from '../skills-certifications/skills-certifications.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [SkillsCertificationsComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {

  training1: string = 'Free Code Camp Responsive Web Design';
  training2: string = 'Free Code Camp JS Algorithms and Data Structures';
  training3: string = 'Free Code Camp Data Visualizationz';


}
