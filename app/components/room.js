import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RoomComponent extends Component {
    text = 'Hello, world!';
    // {{@booking.price}}
    // @tracked preferredButtonColor = '';
    // total = 0;
    // a = document.getElementById("in");
    // @tracked b = document.getElementById("out");
    // inDate = new Date(a);
    // outDate = new Date(b);
    
    // c =  Date.parse(outDate)-Date.parse(inDate);
    // duration =  (c/(1000*3600*24)); 
    // price = document.getElementById("price");

// @action
// calculateTotal(price,duration){
//     console.log(duration);
//     return total =  price * duration;
// }

// @action
// calculateTotal(){
//     // console.log(duration);
//     return total =  4*5;
// }
@action
sayHello() {
    let a = document.getElementById("in").value;
    let b = document.getElementById("out").value;

    if ((Date.parse(b) <= Date.parse(a))) {
    alert("Return date should be greater than Departure date");
    document.getElementById("out").value = "";
    }
    let inDate = new Date(a);
    let outDate = new Date(b);
    console.log(inDate,outDate);
    // let timeDiff = Math.abs(b.getTime() - a.getTime());
    // let diffDays = Math.ceil(timeDiff / (1000*3600*24));
    // console.log(diffDays);
    console.log(a,b);
    // console.log(b-a);
    
     let c =  Date.parse(outDate)-Date.parse(inDate);
     let d = (c/(1000*3600*24));
     console.log(c / (1000*3600*24));
     document.getElementById("night").innerHTML = d;

    let e = document.getElementById("price").innerHTML.replace(/[^0-9]/g, "");
    let f = d*e;
    let service = document.getElementById("service").innerHTML.replace(/[^0-9]/g, "");
    let fee = f+ (f* service)/100;
    let fees = Math.ceil(fee);
    console.log(fee);
    console.log(Math.ceil(fee))
    console.log(f);
    console.log(e);
    // let g= document.querySelectorAll("#final");
    [... document.querySelectorAll('#final')]
    .map(i => i.innerHTML = `$ ${fees}`);


//   console.log(g);
}

@action
  changeColor() {
    if (this.preferredButtonColor === '') {
        this.preferredButtonColor = 'red';
    }
    else {
        this.preferredButtonColor = '';
        // this.set('preferredButtonColor', 'transparent');
      }
    }
}