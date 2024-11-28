import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  fullName: string = 'Santos, Gian Martin D.';
  occupation: string = 'Web Developer';
  contactNo: string = '+09185594230';
  email: string = 'gianmartinsantos@gmail.com';
  objective: string = 'Creative and detail-oriented freelance graphic designer with a passion for developing visually compelling designs that meet client needs. Experienced in delivering branding, marketing materials, and digital assets for diverse industries. Eager to contribute artistic expertise and innovative ideas to impactful projects.';

}
