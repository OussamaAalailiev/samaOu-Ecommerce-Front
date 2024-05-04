import { Component } from '@angular/core';
import { FaqComponent } from '../faq/faq.component';

@Component({
  selector: 'app-our-clients',
  standalone: true,
  imports: [FaqComponent],
  templateUrl: './our-clients.component.html',
  styleUrl: './our-clients.component.css',
})
export class OurClientsComponent {}
