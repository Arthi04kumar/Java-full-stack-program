import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { FactorialService } from './factorial.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent 
{
  sum:number;
  a:number;
  constructor(private calc:CalculatorService, private fact :FactorialService){
    this.sum=calc.getAddition(10,30);
    this.a = fact.getFact(5);
  }
}