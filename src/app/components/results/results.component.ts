import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public porcentaje:number = 0;
  public numero_sinD:number = 0;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
    this.porcentaje = (+localStorage.getItem('currentPunteo') * 100) / +localStorage.getItem('currentSecuencia');
    this.numero_sinD = +this.porcentaje.toFixed(2);

  }
  
  reiniciar(){
    this.router.navigate(['']);
    localStorage.setItem("currentPunteo","0");
    localStorage.setItem("currentIntentos","0");
  }

}
