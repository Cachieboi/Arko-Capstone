import { EventEmitter } from "@angular/core";
import { Merch } from "../models/Merch.model"

export class MerchService{
  accountlist = new EventEmitter<Merch[]>();
    
  private merchs: Merch[] = [
    new Merch('Cach',2,'angeloagustin.cachuela.iics@ust.edu.ph'),
    new Merch('Cach',3,'angeloagustin.cachuela.iics@ust.edu.ph'),
    new Merch('Angelo',4,'cachuela.iics@ust.edu.ph')    
  ];
  
  getMerch(){
      return this.merchs.slice();
  }

  addMerch(merchs: Merch){
      this.merchs.push(merchs);
      
  }

  
 

}