import {Customer, Invoice, Accounts} from './classes'

let execute = ():void=>{
    let id = document.getElementById("id") as HTMLInputElement;
    let name = document.getElementById("name") as HTMLInputElement;
    let discount = document.getElementById("discount") as HTMLInputElement;
    let amount = document.getElementById("amount") as HTMLInputElement;
    let customerData = document.getElementById("customerData") as HTMLInputElement;
    let cusname = document.getElementById("cusname") as HTMLInputElement;
    let amountAfterDisc = document.getElementById("amountAfterDisc") as HTMLInputElement;
  
    let customer = new Customer(+id.value,name.value,+discount.value);
    let invoice = new Invoice(+id.value,customer,+amount.value);
    customerData.value = customer.toString();
    cusname.value = invoice.customerName;
    amountAfterDisc.value = invoice.amountAfterDiscount.toString();
  
    let balance = document.getElementById("balance") as HTMLInputElement;
    let action = document.getElementById("action") as HTMLSelectElement;
    let amountwd = document.getElementById("amountwd") as HTMLInputElement;
    let customerBal = document.getElementById("customerBal") as HTMLInputElement;
  
    let account = new Accounts(+id.value,customer,+balance.value);
    if (action.value == "Deposit")
      account.deposit(+amountwd.value);
    else
      account.withdraw(+amountwd.value);
  
    customerBal.value = account.toString();
  }
  
  let form = document.querySelector("#submit") as HTMLButtonElement;
  form.addEventListener('click', execute)
  
  
  
  
  
  
  