import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {
  reference1Name: string = 'Prof. Haynes Angelo Narciso';
  reference1Title: string = 'Professor, Computer Science Department';
  reference1Contact: string = 'hanarciso@hau.edu.ph';
  
  reference2Name: string = 'Prof. Jon De Leon';
  reference2Title: string = 'Professor, Information Technology Department';
  reference2Contact: string = 'jdeleon@hau.edu.ph';
}
