import { Injectable } from '@angular/core';

@Injectable()
export class FactorialService{
  getFact(a:number,result:number=1){
    for(let i=1;i<=a;i++){
      result*=i
    }
    return result
  }
}

