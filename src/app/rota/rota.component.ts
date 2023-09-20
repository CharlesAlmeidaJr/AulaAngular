import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rota',
  templateUrl: './rota.component.html',
  styleUrls: ['./rota.component.css']
})
export class RotaComponent {
  constructor(private route: Router){}

  goToHello(): void {
    this.route.navigate(['hello'])
  }
}
