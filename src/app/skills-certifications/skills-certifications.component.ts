import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-certifications',
  standalone: true,
  imports: [],
  templateUrl: './skills-certifications.component.html',
  styleUrl: './skills-certifications.component.css'
})

export class SkillsCertificationsComponent {
  javascript: string = 'Highly proficient in Javascript Fundamentals';
  tailwind: string = 'Experienced with Tailwind CSS for rapid UI development';
  git: string = 'Proficient with Git for version control and collaborative development';
  
}