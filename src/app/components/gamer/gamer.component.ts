import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.css']
})
export class GamerComponent implements OnInit {
  @ViewChild('nm1', null) nm1;
  @ViewChild('nm2', null) nm2;
  @ViewChild('nm3', null) nm3;
  @ViewChild('nm4', null) nm4;
  public aleatorio:number = 0;
  public numero1:any;
  public numero2:any;
  public numero3:any;
  public numero4:any;
  public aleatorioInicial:any;
  public respuesta:any;
  public punteo:number = 0;
  public intentos:number = 0;
  public children:any;
  public estadoCal: boolean = true;

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit() {
    this.aleatorioNumber();
    this.aleatorioInicial = this.getRandomArbitrary(1, 5);
    this.metodo1(this.aleatorioInicial)
    
    this.punteo = +localStorage.getItem('currentPunteo');
    this.intentos = +localStorage.getItem('currentIntentos');
  }

  aleatorioNumber() {
    let min = +localStorage.getItem('currentMin');
    let max = +localStorage.getItem('currentMax');
    this.aleatorio = this.getRandomArbitrary(min, max + 1);
  }

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  metodo1(aleatorio:number) {
    this.nm1.nativeElement.className = 'nm_1';
    this.nm2.nativeElement.className = 'nm_1';
    this.nm3.nativeElement.className = 'nm_1';
    this.nm4.nativeElement.className = 'nm_1';


    this.children = document.createElement('div');
    this.children.className = 'cnt_pc';
    var numero1 = document.createElement('div');
    numero1.className = 'pc_1';
    numero1.onclick = (event:any)=> {
      this.metodo2(event.srcElement.innerText);
    };

    const numero2 = document.createElement('div');
    numero2.className = 'pc_1'
    numero2.onclick = (event:any)=> {
      this.metodo2(event.srcElement.innerText);
    };

    const numero3 = document.createElement('div');
    numero3.className = 'pc_1'
    numero3.onclick = (event:any)=> {
      this.metodo2(event.srcElement.innerText);
    };

    
    
    this.numero1 = this.aleatorio;
    this.numero2 = this.aleatorio + 1;
    this.numero3 = this.aleatorio + 2;
    this.numero4 = this.aleatorio + 3;

    if(aleatorio == 1) {
      this.nm1.nativeElement.className = 'nm_1 nm_2'
      this.renderer.appendChild(this.nm1.nativeElement, this.children);
      numero1.append((this.numero1-1).toString()); numero2.append(this.numero1); numero3.append(this.numero1+1);
      this.respuesta = this.numero1;
      this.numero1 = '';
    } else if(aleatorio == 2) {
      this.nm2.nativeElement.className = 'nm_1 nm_2'
      this.renderer.appendChild(this.nm2.nativeElement, this.children);
      numero1.append((this.numero2-1).toString());numero2.append(this.numero2);numero3.append(this.numero2+1);
      this.respuesta = this.numero2;
      this.numero2 = '';
    } else if (aleatorio == 3) {
      this.nm3.nativeElement.className = 'nm_1 nm_2'
      this.renderer.appendChild(this.nm3.nativeElement, this.children);
      numero1.append((this.numero3-1).toString());numero2.append(this.numero3);numero3.append(this.numero3+1);
      this.respuesta = this.numero3;
      this.numero3 = '';
    } else {
      this.nm4.nativeElement.className = 'nm_1 nm_2'
      this.renderer.appendChild(this.nm4.nativeElement, this.children);
      numero1.append((this.numero4-1).toString());numero2.append(this.numero4);numero3.append(this.numero4+1);
      this.respuesta = this.numero4;
      this.numero4 = '';
    }

    this.renderer.appendChild(this.children, numero1);
    this.renderer.appendChild(this.children, numero2);
    this.renderer.appendChild(this.children, numero3);
  }

  metodo2(op:any){
    if( this.aleatorioInicial == 1){
      this.numero1 = op;
    }else if( this.aleatorioInicial == 2){
      this.numero2 = op;
    }else if( this.aleatorioInicial == 3){
      this.numero3 = op;
    }else if( this.aleatorioInicial == 4){
      this.numero4 = op;
    }
    this.estadoCal = false;
  }

  calificar(){
    var child = document.getElementsByClassName('cnt_pc')

    if( this.aleatorioInicial == 1){
      this.borrarOpciones(this.nm1.nativeElement);

      if( this.numero1 ==  this.respuesta){
        this.respuestaCorrecta(this.nm1.nativeElement);
        this.punteo += 1;
      }else{
        this.respuestaMala(this.nm1.nativeElement);
      }
    }else if( this.aleatorioInicial == 2){
      this.borrarOpciones(this.nm2.nativeElement);

      if( this.numero2 ==  this.respuesta){
        this.respuestaCorrecta(this.nm2.nativeElement);
        this.punteo += 1;
      }else{
        this.respuestaMala(this.nm2.nativeElement);
      }
    }else if( this.aleatorioInicial == 3){
      this.borrarOpciones(this.nm3.nativeElement);

      if( this.numero3 ==  this.respuesta){
        this.respuestaCorrecta(this.nm3.nativeElement);
        this.punteo += 1;
      }else{
        this.respuestaMala(this.nm3.nativeElement);
      }
    }else if( this.aleatorioInicial == 4){
      this.borrarOpciones(this.nm4.nativeElement);

      if( this.numero4 ==  this.respuesta){
        this.respuestaCorrecta(this.nm4.nativeElement);
        this.punteo += 1;
      }else{
        this.respuestaMala(this.nm4.nativeElement);
      }
    }
    localStorage.setItem("currentPunteo",this.punteo.toString());
    this.intentos += 1;
    localStorage.setItem("currentIntentos",this.intentos.toString());
  }

  borrarOpciones(resetear){
    this.renderer.removeChild(resetear, this.children);
  }

  respuestaMala(elemento){
    elemento.className = "nm_malo";
    this.children = document.createElement('p');
    this.children.className = 'p_malo';
    this.children.append(`La respuesta correcta es ${ this.respuesta }`);
    this.renderer.appendChild(elemento, this.children);
    this.estadoCal = true;

    setTimeout(()=>{
      this.aleatorioNumber();
      this.aleatorioInicial = this.getRandomArbitrary(1, 5);
      this.borrarOpciones(elemento);
      this.metodo1(this.aleatorioInicial);
      if( this.intentos ==  +localStorage.getItem('currentSecuencia') ){
        this.router.navigate(['results']);
      }
     }, 2500);
  }

  respuestaCorrecta(elemento){
    elemento.className = "nm_bueno";
    this.children = document.createElement('img');
    this.renderer.setAttribute(this.children,"src","../../../assets/img/correcto.svg");
    this.children.className = 'img_correcto';
    this.renderer.appendChild(elemento, this.children);
    this.estadoCal = true;

    setTimeout(()=>{
      this.aleatorioNumber();
      this.aleatorioInicial = this.getRandomArbitrary(1, 5);
      this.borrarOpciones(elemento);
      this.metodo1(this.aleatorioInicial);
      if( this.intentos ==  +localStorage.getItem('currentSecuencia') ){
        this.router.navigate(['results']);
      }
     }, 1000);
  }

}
