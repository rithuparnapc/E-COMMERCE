import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartarray:any=[];//array
  cartlist=new BehaviorSubject([])//list
  //grandtotal: Number=0;

  constructor() { }
  //add to cart
  addtocart(product:any){
    this.cartarray.push(product)
    this.cartlist.next(this.cartarray)//list of data
    console.log(this.cartlist);
    let total=this.gettotal()
    console.log(total);
    
  }

  //calculate grand total
  gettotal(){
    let grandtotal=0;
    this.cartarray.map((item:any)=>{
      grandtotal+=item.price
    })
    return grandtotal
  }

  //remove a single item from cart
  removecart(product:any){
    this.cartarray.map((item:any,index:any)=>{
      if(product.id===item.id){
        this.cartarray.splice(index,1)//remove from cart
      }
    })
    this.cartlist.next(this.cartarray)//update cartlist
  }

  //empty the cart
  removeall(){
    this.cartarray=[]
    this.cartlist.next(this.cartarray)

  }
}
