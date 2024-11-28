import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  jobPosition1: string = 'Web Developer Intern';
  company1: string = 'Technokids, San Fernando';
  date1: string = 'May 2022 – August 2022';
  explanation1: string = 'Assisted in the development and maintenance of client websites using HTML, CSS, and JavaScript.';
  jobPosition2: string = 'Freelance Web Developer';
  date2: string = 'October 2023 - February 2024';
  explanation2: string = 'Created visually appealing website designs for various small-scale businesses.';

}
