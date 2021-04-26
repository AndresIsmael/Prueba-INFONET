import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public secuencia:number = 1;
  public min:number = 0;
  public max:number = 15;
  private guardadoMax:number = this.max;
  private guardadoMin:number = this.min;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    localStorage.setItem("currentPunteo","0");
    localStorage.setItem("currentIntentos","0");
  }

  comenzar (){
    this.router.navigate(['game']);
    localStorage.setItem('currentSecuencia', this.secuencia.toString());
    localStorage.setItem('currentMin', this.min.toString());
    localStorage.setItem('currentMax', this.max.toString());

  }

  rango (){

    if( this.max > this.guardadoMax){
    
    }else if( this.max < this.guardadoMax){
      if( this.max < 15 ){
        this.max = 15;
      }else{
        this.min = this.max - 15;
      }
    }

    if( this.min > this.guardadoMin){
      if( (this.max - this.min) < 15 ){
        this.max += 1;
      }
    }else if( this.min < this.guardadoMin){
      if( this.guardadoMin == 0 ){

      }else{
        if( (this.max - this.min) > 15 ){
          this.max -= 1;
        }
      }
    }
    
    this.guardadoMax = this.max;
    this.guardadoMin = this.min;
  }

}
