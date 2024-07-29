import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string;
  age:number;
  email:string;
  txtColor:string;
  imgPath:String;

  constructor(){
    this.name="Aarthi"
    this.age=20;
    this.email="arthikumar2030@gmail.com";
    this.txtColor="lavendar";
    this.imgPath="./assets/angular.png";
  }

  getAddition(a:number,b:number){
    let sum=a+b;
    return sum;
  }
  changename(){
    this.name="Kumar";
  }
  changeage(){
    this.age=21;
  }
  changeemail(){
    this.email="arthiarthi0404@gmail.com";
  }
}
