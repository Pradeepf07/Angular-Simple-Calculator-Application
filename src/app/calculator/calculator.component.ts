import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result = 0;
  calculatinstring = "";
  tempva1 = "";
  tempva2 = "";
  operator = "";
  constructor() { }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // alert(event.key);
    switch (event.key) {
      case "0":
        this.number0();
        break;
      case "1":
        this.number1();
        break;
      case "2":
        this.number2();
        break;
      case "3":
        this.number3();
        break;
      case "4":
        this.number4();
        break;
      case "5":
        this.number5();
        break;
      case "6":
        this.number6();
        break;
      case "7":
        this.number7();
        break;
      case "8":
        this.number8();
        break;
      case "9":
        this.number9();
        break;
      case '+':
        this.plusclick();
        break;
      case '-':
        this.minusclick();
        break;
      case '*':
        this.multiplicationclick();
        break;
      case '/':
        this.divisionclick();
        break;
      case 'Enter':
        this.Enter_keypress();
        break;
    }
  }

  ngOnInit() {
    this.result = 0;
    this.calculatinstring = "";
    this.tempva1 = "";
    this.tempva2 = "";
    this.operator = "";
  }

  number0() {
    this.calculatinstring += 0;
    if (this.operator == "")
      this.tempva1 += "0"
    else if (this.tempva1 != "") {
      this.tempva2 += "0";
    }
  }
  number1() {
    this.calculatinstring += 1;
    if (this.operator == "")
      this.tempva1 += "1"
    else if (this.tempva1 != "") {
      this.tempva2 += "1";
      // this.Calculator(this.tempva1, this.tempva2, this.operator);
      // this.tempva2 = "";
    }
  }
  number2() {
    this.calculatinstring += 2;
    if (this.operator == "")
      this.tempva1 += "2"
    else if (this.tempva1 != "") {
      this.tempva2 += "2";
    }
  }
  number3() {
    this.calculatinstring += 3;
    if (this.operator == "")
      this.tempva1 += "3"
    else if (this.tempva1 != "") {
      this.tempva2 += "3";
    }
  }
  number4() {
    this.calculatinstring += 4;
    if (this.operator == "")
      this.tempva1 += "4"
    else if (this.tempva1 != "") {
      this.tempva2 += "4";
    }
  }
  number5() {
    this.calculatinstring += 5;
    if (this.operator == "")
      this.tempva1 += "5"
    else if (this.tempva1 != "") {
      this.tempva2 += "5";
    }
  }
  number6() {
    this.calculatinstring += 6;
    if (this.operator == "")
      this.tempva1 += "6"
    else if (this.tempva1 != "") {
      this.tempva2 += "6";
    }
  }
  number7() {
    this.calculatinstring += 7;
    if (this.operator == "")
      this.tempva1 += "7"
    else if (this.tempva1 != "") {
      this.tempva2 += "7";
    }
  }
  number8() {
    this.calculatinstring += 8;
    if (this.operator == "")
      this.tempva1 += "8"
    else if (this.tempva1 != "") {
      this.tempva2 += "8";
    }
  }
  number9() {
    this.calculatinstring += 9;
    if (this.operator == "")
      this.tempva1 += "9"
    else if (this.tempva1 != "") {
      this.tempva2 += "9";
    }
  }

  plusclick() {
    if (this.tempva1 != "") {
      this.calculatinstring += "+"
      if (this.operator == "")
        this.operator = "+"
      else {
        this.Calculator(this.tempva1, this.tempva2, this.operator);
        this.operator = "+";
        this.tempva2 = "";
      }
    }
    else if(this.result != 0 && this.tempva1 ==""){
      this.tempva1 = ""+this.result;
      this.calculatinstring = this.tempva1+"+";
      this.operator="+";
    }
  }
  minusclick() {
    if (this.tempva1 != "") {
      this.calculatinstring += "-"
      if (this.operator == "")
        this.operator = "-"
      else {
        this.Calculator(this.tempva1, this.tempva2, this.operator);
        this.operator = "-";
        this.tempva2 = "";
      }
    }
    else if(this.result != 0 && this.tempva1 ==""){
      this.tempva1 = ""+this.result;
      this.calculatinstring = this.tempva1+"-";
      this.operator="-";
    }
  }
  divisionclick() {
    if (this.tempva1 != "") {
      this.calculatinstring += "/"
      if (this.operator == "")
        this.operator = "/"
      else {
        this.Calculator(this.tempva1, this.tempva2, this.operator);
        this.operator = "/";
        this.tempva2 = "";
      }
    }
    else if(this.result != 0 && this.tempva1 ==""){
      this.tempva1 = ""+this.result;
      this.calculatinstring = this.tempva1+"/";
      this.operator="/";
    }
  }
  multiplicationclick() {
    if (this.tempva1 != "") {
      this.calculatinstring += "*"
      if (this.operator == "")
        this.operator = "*"
      else {
        this.Calculator(this.tempva1, this.tempva2, this.operator);
        this.operator = "*";
        this.tempva2 = "";
      }
    }
    else if(this.result != 0 && this.tempva1 ==""){
      this.tempva1 = ""+this.result;
      this.calculatinstring = this.tempva1+"*";
      this.operator="*";
    }
  }

  Enter_keypress() {
    this.calculatinstring = "";
    if (this.operator != "") {
      this.Calculator(this.tempva1, this.tempva2, this.operator);
      this.tempva1 = "";
      this.tempva2 = "";
    }
    else{
      this.tempva1 = "";
      this.tempva2 = "";
    }
  }


  Calculator(a: string, b: string, op: string) {
    console.log("a : " + a + " b:" + b + " op:" + op);
    switch (op) {
      case '+':
        this.result = Number(a) + Number(b);
        this.tempva1 = "" + this.result;
        this.operator = "";
        return;
      case '-':
        this.result = Number(a) - Number(b);
        this.tempva1 = "" + this.result;
        this.operator = "";
        return;
      case '+':
        this.result = Number(a) + Number(b);
        this.tempva1 = "" + this.result;
        break;
      case '+':
        this.result = Number(a) + Number(b);
        this.tempva1 = "" + this.result;
        break;
    }
  }
}
