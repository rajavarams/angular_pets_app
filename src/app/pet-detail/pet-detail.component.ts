
import { Component, OnInit, Input } from '@angular/core';
import { Pet1 } from '../pet';
@Component({
  selector: 'app-pets-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetsDetailComponent implements OnInit {
  @Input() Pet1?: Pet1;
  constructor() { }
  ngOnInit(): void {
  }
}
