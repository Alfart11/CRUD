import { Component } from '@angular/core';
import { Auto } from 'src/app/interfaces/auto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// .................................................... AUTOS ......................................................//
// .................................................... AUTO01 ......................................................//
public Auto01: Auto = {
  id: 1,
  nombre: "4Runner",
  marca: "Toyota",
  precio: 23100
};
// .................................................... AUTO02 ......................................................//
public Auto02: Auto = {
  id: 2,
  nombre: "Avanza",
  marca: "Toyota",
  precio: 82680
};
// .................................................... AUTO03 ......................................................//
public Auto03: Auto = {
  id: 3,
  nombre: "Hilux",
  marca: "Toyota",
  precio: 16028
};

  autoArray: Auto[] = [this.Auto01,this.Auto02,this.Auto03];
  public Auto:Auto=this.autoVacio();
  public posicion: number = -1
  
  AgregarEditar(): void {
    if(this.posicion == -1){
    this.Auto.id = this.autoArray.length + 1;
    this.autoArray.push(this.Auto);
    this.Auto= this.autoVacio();
    console.log("el arreglo de Autos tiene:",this.autoArray.length,"elementos")
    console.table(this.autoArray)
    }
    else{
      let selectAuto: Auto =  this.autoArray[this.posicion];
      selectAuto.id = this.Auto.id;
      selectAuto.nombre = this.Auto.nombre;
      selectAuto.marca = this.Auto.marca;
      selectAuto.precio = this.Auto.precio;
      this.Auto = this.autoVacio();
      this.posicion = -1;
    }
}
  autoVacio(): Auto{
  return{
    id: 0,
    nombre:"",
    marca:"",
    precio: 0
  };
}
   eliminar(i: number):void{
    let selectAuto: Auto =  this.autoArray[i];
    this.autoArray.splice(i,1);
   }

   editar(i: number):void{
    let selectAuto: Auto =  this.autoArray[i];

    this.Auto.id = selectAuto.id;
    this.Auto.nombre = selectAuto.nombre;
    this.Auto.marca = selectAuto.marca;
    this.Auto.precio = selectAuto.precio;

    this.posicion = i;

  };

}
