export class Customer{
  constructor(public _id:number,public _name:string,public _discount:number){}
  get id():number{
    return this._id;
  }
  get name():string{
    return this._name;
  }
  get discount():number{
    return this._discount;
  }
  set discount(disc:number){
    this._discount = disc;
  }
  toString():string{
    return `${this._name}(${this.id})`;
  }
}
  
export class Invoice{
  constructor(public _id:number,public _customer:Customer,public _amount:number){}
  get id():number{
    return this._id;
  }
  get customer():Customer{
    return this._customer;
  }
  set customer(customer:Customer){
    this._customer = customer;
  }
  get amount():number{
    return this._amount;
  }
  set amount(amount:number){
    this._amount = amount;
  }
  get customerName():string{
    return this._customer.name;
  }
  get amountAfterDiscount():number{
    return this._amount*(100-this._customer.discount)/100;
  }
}

export class Accounts{
  constructor(public _id:number,public _customer:Customer,public _balance:number){}
  get id():number{
    return this._id;
  }
  get customer():Customer{
    return this._customer;
  }
  get balance():number{
    return this._balance;
  }
  set balance(balance:number){
    this._balance = balance;
  }
  toString():string{
    return `${this._customer.name}(${this._customer.id}) balance=$${this._balance.toFixed(2)}`;
  }
  get customerName():string{
    return this._customer.name;
  }
  deposit(amount:number):void{
    this._balance += amount;
  }
  withdraw(amount:number):void{
    if (this._balance >= amount)
      this._balance -= amount;
    else
      alert("amount withdrawn exceeds the current balance");
  }
}
