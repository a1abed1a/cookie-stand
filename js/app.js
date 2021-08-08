'use strict';
let startHour = 6;
let endHour = 20;
let hourOfWork = endHour - startHour;

let Seattle = {
  location : 'Seattle',
  min : 23,
  max : 65,
  avg : 6.3,
  cookiesPerHour:[]
};
let Tokyo = {
  location : 'Tokyo',
  min : 3,
  max : 24,
  avg : 1.2,
  cookiesPerHour:[]
};
let Dubai = {
  location : 'Dubai',
  min : 11,
  max : 38,
  avg : 3.7,
  cookiesPerHour:[]
};
let Paris = {
  location : 'Paris	',
  min : 20,
  max : 38,
  avg : 2.3,
  cookiesPerHour:[]
};
let Lima = {
  location : 'Lima',
  min : 2,
  max : 16,
  avg : 4.6,
  cookiesPerHour:[]
};
function perHour (obj){
  let total = 0;
  for(let i = 0; i < hourOfWork; i++){
    let ran = Math.floor((Math.random() * (obj.max - obj.min + 1) + obj.min)*obj.avg);
    total += ran;
    obj.cookiesPerHour.push(ran);
  }
  obj.cookiesPerHour.push(total);
}
function printPerHour (obj){
  let message = obj.location;
  for(let i = startHour; i < endHour; i++){
    if(i % 12 == 0){
      message = message + `\n${i}am: ${obj.cookiesPerHour[i-startHour]} cookies`;
    }else{
      message = message + `\n${i%12}pm: ${obj.cookiesPerHour[i-startHour]} cookies`;
    }
  }
  message = message + `\nTotal: ${obj.cookiesPerHour[hourOfWork]} cookies`;
  console.log(message);
}
perHour(Seattle);
printPerHour(Seattle);

perHour(Tokyo);
printPerHour(Tokyo);

perHour(Dubai);
printPerHour(Dubai);

perHour(Paris);
printPerHour(Paris);

perHour(Lima);
printPerHour(Lima);
